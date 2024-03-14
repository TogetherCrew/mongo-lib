import { Platform, Community ,User} from '../../../src/models';
import { IPlatform } from '../../../src/interfaces';
import { Types } from 'mongoose';
import setupTestDB from '../../utils/setupTestDB';

setupTestDB();

describe('Platform model', () => {
  describe('Platform validation', () => {
    let platform: IPlatform;
    beforeEach(() => {
      platform = {
        name: 'Discord',
        community: new Types.ObjectId(),
        metadata: {
          guildId: 'guildId',
          selectedChannels: ['c1', 'c2'],
        },
        disconnectedAt: null,
      };
    });

    test('should correctly validate a valid platform', async () => {
      await expect(new Platform(platform).validate()).resolves.toBeUndefined();
    });

    describe('Middlewares', () => {

      test('Pre Remove: should clean up when community is deleted', async () => {
        const community = new Community({ users: [new Types.ObjectId()], name: 'community' });
        await community.save();

        const platform = new Platform({ name: 'platform', community: community._id });
        await platform.save();

        community.platforms?.push(platform._id);
        await community.save();

        await platform.remove();

        const communityDoc = await Community.findById(community._id);

        expect(communityDoc?.platforms).not.toContain(platform._id);

        const platformDoc = await Platform.findById(platform._id);
        expect(platformDoc).toBe(null);
      });

      test('Post Save: should add platformId to the community and admin role for the creator of community', async () => {
        const user = new User({ discordId: 'discordId' });
        await user.save();

        const community = new Community({ users: [user._id], name: 'community' });
        await community.save();
        user.communities?.push(community._id)

        const platform = new Platform({ name: 'platform', community: community._id });
        await platform.save();

        community.platforms?.push(platform._id);
        await community.save();

        await community.remove();

        const userDoc = await User.findById(user._id);
        expect(userDoc?.communities).not.toContain(community._id);

        const platformDoc = await Platform.findById(platform._id);
        expect(platformDoc).toBe(null);
      });
    });
  });
});
