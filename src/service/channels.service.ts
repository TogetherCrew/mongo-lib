import { Connection } from 'mongoose';
import { IChannels } from '../interfaces/Channels.interface';

/**
 * Create heatmap
 * @param {IChannels} data
 * @returns {Promise<IChannels>}
 */
async function createChannel(connection: Connection, data: IChannels) {
    return connection.models.HeatMap.create(data);
}

export default {
    createChannel
}