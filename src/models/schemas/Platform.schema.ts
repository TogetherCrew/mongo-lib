import { Schema, type Document, Types } from 'mongoose';
import { toJSON, paginate } from './plugins';
import { type IPlatform, type PlatformModel } from '../../interfaces';
import { Announcement, Community } from '../index';

const platformSchema = new Schema<IPlatform, PlatformModel>(
  {
    name: {
      type: String,
      required: true,
    },
    metadata: {
      type: Schema.Types.Mixed,
    },
    community: {
      type: Schema.Types.ObjectId,
      ref: 'Community',
      required: true,
    },
    disconnectedAt: {
      type: Date,
      default: null,
    },
    connectedAt: {
      type: Date,
      default: new Date(),
    },
  },

  { timestamps: true },
);

// Plugins
platformSchema.plugin(toJSON);
platformSchema.plugin(paginate);

const announcementDeletion = async (platformId: any): Promise<void> => {
  // ?in case the platformID (inputted platformID) of each item in the data array field matches, delete that announcement.
  const announcementsWithAllDataOnSamePlatformIds = await Announcement.aggregate([
    {
      $project: {
        matchNumber: {
          $size: {
            $filter: {
              input: '$data',
              as: 'item',
              cond: {
                $eq: ['$$item.platform', new Types.ObjectId(platformId)],
              },
            },
          },
        },
        allNumber: {
          $size: '$data',
        },
      },
    },
    {
      $match: {
        $expr: {
          $eq: ['$allNumber', '$matchNumber'],
        },
      },
    },
  ]);
  const idsToDelete = announcementsWithAllDataOnSamePlatformIds.map((announcement) => announcement._id);
  await Announcement.deleteMany({ _id: { $in: idsToDelete } });

  await Announcement.updateMany({ 'data.platform': platformId }, { $pull: { data: { platform: platformId } } });
};

platformSchema.pre('remove', async function (this: Document) {
  const platformId = this._id;
  await Community.updateOne({ platforms: platformId }, { $pull: { platforms: platformId } });
  await announcementDeletion(platformId);
});

export default platformSchema;
