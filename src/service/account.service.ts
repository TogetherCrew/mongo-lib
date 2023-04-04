import { Connection } from 'mongoose';
import { IAccount } from '../interfaces';
import { Snowflake } from 'discord.js';

/**
 * Create account
 * @param {Iaccount} account
 * @returns {Promise<Iaccount>}
 */
const createAccount = async (connection: Connection, account: IAccount) => {
  try {
    await connection.models.Account.create(account);
  } catch (e) {
    return false;
  }
};

/**
 * fetch account by id
 * @param {Snowflake} id
 * @returns {Promise<IAccount>}
 */
const fetchAccount = async (connection: Connection, id: Snowflake) => {
  const model = connection.models.Account;
  const data = await model.findOne({
    id: id
  });
  return data;
};

/**
 * update account everyday
 * @param {Snowflake} channelId
 * @param {String} channel
 * @returns {Promise<IChannels>}
 */
const updateAccount = async (connection: Connection, channelId: Snowflake, channel: string) => {
  try {
    const Channels = connection.models.Channels;
    await Channels.updateOne(
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
  createRawInfo,
  fetchRawinfo,
  checkExist,
  getRangeId,
};
