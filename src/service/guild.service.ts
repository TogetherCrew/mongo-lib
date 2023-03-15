import { Snowflake } from 'discord.js';
import { IGuildUpdateBody, IGuildConfig } from '../interfaces/Guild.interface';
import { Guild } from '../models';

/**
 * Fetch all guild settings
 * @param {Snowflake} guildId
 * @returns {Array<Promise<IGuild> >}
 */
const fetchGuild = async (guildId: Snowflake | null) => {
  const config: IGuildConfig = { isDisconnected: false };
  if (guildId !== null) {
    config.guildId = guildId;
  }
  const data = await Guild.find(config);
  return data;
};

/**
 * update guild by guildId
 * @param {Snowflake} guildId
 * @param {IGuildUpdateBody} updateBody
 * @returns {Promise<IGuild>}
 */
async function updateGuildByGuildId(guildId: Snowflake, updateBody: IGuildUpdateBody) {
  const guild = await Guild.findOne({ guildId });
  if (!guild) {
    throw new Error('Guild not found');
  }
  Object.assign(guild, updateBody);
  await guild.save();
  return guild;
}

export default {
  fetchGuild,
  updateGuildByGuildId,
};
