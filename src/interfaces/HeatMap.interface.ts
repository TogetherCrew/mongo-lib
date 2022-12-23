import { Document } from 'mongodb';

export interface IRawInfo {
    data?: Date,
    channel?: string,
    messages?: Array<number>,
    interactions?: Array<number>,
    emojis?: Array<number>,
}

export interface IUserModel extends IRawInfo, Document { }
