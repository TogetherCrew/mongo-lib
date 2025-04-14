import { Types } from 'mongoose';

import { ModuleNames } from '../../../src/config/enums';
import { IModule } from '../../../src/interfaces';
import { Module } from '../../../src/models';

// import setupTestDB from '../../utils/setupTestDB';

// setupTestDB();

describe('Module model', () => {
  describe('Module validation', () => {
    let module: IModule;
    beforeEach(() => {
      module = {
        name: ModuleNames.Announcements,
        community: new Types.ObjectId(),
        activated: false,
        options: {
          platforms: [
            {
              platform: null,
              metadata: {
                selectedChannels: ['c1', 'c2'],
              },
              name: null,
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
