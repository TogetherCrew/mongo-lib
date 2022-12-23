import { IRawInfo } from '../interfaces/RawInfo.interface';
import { RawInfo } from '../models'
/**
 * Create rawInfo
 * @param {IRawInfo} data
 * @returns {Promise<IRawInfo>}
 */
async function createRawInfo(data: IRawInfo) {
    return RawInfo.create(data);
}

export default {
    createRawInfo
}