/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema } from 'mongoose';

/**
 * remove fileds that are private
 * @param {Object} obj
 * @param {string} path
 * @param {numer} index
 */
const deleteAtPath = (obj: any, path: any, index: any) => {
  if (index === path.length - 1) {
    delete obj[path[index]];
    return;
  }
  deleteAtPath(obj[path[index]], path, index + 1);
};

/**
 * remove fileds that are private
 * removes __v, createdAt, updatedAt, and any schema path that has private: true
 * @param {Schema} schema
 */
const toJSON = (schema: any) => {
  let transform: any;
  if (schema.options.toJSON && schema.options.toJSON.transform) {
    transform = schema.options.toJSON.transform;
  }

  // Assign toJson for schema
  schema.options.toJSON = Object.assign(schema.options.toJSON || {}, {
    transform(doc: any, ret: any, options: any) {
      // Loop through fileds and find fileds with private option
      Object.keys(schema.paths).forEach((path) => {
        if (schema.paths[path].options && schema.paths[path].options.private) {
          deleteAtPath(ret, path.split('.'), 0);
        }
      });

      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      delete ret.createdAt;
      delete ret.updatedAt;
      if (transform) {
        return transform(doc, ret, options);
      }
    },
  });
};

export default toJSON;
