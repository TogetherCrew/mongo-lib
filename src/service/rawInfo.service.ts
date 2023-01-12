import { Connection } from 'mongoose';
import { IRawInfo, IGuild } from '../interfaces';
import moment = require("moment");

/**
 * Create rawInfo
 * @param {IRawInfo} data
 * @returns {Promise<IRawInfo>}
*/
async function createRawInfo(connection: Connection, data: IRawInfo) {
    return connection.models.RawInfo.create(data);
}

const fetchRawinfo = async (connection: Connection, {selectedChannels, period}: IGuild) => {
    const model = connection.models.RawInfo;
    const channelList = selectedChannels?.map((item) => item.channelId);
    const today = moment().startOf('day');
    const data = await model.find({
        channelId: { 
            $in:channelList,
        },
        created_at: {
            $gte: moment(period).toDate(),
            $lte: moment(today).endOf('day').toDate()
        }
    });
    return data;
}

const checkExist = async (connection: Connection, time: Date) => {
    const model = connection.models.Rawinfo;
    const data = await model.find({
        created_at: time
    });
    return data.length > 0;
}

export default {
    createRawInfo,
    fetchRawinfo,
    checkExist
}