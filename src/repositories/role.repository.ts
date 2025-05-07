import { type Connection } from 'mongoose';

import { type IRole } from '../interfaces';
import { BaseRepository } from './base.repository';

export class RoleRepository extends BaseRepository<IRole> {
  constructor(connection: Connection) {
    super(connection.model<IRole>('Role'));
  }
}

export const makeRoleRepository = (connection: Connection) => new RoleRepository(connection);
