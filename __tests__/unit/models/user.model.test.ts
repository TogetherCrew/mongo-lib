import { PlatformNames } from '../../../src/config/enums';
import { User, Community } from '../../../src/models';
import { IUser } from '../../../src/interfaces';
import { Types } from 'mongoose';
import { describe, beforeEach, test, expect } from '@jest/globals';

// import setupTestDB from '../../utils/setupTestDB';
// setupTestDB();

describe('User model', () => {
  describe('User validation', () => {
    let user: IUser;

    beforeEach(() => {
      user = {
        identities: [
          {
            provider: PlatformNames.Discord,
            id: 'discordUserId1234',
          },
          {
            provider: PlatformNames.Telegram,
            id: 'telegramUserId5678',
          },
        ],
        communities: [new Types.ObjectId(), new Types.ObjectId()],
        tcaAt: new Date(),
      };
    });

    test('should correctly validate a valid user', async () => {
      await expect(new User(user).validate()).resolves.toBeUndefined();
    });

    test('should fail validation if provider is invalid', async () => {
      const invalidUser = {
        ...user,
        identities: [
          {
            provider: 'invalidProvider',
            id: 'someId',
          },
        ],
      };
      await expect(new User(invalidUser).validate()).rejects.toThrow();
    });

    test('should fail validation if id is missing', async () => {
      const invalidUser = {
        ...user,
        identities: [
          {
            provider: PlatformNames.Discord,
            id: '',
          },
        ],
      };
      await expect(new User(invalidUser).validate()).rejects.toThrow();
    });
  });

  // Uncomment and update middleware tests as needed
  /*
  describe('Middlewares', () => {
    test('Pre Remove: should remove user reference from community when user is deleted', async () => {
      const user = new User({ identities: [{ provider: PlatformNames.Discord, providerUserId: 'discordId' }] });
      await user.save();

      const community = new Community({ users: [user._id], name: 'community' });
      await community.save();

      await user.remove();

      const communityDoc = await Community.findById(community._id);
      expect(communityDoc?.users).not.toContain(user._id);
    });
  });
  */
});
