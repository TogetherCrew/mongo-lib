import { model } from 'mongoose';
import { announcementSchema } from './schemas';
import { type IAnnouncement, type AnnouncementModel } from '../interfaces';

export default model<IAnnouncement, AnnouncementModel>('Announcement', announcementSchema);
