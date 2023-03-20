import mongoose, { Connection } from 'mongoose';
import { heatMapSchema, rawInfoSchema, channelSchema, MemberActivitySchema } from '../models/schemas';
import { Snowflake } from 'discord.js';
import { IHeatMap, IRawInfo, IChannels, IMemberActivity } from '../interfaces';

const connectionMap = {} as { [key: string]: mongoose.Connection };

/**
 * connect to database (create with guildId if not exist)
 * @param {Snowflake} guildId
 * @param {Snowflake} dbURI
 * @returns {Connection}
 */
function connectionFactory(guildId: Snowflake, dbURI: string): Connection {
  if (connectionMap.guildId) {
    return connectionMap.guildId;
  }

  const connection = mongoose.createConnection(dbURI, { dbName: guildId });
  connection.model<IHeatMap>('HeatMap', heatMapSchema);
  connection.model<IRawInfo>('RawInfo', rawInfoSchema);
  connection.model<IChannels>('Channels', channelSchema);
  connection.model<IMemberActivity>('MemberActivity', MemberActivitySchema);

  connectionMap[guildId] = connection;

  return connection;
}

export default {
  connectionFactory,
};
