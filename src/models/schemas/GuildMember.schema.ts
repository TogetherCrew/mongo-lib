import { Schema } from 'mongoose';
import { toJSON } from './plugins';
import { IGuildMember, GuildMemberModel } from '../../interfaces/GuildMember.interface';

const guildMemberSchema = new Schema<IGuildMember, GuildMemberModel>({
  accountId: {
    type: String,
    unique: true,
  },
  account: {
    type: String,
  },
  roles: [
    {
      type: String,
    },
  ],
  joinDate: {
    type: Date,
  },
});

// Plugins
guildMemberSchema.plugin(toJSON);

export default guildMemberSchema;
