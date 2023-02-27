import { RawInfo } from '../../../src/models';
import { IRawInfo } from '../../../src/interfaces/RawInfo.interface'

describe('RawInfo model', () => {
    describe('rawInfo validation', () => {
        let heatMap: IRawInfo;
        beforeEach(() => {
            heatMap = {
                datetime: "2023-02-03",
                type: "REPLY",
                author: "Boda#2954",
                content: "Message Here",
                user_mentions: ["Beshoy#5456", "Sortoite#2577"],
                role_mentions: ["Surrpot"],
                reactions: ["❤️"],
                replied_user: "Sortoite#2577",
                channelId: "1037490021462179915",
                messageId: "1037490021462179915",
                thread: false

            }
        });

        test('should correctly validate a valid rawInfo', async () => {
            await expect(new RawInfo(heatMap).validate()).resolves.toBeUndefined();
        });

    });
});