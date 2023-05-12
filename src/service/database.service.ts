import mongoose, { Connection } from 'mongoose';
import { heatMapSchema, rawInfoSchema, MemberActivitySchema, guildMemberSchema } from '../models/schemas/';
import { Snowflake } from 'discord.js';
import { IHeatMap, IRawInfo, IMemberActivity, IGuildMember } from '../interfaces';

/**
 * connect to database (create with guildId if not exist)
 * @param {Snowflake} guildId
 * @param {Snowflake} dbURI
 * @returns {Connection}
 */
function connectionFactory(guildId: Snowflake, dbURI: string): Connection {
  const connection = mongoose.createConnection(dbURI, { dbName: guildId });
  connection.model<IHeatMap>('HeatMap', heatMapSchema);
  connection.model<IRawInfo>('RawInfo', rawInfoSchema);
  connection.model<IMemberActivity>('MemberActivity', MemberActivitySchema);
  connection.model<IGuildMember>('GuildMember', guildMemberSchema);
  return connection;
}

export default {
  connectionFactory,
};
