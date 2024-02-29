import { Channel } from '../../../src/models';
import { IChannel } from '../../../src/interfaces';

describe('Channel model', () => {
  describe('channel validation', () => {
    let channel: IChannel;
    beforeEach(() => {
      channel = {
        channelId: '123',
        name: 'channel1',
        parentId: 'admin',
        type: 1,
        permissionOverwrites: [
          {
            id: '1122334455', // example Snowflake ID for the role or member
            type: 0,
            allow: 'VIEW_CHANNEL',
            deny: 'SEND_MESSAGES',
          },
          {
            id: '9988776655', // another example Snowflake ID for the role or member
            type: 1,
            allow: 'VIEW_CHANNEL,SEND_MESSAGES',
            deny: '',
          },
        ],
      };
    });
    test('should correctly validate a valid Channel data', async () => {
      await expect(new Channel(channel).validate()).resolves.toBeUndefined();
    });
  });
});
