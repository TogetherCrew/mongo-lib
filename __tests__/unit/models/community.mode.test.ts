import { Community, User, Platform } from '../../../src/models';
import { ICommunity } from '../../../src/interfaces';
import { Types } from 'mongoose';
import setupTestDB from '../../utils/setupTestDB';

setupTestDB();

describe('Community model', () => {
  describe('Community validation', () => {
    let community: ICommunity;
    beforeEach(() => {
      community = {
        name: 'community1',
        users: [new Types.ObjectId()],
        avatarURL: 'avatarURL',
        platforms: [new Types.ObjectId(), new Types.ObjectId()],
      };
    });

    test('should correctly validate a valid community', async () => {
      await expect(new Community(community).validate()).resolves.toBeUndefined();
    });
    describe('Middlewares', () => {

      test('Pre Remove: should clean up when community is deleted', async () => {
        const user = new User({ discordId: 'discordId' });
        await user.save();

        const community = new Community({ users: [user._id], name: 'community' });
        await community.save();
        user.communities?.push(community._id)

        const platform = new Platform({ name: 'platform', community: community._id });
        await platform.save();

        await community.remove();

        const userDoc = await User.findById(user._id);
        expect(userDoc?.communities).not.toContain(community._id);

        const platformDoc = await Platform.findById(platform._id);
        expect(platformDoc).toBe(null);
      });
    });
  });
});
