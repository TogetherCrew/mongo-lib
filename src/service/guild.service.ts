import { Connection } from 'mongoose';

/**
 * Fetch all guild settings
 * @returns {Array<Promise<IGuild> >}
 */
async function fetchGuild(connection: Connection) {
    const data = await connection.models.Guilds.find({});
    console.log(data);
    return data;
}

export default {
    fetchGuild
}