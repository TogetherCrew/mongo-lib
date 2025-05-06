import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { IRole } from '../interfaces';
import Role from '../models/Role.model';

export class RoleRepository extends BaseRepository<IRole> {
  constructor(model: Model<IRole> = Role) {
    super(model);
  }
}

export const roleRepository = new RoleRepository();
export default roleRepository;
