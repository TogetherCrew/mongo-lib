import { Connection } from 'mongoose';
import { Snowflake } from 'discord.js';
import { IGuildUpdateBody } from '../interfaces/Guild.interface'
import { Guild } from '../models'
/**
 * Fetch all guild settings
 * @returns {Array<Promise<IGuild> >}
 */
const fetchGuild = async (connection: Connection) => {
    const data = await Guild.find({ isDisconnected: false });
    return data;
}


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
    updateGuildByGuildId
}
