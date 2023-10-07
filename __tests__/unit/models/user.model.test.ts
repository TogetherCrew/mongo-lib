import { User, Community } from '../../../src/models';
import { IUser } from '../../../src/interfaces';
import { Types } from 'mongoose';
// import setupTestDB from '../../utils/setupTestDB';

// setupTestDB();

describe('User model', () => {
  describe('User validation', () => {
    let user: IUser;

    beforeEach(() => {
      user = {
        discordId: '1234',
        email: 'email@yahoo.com',
        communities: [new Types.ObjectId(), new Types.ObjectId()],
      };
    });

    test('should correctly validate a valid user', async () => {
      await expect(new User(user).validate()).resolves.toBeUndefined();
    });

    test('should throw a validation error if email is invalid', async () => {
      user.email = 'invalidEmail';
      await expect(new User(user).validate()).rejects.toThrow();
    });
  });

  // describe('Cascade deletes', () => {

  //   test('should remove user reference from community when user is deleted', async () => {
  //     const user = new User({ discordId: 'discordId' });
  //     await user.save();

  //     const community = new Community({ users: [user._id], name: 'community' });
  //     await community.save();

  //     await user.remove();

  //     const communityDoc = await Community.findById(community._id);
  //     expect(communityDoc?.users).not.toContain(user._id);

  //   });
  // });
});
