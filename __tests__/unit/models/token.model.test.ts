import { Token } from '../../../src/models';
import { IToken } from '../../../src/interfaces';
import { Types } from 'mongoose';
import moment from 'moment';
import { TokenTypeNames } from '../../../src/config/enums';

describe('Token model', () => {
  describe('Token validation', () => {
    let token: IToken;
    beforeEach(() => {
      token = {
        user: new Types.ObjectId(),
        token: '4321',
        type: TokenTypeNames.GOOGLE_REFRESH,
        expires: moment('2022-02-01 08:30:26.127Z').toDate(),
      };
    });

    test('should correctly validate a valid token', async () => {
      await expect(new Token(token).validate()).resolves.toBeUndefined();
    });

    test('should throw a validation error if type is invalid', async () => {
      const invalidToken = {
        user: new Types.ObjectId(),
        token: '4321',
        type: 'invalidToken',
        expires: moment('2022-02-01 08:30:26.127Z').toDate(),
      };
      await expect(new Token(invalidToken).validate()).rejects.toThrow();
    });
  });
});
