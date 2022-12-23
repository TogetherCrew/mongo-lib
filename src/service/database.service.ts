import mongoose from "mongoose";
import { User } from "../models";
import config from '../config';


/**
 * connect to db(or create if it is not exist)
 * @param {string} guildname
 */
async function connectToDB(guildname: string) {
    mongoose.set("strictQuery", false);
    mongoose.connect(config.mongoose.url, { dbName: guildname });
    // NOTE: connect to a database will not create a new database so for creating database we need crated document in that.
    // TODO: need
    if (!await User.findOne({ discordId: 'discordId' })) {
        await User.create({ discordId: 'discordId' });
    }
    mongoose.connection.close();
}



export default {
    connectToDB
}
