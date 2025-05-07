import { type Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { type IModule } from '../interfaces';
import Module from '../models/Module.model';

export class ModuleRepository extends BaseRepository<IModule> {
  constructor(model: Model<IModule> = Module) {
    super(model);
  }
}

export const moduleRepository = new ModuleRepository();
