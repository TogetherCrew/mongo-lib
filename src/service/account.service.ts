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
    const model = connection.models.Account;
    const findout = await model.findOne({
      accountId: account.accountId,
    });
    if (findout) {
      // already exist
      return false;
    }
    return await model.create(account);
  } catch (e) {
    console.log(e);
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
    accountId: id,
  });
  return data;
};

/**
 * update account everyday
 * @param {Snowflake} id
 * @param {IAccount} newAccount
 * @returns {Promise<IAccount>}
 */
const updateAccount = async (connection: Connection, id: Snowflake, newAccount: IAccount) => {
  try {
    const model = connection.models.Account;
    return await model.updateOne(
      { accountId: id },
      newAccount,
      { upsert: true }, // create new document if channelId does not exist
    );
  } catch (e) {
    console.log(e);
    return;
  }
};

/**
 * update account everyday
 * @param {Snowflake} id
 * @returns {Promise<IAccount>}
 */
const removeAccount = async (connection: Connection, id: Snowflake) => {
  try {
    const model = connection.models.Account;
    return await model.findOneAndRemove({ accountId: id });
  } catch (e) {
    console.log(e);
  }
};
export default {
  createAccount,
  updateAccount,
  fetchAccount,
  removeAccount,
};
