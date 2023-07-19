import { Schema } from 'mongoose';
import { toJSON } from './plugins';
import { IGuildMember, GuildMemberModel } from '../../interfaces';

const guildMemberSchema = new Schema<IGuildMember, GuildMemberModel>({
  discordId: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
  },
  roles: [
    {
      type: String,
    },
  ],
  joinedAt: {
    type: Date,
  },
  avatar: {
    type: String,
  },
  isBot: {
    type: Boolean,
  },
  discriminator: {
    type: String,
  },
  permissions: {
    type: String,
  },
});

// Plugins
guildMemberSchema.plugin(toJSON);

export default guildMemberSchema;
