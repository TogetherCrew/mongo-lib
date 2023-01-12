import { Connection } from 'mongoose';

/**
 * Fetch all guild settings
 * @returns {Array<Promise<IGuild> >}
 */
const fetchGuild = async (connection: Connection) => {
    const data = await connection.models.Guilds.find({});
    return data;
}

export default {
    fetchGuild
}