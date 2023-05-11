import { GuildMember } from '../../../src/models';
import { IGuildMember } from '../../../src/interfaces/GuildMember.interface';

describe('Account model', () => {
  describe('account validation', () => {
    let guildMember: IGuildMember;
    beforeEach(() => {
      guildMember = {
        discordId: '123',
        nick: 'Behzad',
        roles: ['admin'],
        joined_at: "2000/10/15",
        avatar: "100"
      };
    });
    test('should correctly validate a valid guildMember data', async () => {
      await expect(new GuildMember(guildMember).validate()).resolves.toBeUndefined();
    });
  });
});
