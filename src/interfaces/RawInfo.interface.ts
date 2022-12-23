import { Document } from 'mongodb';

export interface IRawInfo {
    type?: string,
    author?: string,
    content?: string,
    user_Mentions?: Array<string>,
    roles_Mentions?: Array<string>,
    reactions?: Array<string>,
    replied_User?: string,
    reference_Message?: number
}

export interface IRawInfoModel extends IRawInfo, Document { }
