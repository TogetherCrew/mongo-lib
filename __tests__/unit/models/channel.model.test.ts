import { Channel } from '../../../src/models';
import { IChannel } from '../../../src/interfaces';

describe('Channel model', () => {
  describe('channel validation', () => {
    let channel: IChannel;
    beforeEach(() => {
      channel = {
        id: '123',
        name: 'channel1',
        parent_id: 'admin',
      };
    });
    test('should correctly validate a valid Channel data', async () => {
      await expect(new Channel(channel).validate()).resolves.toBeUndefined();
    });
  });
});
