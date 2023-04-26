import { Connection } from 'mongoose';
import { IChannels } from '../interfaces/Channels.interface';
import { Snowflake } from 'discord.js';

/**
 * Create channel
 * @param {IChannels} data
 * @returns {Promise<IChannels>}
 */
const createChannel = async (connection: Connection, data: IChannels) => {
  const Channels = connection.models.Channels;
  const now = new Date();
  const dataWithTimestamp = { ...data, last_update: now };
  return await Channels.create(dataWithTimestamp);
};

/**
 * update channel by channelId
 * @param {Snowflake} channelId
 * @param {String} channel
 * @returns {Promise<IChannels>}
 */
const updateChannel = async (connection: Connection, channelId: Snowflake, channel: string) => {
  try {
    const Channels = connection.models.Channels;
    return await Channels.updateOne(
      { channelId },
      {
        $set: { channel },
        $currentDate: { last_update: true },
        $setOnInsert: { channelId },
      },
      { upsert: true }, // create new document if channelId does not exist
    );
  } catch (e) {
    console.log(e);
  }
};

export default {
  createChannel,
  updateChannel,
};
