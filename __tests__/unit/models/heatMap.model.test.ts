import { HeatMap } from '../../../src/models';
import { IHeatMap } from '../../../src/interfaces/HeatMap.interface';

describe('HeatMap model', () => {
  describe('heatMap validation', () => {
    let heatMap: IHeatMap;
    beforeEach(() => {
      heatMap = {
        date: '2022-02-01',
        thr_messages: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
        lone_messages: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
        replier: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
        replied_per_acc: [{ account: 'Magic', count: 4 }],
        replied: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
        mentioner: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
        mentioner_per_acc: [
          { account: 'Behzad', count: 4 },
          { account: 'Magic', count: 2 },
        ],
        mentioned: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
        reacter: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
        reacted_per_acc: [
          { account: 'End', count: 2 },
          { account: 'Magic', count: 2 },
        ],
        reacted: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
        channelId: '123123123123',
        account_name: 'MagicPalm',
      };
    });

    test('should correctly validate a valid heatMap', async () => {
      await expect(new HeatMap(heatMap).validate()).resolves.toBeUndefined();
    });
  });
});
