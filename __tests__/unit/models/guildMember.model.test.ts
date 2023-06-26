import { GuildMember } from '../../../src/models';
import { IGuildMember } from '../../../src/interfaces';
import moment from 'moment';

describe('guildMember model', () => {
  describe('guildMember validation', () => {
    let guildMember: IGuildMember;
    beforeEach(() => {
      guildMember = {
        discordId: '123',
        username: 'Behzad#11',
        roles: ['admin'],
        joinedAt: moment('2022-02-01 08:30:26.127Z').toDate(),
        avatar: '100',
        isBot: true,
        discriminator: 'str',
      };
    });
    test('should correctly validate a valid guildMember data', async () => {
      await expect(new GuildMember(guildMember).validate()).resolves.toBeUndefined();
    });
  });
});
