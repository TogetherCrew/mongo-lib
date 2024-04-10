import { Platform, Community, User, Module } from '../../../src/models';
import { IPlatform } from '../../../src/interfaces';
import { Types } from 'mongoose';
// import setupTestDB from '../../utils/setupTestDB';

// setupTestDB();

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
  });
});
