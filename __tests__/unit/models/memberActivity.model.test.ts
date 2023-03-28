import { MemberActivity } from '../../../src/models';
import { IMemberActivity } from '../../../src/interfaces/MemberActivity.interface'

describe('MemberActivity model', () => {
    describe('MemberActivity validation', () => {
        let memberActivity: IMemberActivity;
        beforeEach(() => {
            memberActivity = {
                first_end_date: new Date(),
                all_active: {"0": ["A", "B"], "1": ["C", "D"]},
                all_consistent: {"0": ["A", "B"], "1": ["C", "D"]},
                all_vital: {"0": ["A", "B"], "1": ["C", "D"]},
                all_connected: {"0": ["A", "B"], "1": ["C", "D"]},
                all_paused: {"0": ["A", "B"], "1": ["C", "D"]},
                all_new_disengaged: {"0": ["A", "B"], "1": ["C", "D"]},
                all_disengaged: {"0": ["A", "B"], "1": ["C", "D"]},
                all_unpaused: {"0": ["A", "B"], "1": ["C", "D"]},
                all_returned: {"0": ["A", "B"], "1": ["C", "D"]},
                all_new_active: {"0": ["A", "B"], "1": ["C", "D"]},
                all_still_active: {"0": ["A", "B"], "1": ["C", "D"]},
                all_dropped: {"0": ["A", "B"], "1": ["C", "D"]},
                all_joined: {"0": ["A", "B"], "1": ["C", "D"]},
                all_disengaged_were_newly_active: {"0": ["A", "B"], "1": ["C", "D"]},
                all_disengaged_were_consistenly_active: {"0": ["A", "B"], "1": ["C", "D"]},
                all_disengaged_were_vital: {"0": ["A", "B"], "1": ["C", "D"]},

            };
        });

        test('should correctly validate a valid member activity', async () => {
            await expect(new MemberActivity(memberActivity).validate()).resolves.toBeUndefined();
        });
    });
});