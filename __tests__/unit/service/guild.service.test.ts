import { Snowflake } from 'discord.js';
import { IGuildConfig } from '../../../src/interfaces/Guild.interface';
import { Guild } from '../../../src/models';
import GuildService from '../../../src/service/guild.service';

jest.mock('../../../src/models', () => ({
  Guild: {
    find: jest.fn(),
    findOne: jest.fn(),
  },
}));

describe('GuildService', () => {
  describe('fetchGuild', () => {
    it('should fetch all guilds when no guildId is provided', async () => {
      const mockData: IGuildConfig[] = [{ guildId: '980858613587382322', isDisconnected: false }, { guildId: '1077119783276920862', isDisconnected: false }];
      (Guild.find as jest.MockedFunction<typeof Guild.find>).mockResolvedValueOnce(mockData);

      const result = await GuildService.fetchGuild(null);

      expect(Guild.find).toHaveBeenCalledWith({ isDisconnected: false });
      expect(result).toEqual(mockData);
    });

    it('should fetch a single guild when a guildId is provided', async () => {
      const mockData: IGuildConfig[] = [{ guildId: '1077119783276920862', isDisconnected: false }];
      (Guild.find as jest.MockedFunction<typeof Guild.find>).mockResolvedValueOnce(mockData);

      const guildId: Snowflake = '1077119783276920862';
      const result = await GuildService.fetchGuild(guildId);
      expect(Guild.find).toHaveBeenCalledWith({ guildId, isDisconnected: false });
      expect(result).toEqual(mockData);
    });
  });
});
