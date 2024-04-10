import { Schema, type Document, Types } from 'mongoose';
import { toJSON, paginate } from './plugins';
import { type IPlatform, type PlatformModel } from '../../interfaces';
import { Announcement, Community, Platform, User, Module } from '../index';

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
  await Community.updateMany({}, { $pull: { roles: { 'source.platformId': platformId } } }, { multi: true });
  await Module.updateMany(
    { 'options.platforms.platform': platformId },
    { $pull: { 'options.platforms': { platform: platformId } } },
  );
});

platformSchema.pre('save', function () {
  this.$locals.wasNew = this.isNew;
});

platformSchema.post('save', async function () {
  if (this.$locals.wasNew === false) return;
  const platformId = this._id;
  const platform = await Platform.findById(platformId);
  if (platform !== null) {
    const community = await Community.findById(platform.community);
    if (community !== null) {
      const user = await User.findById(community?.users[0]);
      if (user !== null) {
        await Community.updateOne(
          { _id: community._id },
          {
            $addToSet: {
              platforms: platform._id,
              roles: {
                $each: [
                  {
                    roleType: 'admin',
                    source: {
                      platform: 'discord',
                      identifierType: 'member',
                      identifierValues: [user.discordId],
                      platformId: platform._id,
                    },
                  },
                ],
              },
            },
          },
        );
      }
    }
  }
});

export default platformSchema;
