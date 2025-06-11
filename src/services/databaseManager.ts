/* eslint-disable no-console */
import { Snowflake } from 'discord.js';
import mongoose, { Connection } from 'mongoose';

import { IChannel, IGuildMember, IHeatMap, IMemberActivity, IRawInfo, IRole, IThread } from '../interfaces';
import {
  channelSchema,
  guildMemberSchema,
  heatMapSchema,
  MemberActivitySchema,
  rawInfoSchema,
  roleSchema,
  threadSchema,
} from '../models/schemas';

export default class DatabaseManager {
  private static instance: DatabaseManager | undefined;

  private readonly modelCache = new Map<string, Promise<void>>();

  public static getInstance(): DatabaseManager {
    if (DatabaseManager.instance === undefined) {
      DatabaseManager.instance = new DatabaseManager();
    }
    return DatabaseManager.instance;
  }

  public async getGuildDb(guildId: Snowflake): Promise<Connection> {
    const db = mongoose.connection.useDb(guildId, { useCache: true });
    await this.setupModels(db, 'guild');
    return db;
  }

  public async getPlatformDb(platformId: string): Promise<Connection> {
    const db = mongoose.connection.useDb(platformId, { useCache: true });
    await this.setupModels(db, 'platform');
    return db;
  }

  private async setupModels(db: Connection, dbType: 'guild' | 'platform'): Promise<void> {
    let compilePromise: Promise<void> | undefined = this.modelCache.get(db.name);

    if (compilePromise === undefined) {
      compilePromise = (async (): Promise<void> => {
        try {
          if (dbType === 'platform') {
            db.model<IHeatMap>('HeatMap', heatMapSchema);
            db.model<IMemberActivity>('MemberActivity', MemberActivitySchema);
          } else {
            db.model<IRawInfo>('RawInfo', rawInfoSchema);
            db.model<IGuildMember>('GuildMember', guildMemberSchema);
            db.model<IChannel>('Channel', channelSchema);
            db.model<IRole>('Role', roleSchema);
            db.model<IThread>('Thread', threadSchema);
          }
        } catch (err) {
          console.error(`Error setting up models for ${db.name}:`, err);
        }
      })();

      this.modelCache.set(db.name, compilePromise);
    }

    await compilePromise;
  }

  public async deleteDatabase(db: Connection): Promise<void> {
    try {
      await db.dropDatabase();
      await db.close();
      this.modelCache.delete(db.name);
    } catch (err) {
      console.error(`Error deleting database ${db.name}:`, err);
    }
  }
}
