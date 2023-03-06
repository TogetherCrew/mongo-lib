import { IChannels } from '../interfaces/Channels.interface';
import { Snowflake } from 'discord.js';
import { Channels} from '../models'

/**
 * Create channel
 * @param {IChannels} data
 * @returns {Promise<IChannels>}
 */
const createChannel = async (data: IChannels) => {
    return Channels.create(data);
}


/**
 * update channel by channelId
 * @param {Snowflake} channelId
 * @param {String} channel
 * @returns {Promise<IChannels>}
 */
const updateChannel = async (channelId: Snowflake, channel: string) => {
    try {
        await Channels.updateOne(
        { channelId: channelId },
        { 
            $set: { channel: channel },
            $currentDate: { last_update: true }
        }
     )

    } catch(e) {
        console.log(e);
    }
}

export default {
    createChannel,
    updateChannel
}