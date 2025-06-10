import { Model, ObjectId, Types } from 'mongoose';

interface IDiscordOptions {
  channelIds?: string[];
  roleIds?: string[];
  userIds?: string[];
  engagementCategories?: string[];
  safetyMessageChannelId?: string;
}

interface IAnnouncementData<T> {
  platform: Types.ObjectId;
  template: string;
  options: T;
  deletedAt?: Date;
}

export interface IAnnouncement {
  community: Types.ObjectId;
  title?: string;
  scheduledAt: Date;
  draft: boolean;
  jobId?: number;
  // !createdAt: Date; this is automatically added by mongoose
  // !updatedAt: Date; this is automatically added by mongoose
  createdBy: Types.ObjectId;
  updatedBy: Types.ObjectId;
  deletedAt?: Date;
  deletedBy?: Types.ObjectId;
  data: Array<IAnnouncementData<IDiscordOptions>>;
}

export interface AnnouncementModel extends Model<IAnnouncement> {
  paginate: (filter: object, options: object) => any;
}
