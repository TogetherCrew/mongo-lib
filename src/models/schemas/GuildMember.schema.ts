import { Schema } from 'mongoose';
import { toJSON } from './plugins';
import { IGuildMember, GuildMemberModel } from '../../interfaces/GuildMember.interface';

const guildMemberSchema = new Schema<IGuildMember, GuildMemberModel>({
  discordId: {
    type: String,
    unique: true,
  },
  nick: {
    type: String,
  },
  roles: [
    {
      type: String,
    },
  ],
  joined_at: {
    type: String,
  },
  avatar: {
    type: String,
  },
});

// Plugins
guildMemberSchema.plugin(toJSON);

export default guildMemberSchema;
