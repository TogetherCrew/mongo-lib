import { Snowflake } from 'discord.js';
import mongoose, { Connection } from 'mongoose';

import { IChannel, IGuildMember, IHeatMap, IMemberActivity, IRawInfo, IRole } from './interfaces';
import {
  channelSchema,
  guildMemberSchema,
  heatMapSchema,
  MemberActivitySchema,
  rawInfoSchema,
  roleSchema,
} from './models/schemas';

export default class DatabaseManager {
  private static instance: DatabaseManager;
  private modelCache: Record<string, boolean> = {};

  public static getInstance(): DatabaseManager {
    if (typeof DatabaseManager.instance === 'undefined') {
      DatabaseManager.instance = new DatabaseManager();
    }
    return DatabaseManager.instance;
  }

  public async getGuildDb(guildId: Snowflake): Promise<Connection> {
    const dbName = guildId;
    const db = mongoose.connection.useDb(dbName, { useCache: true });
    await this.setupModels(db, 'guild');
    return db;
  }

  public async getPlatformDb(platformId: string): Promise<Connection> {
    const dbName = platformId;
    const db = mongoose.connection.useDb(dbName, { useCache: true });
    await this.setupModels(db, 'platform');
    return db;
  }

  private async setupModels(db: Connection, dbType: 'guild' | 'platform'): Promise<void> {
    if (!this.modelCache[db.name]) {
      try {
        if (dbType === 'platform') {
          db.model<IHeatMap>('HeatMap', heatMapSchema);
          db.model<IMemberActivity>('MemberActivity', MemberActivitySchema);
        } else if (dbType === 'guild') {
          db.model<IRawInfo>('RawInfo', rawInfoSchema);
          db.model<IGuildMember>('GuildMember', guildMemberSchema);
          db.model<IChannel>('Channel', channelSchema);
          db.model<IRole>('Role', roleSchema);
        }
        this.modelCache[db.name] = true;
      } catch (error) {
        console.error(`Error setting up models for ${db.name}:`, error);
      }
    }
  }

  public async deleteDatabase(db: Connection): Promise<void> {
    const dbName = db.name;
    try {
      await db.dropDatabase();
    } catch (error) {
      console.error(`Error deleting database ${dbName}:`, error);
    }
  }
}
