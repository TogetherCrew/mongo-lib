import mongoose, { type Connection } from 'mongoose';
import {
  heatMapSchema,
  rawInfoSchema,
  MemberActivitySchema,
  guildMemberSchema,
  channelSchema,
  roleSchema,
} from '../models/schemas';
import {
  type IHeatMap,
  type IRawInfo,
  type IMemberActivity,
  type IGuildMember,
  type IChannel,
  type IRole,
} from '../interfaces';

import { type Snowflake } from 'discord.js';

export default class DatabaseManager {
  private static instance: DatabaseManager;
  private modelCache: Record<string, boolean> = {};

  // Singleton pattern to get the instance of DatabaseManager
  public static getInstance(): DatabaseManager {
    if (typeof DatabaseManager.instance === 'undefined') {
      DatabaseManager.instance = new DatabaseManager();
    }
    return DatabaseManager.instance;
  }

  // Method to get Guild Database connection
  public async getGuildDb(guildId: Snowflake): Promise<Connection> {
    const dbName = guildId;
    const db = mongoose.connection.useDb(dbName, { useCache: true });
    await this.setupModels(db, 'guild');
    return db;
  }

  // Method to get Platform Database connection
  public async getPlatformDb(platformId: string): Promise<Connection> {
    const dbName = platformId;
    const db = mongoose.connection.useDb(dbName, { useCache: true });
    await this.setupModels(db, 'platform');
    return db;
  }

  // Method to setup models based on database type
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
}
