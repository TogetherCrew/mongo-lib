import { Account } from '../../../src/models';
import { IAccount } from '../../../src/interfaces/Account.interface';

describe('Account model', () => {
  describe('account validation', () => {
    let account: IAccount;
    beforeEach(() => {
      account = {
        id: '123',
        account: 'test_account',
        roles: ['admin'],
        joinDate: new Date(),
        joinedChannel: "123123"
      };
    });
    test('should correctly validate a valid channel data', async () => {
      await expect(new Account(account).validate()).resolves.toBeUndefined();
    });
  });
});
