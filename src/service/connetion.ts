import mongoose, { type Connection } from 'mongoose';

export default class MongoConnectionManager {
  private mongoConnection: Connection | null = null;

  public async connect(url: string): Promise<void> {
    try {
      if (this.mongoConnection !== null) {
        throw new Error('MongoDB connection already exists');
      }
      await mongoose.connect(url);
      this.mongoConnection = mongoose.connection;
      console.log('Connected to MongoDB!');
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Failed to connect to MongoDB: ${errorMessage}`);
      throw new Error(`Failed to connect to MongoDB: ${errorMessage}`);
    }
  }

  public async disconnect(): Promise<void> {
    try {
      if (this.mongoConnection !== null) {
        await mongoose.disconnect();
        this.mongoConnection = null;
        console.log('Disconnected from MongoDB');
      } else {
        console.warn('No active MongoDB connection to disconnect.');
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Failed to disconnect from MongoDB: ${errorMessage}`);
      throw new Error(`Failed to disconnect from MongoDB: ${errorMessage}`);
    }
  }

  /**
   * Ensures that there is an active MongoDB connection.
   * Throws an error if no connection is active.
   */
  public ensureConnected(): void {
    if (this.mongoConnection !== null) {
      throw new Error('No active MongoDB connection. Please connect before performing database operations.');
    }
  }

  /**
   * Gets the current MongoDB connection.
   * @returns The Mongoose Connection object.
   */
  public getConnection(): Connection | null {
    this.ensureConnected();
    return this.mongoConnection;
  }
}
