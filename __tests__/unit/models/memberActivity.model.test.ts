import { MemberActivity } from '../../../src/models';
import { IMemberActivity } from '../../../src/interfaces/MemberActivity.interface'

describe('MemberActivity model', () => {
    describe('MemberActivity validation', () => {
        let memberActivity: IMemberActivity;
        beforeEach(() => {
            memberActivity = {
                lastDate: new Date(),
                activeAccounts: ['A', 'B'],
                joinedAccounts: ['A', 'B'],
                connectedAccounts: ['A', 'B']
            };
        });

        test('should correctly validate a valid member activity', async () => {
            await expect(new MemberActivity(memberActivity).validate()).resolves.toBeUndefined();
        });
    });
});