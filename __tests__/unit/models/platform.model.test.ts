import { Platfrom } from '../../../src/models';
import { IPlatform } from '../../../src/interfaces';
import { Types } from 'mongoose';

describe('Platfrom model', () => {
  describe('Platform validation', () => {
    let platfrom: IPlatform;
    beforeEach(() => {
      platfrom = {
        name: 'Discord',
        community: new Types.ObjectId(),
      };
    });

    test('should correctly validate a valid platfrom', async () => {
      await expect(new Platfrom(platfrom).validate()).resolves.toBeUndefined();
    });
  });
});
