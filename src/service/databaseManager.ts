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
  public static getInstance(): DatabaseManager {
    if (typeof DatabaseManager.instance === 'undefined') {
      DatabaseManager.instance = new DatabaseManager();
    }
    return DatabaseManager.instance;
  }

  public getTenantDb(tenantId: Snowflake): Connection {
    const dbName = tenantId;
    const db = mongoose.connection.useDb(dbName, { useCache: true });
    this.setupModels(db);
    return db;
  }

  private setupModels(db: Connection): void {
    if (!this.modelCache[db.name]) {
      db.model<IHeatMap>('HeatMap', heatMapSchema);
      db.model<IRawInfo>('RawInfo', rawInfoSchema);
      db.model<IMemberActivity>('MemberActivity', MemberActivitySchema);
      db.model<IGuildMember>('GuildMember', guildMemberSchema);
      db.model<IChannel>('Channel', channelSchema);
      db.model<IRole>('Role', roleSchema);
      this.modelCache[db.name] = true;
    }
  }
}
