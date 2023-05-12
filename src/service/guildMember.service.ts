import { Connection } from 'mongoose';
import { IGuildMember, IGuildMemberUpdateBody } from '../interfaces/GuildMember.interface';

/**
 * Create guildMember
 * @param {IGuildMember} guildMember
 * @returns {Promise<IGuildMember>}
 */
const createGuildMember = async (connection: Connection, guildMember: IGuildMember) => {
  return connection.models.GuildMember.create(guildMember);
};

/**
 * Create guildMembers
 * @param {IGuildMember} guildMembers
 * @returns {Promise<IGuildMember>}
 */
async function createGuildMembers(connection: Connection, guildMembers: IGuildMember[]) {
  return connection.models.GuildMember.insertMany(guildMembers.map((guildMember) => guildMember));
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
