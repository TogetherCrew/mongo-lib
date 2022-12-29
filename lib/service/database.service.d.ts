import { Connection } from 'mongoose';
import { Snowflake } from 'discord.js';
declare function connectionFactory(guildId: Snowflake): Connection;
declare const _default: {
    connectionFactory: typeof connectionFactory;
};
export default _default;
