import {
  FilterQuery,
  HydratedDocument,
  LeanDocument,
  Model,
  PopulateOptions,
  ProjectionType,
  QueryOptions,
  UpdateQuery,
} from 'mongoose';

export interface PaginateOptions {
  page?: number;
  limit?: number;
  sortBy?: string;
  populate?: string | PopulateOptions | Array<string | PopulateOptions>;
}

interface PaginateResult<T> {
  results: Array<LeanDocument<T>>;
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}

interface PaginateModel<T> extends Model<T> {
  paginate: (filter: FilterQuery<T>, options: PaginateOptions) => Promise<PaginateResult<T>>;
}

export class BaseRepository<T> {
  constructor(private readonly model: Model<T>) {}

  async create(doc: Partial<T>): Promise<HydratedDocument<T>> {
    return await this.model.create(doc);
  }

  async createMany(docs: Array<Partial<T>>): Promise<Array<HydratedDocument<T>>> {
    return await this.model.insertMany(docs);
  }

  async findById(id: string, projection?: ProjectionType<T>, options?: QueryOptions): Promise<LeanDocument<T> | null> {
    return await this.model.findById(id, projection, options).lean();
  }

  async find(
    filter: FilterQuery<T>,
    projection?: ProjectionType<T>,
    options?: QueryOptions,
  ): Promise<Array<LeanDocument<T>>> {
    return await this.model.find(filter, projection, options).lean();
  }

  async findOne(
    filter: FilterQuery<T>,
    projection?: ProjectionType<T>,
    options?: QueryOptions,
  ): Promise<LeanDocument<T> | null> {
    return await this.model.findOne(filter, projection, options).lean();
  }

  async updateOne(filter: FilterQuery<T>, update: UpdateQuery<T>, options?: QueryOptions): Promise<any> {
    return await this.model.updateOne(filter, update, options);
  }

  async upsert(filter: FilterQuery<T>, update: UpdateQuery<T>, options?: QueryOptions): Promise<any> {
    return await this.model.updateOne(filter, update, {
      ...options,
      upsert: true,
    });
  }

  async deleteOne(filter: FilterQuery<T>): Promise<any> {
    return await this.model.deleteOne(filter);
  }

  async deleteMany(filter: FilterQuery<T>): Promise<any> {
    return await this.model.deleteMany(filter);
  }

  async paginate(filter: FilterQuery<T>, options: PaginateOptions): Promise<PaginateResult<T>> {
    const modelWithPaginate = this.model as unknown as PaginateModel<T>;
    return await modelWithPaginate.paginate(filter, options);
  }
}
