import { HeatMap } from '../../../src/models';
import { IHeatMap } from '../../../src/interfaces/HeatMap.interface'
import moment from "moment";

describe('HeatMap model', () => {
    describe('heatMap validation', () => {
        let heatMap: IHeatMap;
        beforeEach(() => {
            heatMap = {
                date: moment("2022-02-01 08:30:26.127Z").toDate(),
                channel: "Human vibez",
                thr_messages: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
                lone_messages: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
                replier: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
                replied: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
                mentioned: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
                mentioner: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
                reacter: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
                reacted: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
                account_name: "MagicPalm"
            }
        });

        test('should correctly validate a valid heatMap', async () => {
            await expect(new HeatMap(heatMap).validate()).resolves.toBeUndefined();
        });

    });
});