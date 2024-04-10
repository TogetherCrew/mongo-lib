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
  });
});
