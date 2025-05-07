import { type Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { type IAnnouncement } from '../interfaces';
import Announcement from '../models/Announcement.model';

export class AnnouncementRepository extends BaseRepository<IAnnouncement> {
  constructor(model: Model<IAnnouncement> = Announcement) {
    super(model);
  }
}

export const announcementRepository = new AnnouncementRepository();
