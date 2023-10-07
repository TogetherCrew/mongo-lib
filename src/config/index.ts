/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Joi from 'joi';

const envVarsSchema = Joi.object()
  .keys({
    DB_HOST: Joi.string().required().description('Mongo DB url'),
    DB_PORT: Joi.string().required().description('Mongo DB port'),
    DB_USER: Joi.string().required().description('Mongo DB username'),
    DB_PASSWORD: Joi.string().required().description('Mongo DB password'),
    DB_NAME: Joi.string().required().description('Mongo DB name'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error != null) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default {
  mongoose: {
    serverURL: `mongodb://${envVars.DB_USER}:${envVars.DB_PASSWORD}@${envVars.DB_HOST}:${envVars.DB_PORT}/${envVars.DB_NAME}`,
    botURL: `mongodb://${envVars.DB_USER}:${envVars.DB_PASSWORD}@${envVars.DB_HOST}:${envVars.DB_PORT}`,
    dbURL: `mongodb://${envVars.DB_USER}:${envVars.DB_PASSWORD}@${envVars.DB_HOST}:${envVars.DB_PORT}`,
  },
};
