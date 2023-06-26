import { MemberActivity } from '../../../src/models';
import { IMemberActivity } from '../../../src/interfaces';

describe('MemberActivity model', () => {
  describe('MemberActivity validation', () => {
    let memberActivity: IMemberActivity;
    beforeEach(() => {
      memberActivity = {
        date: new Date(),
        all_joined: [],
        all_consistent: [],
        all_vital: [],
        all_active: [
          'nimatorabiv#2903',
          'MagicPalm#5706',
          'DenisFox.#1743',
          'Behzad#1761',
          'sepehr#3795',
          'katerinabc#6667',
          'danielo#2815',
          'Ashish G#1920',
          'mehrdad_mms#8600',
          'Tanusree#3121',
          'Ene SS Rawa#0855',
        ],
        all_connected: ['Ene SS Rawa#0855', 'Ashish G#1920', 'katerinabc#6667', 'danielo#2815'],
        all_paused: [],
        all_new_disengaged: [],
        all_disengaged: [],
        all_unpaused: [],
        all_returned: [],
        all_new_active: [
          'nimatorabiv#2903',
          'MagicPalm#5706',
          'DenisFox.#1743',
          'Behzad#1761',
          'sepehr#3795',
          'katerinabc#6667',
          'danielo#2815',
          'Ashish G#1920',
          'mehrdad_mms#8600',
          'Tanusree#3121',
          'Ene SS Rawa#0855',
        ],
        all_still_active: [],
      };
    });

    test('should correctly validate a valid member activity', async () => {
      await expect(new MemberActivity(memberActivity).validate()).resolves.toBeUndefined();
    });
  });
});
