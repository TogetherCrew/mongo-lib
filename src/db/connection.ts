import mongoose, { type Connection } from 'mongoose';

export default class MongoConnectionManager {
  private static instance: MongoConnectionManager | undefined;

  private mongoConnection: Connection | null = null;
  private currentUri = '';

  private constructor() {}

  public static getInstance(): MongoConnectionManager {
    if (MongoConnectionManager.instance === undefined) {
      MongoConnectionManager.instance = new MongoConnectionManager();
    }
    return MongoConnectionManager.instance;
  }

  public async connect(uri: string): Promise<void> {
    if (this.mongoConnection !== null && this.mongoConnection.readyState === 1) {
      if (uri === this.currentUri) return;
      throw new Error('MongoDB connection already exists with a different URI');
    }

    try {
      await mongoose.connect(uri);
      this.mongoConnection = mongoose.connection;
      this.currentUri = uri;

      console.log('Connected to MongoDB');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      console.error(`Failed to connect to MongoDB: ${msg}`);
      throw new Error(`Failed to connect to MongoDB: ${msg}`);
    }
  }

  public async disconnect(): Promise<void> {
    if (this.mongoConnection === null) {
      console.warn('No active MongoDB connection to disconnect.');
      return;
    }

    try {
      await mongoose.disconnect();
      this.mongoConnection = null;
      this.currentUri = '';
      console.log('Disconnected from MongoDB');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      console.error(`Failed to disconnect from MongoDB: ${msg}`);
      throw new Error(`Failed to disconnect from MongoDB: ${msg}`);
    }
  }

  public ensureConnected(): void {
    if (this.mongoConnection === null) {
      throw new Error('No active MongoDB connection. Please connect first.');
    }
  }

  public getConnection(): Connection {
    this.ensureConnected();
    // Non‑null assertion is safe after explicit check above.
    return this.mongoConnection as Connection;
  }
}
