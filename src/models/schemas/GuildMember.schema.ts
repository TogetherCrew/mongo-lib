import { Schema } from 'mongoose';
import { toJSON, paginate } from './plugins';
import { type IGuildMember, type GuildMemberModel } from '../../interfaces';

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
  deletedAt: {
    type: Date,
    default: null,
  },
  globalName: {
    type: String,
  },
  nickname: {
    type: String,
  },
});

guildMemberSchema.method('softDelete', async function softDelete() {
  this.deletedAt = Date.now();
  await this.save();
});

// Plugins
guildMemberSchema.plugin(toJSON);
guildMemberSchema.plugin(paginate);

export default guildMemberSchema;
