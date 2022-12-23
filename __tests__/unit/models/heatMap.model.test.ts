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
                messages: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
                interactions: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2],
                emojis: [0, 1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 4, 3, 1, 2, 0, 1, 0, 1, 0, 2]
            }
        });

        test('should correctly validate a valid heatMap', async () => {
            await expect(new HeatMap(heatMap).validate()).resolves.toBeUndefined();
        });

    });
});