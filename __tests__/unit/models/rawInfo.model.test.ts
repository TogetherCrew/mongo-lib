import { RawInfo } from '../../../src/models';
import { IRawInfo } from '../../../src/interfaces/RawInfo.interface'

describe('RawInfo model', () => {
    describe('rawInfo validation', () => {
        let heatMap: IRawInfo;
        beforeEach(() => {
            heatMap = {
                type: "REPLY",
                author: "Boda#2954",
                content: "Message Here",
                user_Mentions: ["Beshoy#5456", "Sortoite#2577"],
                roles_Mentions: ["Surrpot"],
                reactions: ["❤️"],
                replied_User: "Sortoite#2577",
                reference_Message: 1050119122215780352,
                created_at: new Date(),
                channelId: "1037490021462179915"

            }
        });

        test('should correctly validate a valid rawInfo', async () => {
            await expect(new RawInfo(heatMap).validate()).resolves.toBeUndefined();
        });

    });
});