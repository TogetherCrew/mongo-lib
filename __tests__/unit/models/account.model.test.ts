import { Account } from '../../../src/models';
import { IAccount } from '../../../src/interfaces/Account.interface';

describe('Account model', () => {
  describe('account validation', () => {
    let account: IAccount;
    beforeEach(() => {
      account = {
        accountId: '123',
        account: 'test_account',
        roles: ['admin'],
        joinDate: new Date(),
      };
    });
    test('should correctly validate a valid account data', async () => {
      await expect(new Account(account).validate()).resolves.toBeUndefined();
    });
  });
});
