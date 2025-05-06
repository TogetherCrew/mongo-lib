// src/db/repositories/base.repository.ts
import { FilterQuery, LeanDocument, Model, PopulateOptions, ProjectionType, QueryOptions, UpdateQuery } from 'mongoose';

export interface PaginateOptions {
  page?: number;
  limit?: number;
  sortBy?: string;
  populate?: string | PopulateOptions | Array<string | PopulateOptions>;
}

export class BaseRepository<T> {
  constructor(private readonly model: Model<T>) {}

  async create(doc: Partial<T>): Promise<T> {
    return await this.model.create(doc);
  }

  async createMany(docs: Array<Partial<T>>): Promise<T[]> {
    return await this.model.insertMany(docs);
  }

  async findById(id: string, projection?: ProjectionType<T>, options?: QueryOptions): Promise<T | null> {
    return await this.model.findById(id, projection, options);
  }

  async find(filter: FilterQuery<T>, projection?: ProjectionType<T>, options?: QueryOptions): Promise<T[]> {
    return await this.model.find(filter, projection, options);
  }

  async updateOne(
    filter: FilterQuery<T>,
    update: UpdateQuery<T>,
    options?: QueryOptions,
  ): Promise<{ acknowledged: boolean; modifiedCount: number; upsertedId: unknown }> {
    return await this.model.updateOne(filter, update, options);
  }

  async deleteOne(filter: FilterQuery<T>): Promise<{ deletedCount?: number }> {
    return await this.model.deleteOne(filter);
  }

  async deleteMany(filter: FilterQuery<T>): Promise<{ deletedCount?: number }> {
    return await this.model.deleteMany(filter);
  }

  async paginate(
    filter: FilterQuery<T>,
    options: PaginateOptions,
  ): Promise<{
    results: Array<LeanDocument<T>>;
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
  }> {
    return (this.model as any).paginate(filter, options);
  }
}
