import { type Connection } from 'mongoose';
import { type IGuildMember, type IGuildMemberUpdateBody } from '../interfaces';

/**
 * Create guildMember
 * @param {IGuildMember} guildMember
 * @returns {Promise<IGuildMember>}
 */
const createGuildMember = async (connection: Connection, guildMember: IGuildMember): Promise<IGuildMember> => {
  return await connection.models.GuildMember.create(guildMember);
};

/**
 * Create guildMembers
 * @param {IGuildMember} guildMembers
 * @returns {Promise<IGuildMember>}
 */
async function createGuildMembers(connection: Connection, guildMembers: IGuildMember[]) Promise < Array < IGuildMember > {
  return await connection.models.GuildMember.insertMany(guildMembers.map((guildMember) => guildMember));
}

/**
 * update guildMember
 * @param {Object} filter
 * @param {IGuildMemberUpdateBody} updateBody
 * @returns {Promise<IGuildMember>}
 */
async function updateGuildMember(connection: Connection, filter: object, updateBody: IGuildMemberUpdateBody) {
  const guildMember = await connection.models.GuildMember.findOne(filter);
  if (!guildMember) {
    return null;
  }
  Object.assign(guildMember, updateBody);
  await guildMember.save();
  return guildMember;
}

export default {
  createGuildMember,
  createGuildMembers,
  updateGuildMember,
};
