import { Channels } from '../../../src/models';
import { IChannels } from '../../../src/interfaces/Channels.interface'
import moment from "moment";

describe('Channels model', () => {
    describe('channels validation', () => {
        let channel: IChannels;
        beforeEach(() => {
            channel = {
                channelId: "1037490021462179915",
                channel: "Test",
                last_update: moment("2022-02-01 08:30:26.127Z").toDate()
            }
        });

        test('should correctly validate a valid rawInfo', async () => {
            await expect(new Channels(channel).validate()).resolves.toBeUndefined();
        });

    });
});