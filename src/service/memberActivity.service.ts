import { Connection } from 'mongoose';
import { IMemberActivity } from '../interfaces/MemberActivity.interface';

/**
 * Create memberActivity
 * @param {IMemberActivity} data
 * @returns {Promise<IMemberActivity>}
 */
async function createMemberActivity(connection: Connection, data: IMemberActivity) {
    return connection.models.MemberActivity.create(data);
}

/**
 * Create memberActivities
 * @param {IMemberActivity} memberActivities
 * @returns {Promise<IMemberActivity>}
 */
async function createMemberActivities(connection: Connection, memberActivities: IMemberActivity[]) {
    return connection.models.MemberActivity.insertMany(memberActivities.map((memberActivity) => memberActivity));
}

export default {
    createMemberActivity,
    createMemberActivities,
};
