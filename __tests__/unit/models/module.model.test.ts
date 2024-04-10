import { Module, Platform, Community, User } from '../../../src/models';
import { IModule } from '../../../src/interfaces';
import { Types } from 'mongoose';
// import setupTestDB from '../../utils/setupTestDB';

// setupTestDB();

describe('Module model', () => {
  describe('Module validation', () => {
    let module: IModule;
    beforeEach(() => {
      module = {
        name: 'hivemind',
        community: new Types.ObjectId(),
        options: {
          platforms: [
            {
              platform: new Types.ObjectId(),
              metadata: {
                selectedChannels: ['c1', 'c2'],
              },
            },
          ],
        },
      };
    });

    test('should correctly validate a valid module', async () => {
      await expect(new Module(module).validate()).resolves.toBeUndefined();
    });

    // describe('Middlewares', () => {
    //   test('Pre Remove: should clean up when platform is deleted', async () => {
    //     const user = new User({ discordId: 'discordId' });
    //     await user.save();

    //     const community = new Community({ users: [user._id], name: 'community' });
    //     await community.save();

    //     const platform = new Platform({ name: 'platform', community: community._id });
    //     await platform.save();
    //     let communityDoc = await Community.findById(community.id);
    //     if (communityDoc?.platforms) {
    //       const idAsString = platform.id.toHexString ? platform.id.toHexString() : platform.id;
    //       expect(communityDoc.platforms[0].toHexString()).toBe(idAsString);
    //     }
    //     await platform.remove();
    //     communityDoc = await Community.findById(community.id);
    //     expect(communityDoc?.platforms).toEqual([]);
    //     expect(communityDoc?.roles).toEqual([]);

    //     const platformDoc = await Platform.findById(platform._id);
    //     expect(platformDoc).toBe(null);
    //   });

    //   test('Post Save: should add platformId to the community and admin role for the creator of community', async () => {
    //     const user = new User({ discordId: 'discordId' });
    //     await user.save();

    //     const community = new Community({ users: [user._id], name: 'community' });
    //     await community.save();
    //     user.communities?.push(community._id);

    //     const platform = new Platform({ name: 'platform', community: community._id });
    //     await platform.save();
    //     const communityDoc = await Community.findById(community.id);
    //     if (communityDoc?.platforms && communityDoc?.roles) {
    //       const idAsString = platform.id.toHexString ? platform.id.toHexString() : platform.id;
    //       expect(communityDoc.platforms[0].toHexString()).toBe(idAsString);
    //       expect(JSON.parse(JSON.stringify(communityDoc.roles))).toEqual([
    //         {
    //           _id: expect.anything(),
    //           roleType: 'admin',
    //           source: {
    //             platform: 'discord',
    //             identifierType: 'member',
    //             identifierValues: [user.discordId],
    //             platformId: platform._id.toHexString(),
    //           },
    //         },
    //       ]);
    //     }
    //   });
    // });
  });
});
