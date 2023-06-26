import { Connection } from 'mongoose';
import { IGuildMember, IGuildMemberUpdateBody } from '../interfaces/GuildMember.interface';
declare function createGuildMembers(connection: Connection, guildMembers: IGuildMember[]): Promise<any[]>;
declare function updateGuildMember(connection: Connection, filter: object, updateBody: IGuildMemberUpdateBody): Promise<any>;
declare const _default: {
    createGuildMember: (connection: Connection, guildMember: IGuildMember) => Promise<any>;
    createGuildMembers: typeof createGuildMembers;
    updateGuildMember: typeof updateGuildMember;
};
export default _default;
