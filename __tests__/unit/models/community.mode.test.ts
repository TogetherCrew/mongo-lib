import { Community } from '../../../src/models';
import { ICommunity } from '../../../src/interfaces';
import { Types } from 'mongoose';

describe('Community model', () => {
  describe('Community validation', () => {
    let community: ICommunity;
    beforeEach(() => {
      community = {
        name: 'community1',
        users: [new Types.ObjectId()],
      };
    });

    test('should correctly validate a valid community', async () => {
      await expect(new Community(community).validate()).resolves.toBeUndefined();
    });
  });
});
