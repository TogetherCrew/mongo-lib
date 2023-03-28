import { Guild } from '../../../src/models';
import { IGuild } from '../../../src/interfaces/Guild.interface'
import moment from "moment";

describe('Guild model', () => {
    describe('Guild validation', () => {
        let guild: IGuild;
        beforeEach(() => {
            guild = {
                guildId: "681946187490000906",
                user: "681946187490000906",
                name: "guild",
                selectedChannels: [{
                    channelId: "681946187490000906",
                    channelName: "channel"
                }],
                period: moment("2022-02-01 08:30:26.127Z").toDate(),
                connectedAt: moment("2022-02-01 08:30:26.127Z").toDate(),
                isDisconnected: true,
                isInProgress: false,
                icon: null,
                window: [7, 1],
                action: [1, 1, 1, 4, 3, 5, 5, 4, 3, 3, 2]
            };
        });

        test('should correctly validate a valid guild', async () => {
            await expect(new Guild(guild).validate()).resolves.toBeUndefined();
        });

    });
});