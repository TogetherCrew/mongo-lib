import { Snowflake } from 'discord.js';
import { Model } from 'mongoose';
export interface IGuildMember {
    discordId?: Snowflake;
    nick?: string;
    avatar?: string;
    roles: Snowflake[];
    joined_at: string;
}
export interface IGuildMemberUpdateBody {
    nick?: string;
    avatar?: string;
    roles?: Snowflake[];
}
export interface GuildMemberModel extends Model<IGuildMember> {
    paginate(filter: object, options: object): any;
}
