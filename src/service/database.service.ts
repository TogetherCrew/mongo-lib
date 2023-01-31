import mongoose, { Connection } from 'mongoose';
import { heatMapSchema, rawInfoSchema } from '../models/schemas';
import { Snowflake } from 'discord.js';
import { IHeatMap } from '../interfaces/HeatMap.interface';
import { IRawInfo } from '../interfaces/RawInfo.interface';

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
    return connection;
}

export default {
    connectionFactory,
}

