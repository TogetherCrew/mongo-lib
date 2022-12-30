import { Connection } from 'mongoose';
import { IRawInfo } from '../interfaces/RawInfo.interface';

/**
 * Create rawInfo
 * @param {IRawInfo} data
 * @returns {Promise<IRawInfo>}
 */
async function createRawInfo(connection: Connection, data: IRawInfo) {
    return connection.models.RawInfo.create(data);
}

export default {
    createRawInfo
}