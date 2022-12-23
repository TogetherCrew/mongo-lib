import { Document } from 'mongodb';

export interface IRawInfo {
    type?: string,
    author?: string,
    content?: string,
    user_Mentions?: Array<string>,
    roles_Mentions?: Array<string>,
    reactions?: Array<string>,
    Replied_User?: string,
    Reference_Message?: number
}

export interface IUserModel extends IRawInfo, Document { }
