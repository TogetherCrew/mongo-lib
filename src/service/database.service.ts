import mongoose, { Connection } from 'mongoose';
import { heatMapSchema, rawInfoSchema, guildSchema } from '../models/schemas';
import { Snowflake } from 'discord.js';
import { IHeatMapModel } from '../interfaces/HeatMap.interface';
import { IRawInfoModel } from '../interfaces/RawInfo.interface';
import { IGuildModel } from '../interfaces/Guild.interface';
/**
 * connect to database (create with guildId if not exist)
 * @param {Snowflake} guildId
 * @param {Snowflake} dbURI
 * @returns {Connection}
 */
function connectionFactory(guildId: Snowflake, dbURI: string): Connection {
    const connection = mongoose.createConnection(dbURI, { dbName: guildId });
    connection.model<IHeatMapModel>('HeatMap', heatMapSchema);
    connection.model<IRawInfoModel>('RawInfo', rawInfoSchema);
    connection.model<IGuildModel>('Guilds', guildSchema);
    return connection;
}

export default {
    connectionFactory,
}

