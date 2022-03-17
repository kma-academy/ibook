import Joi from 'joi';

export const DatabaseSQLValidateSchema = Joi.object({
  DATABASE_NAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_TYPE: Joi.string()
    .allow(
      'mysql',
      'mariadb',
      'postgres',
      'cockroachdb',
      'sqlite',
      'mssql',
      'sap',
      'oracle',
      'cordova',
      'nativescript',
      'react-native',
      'sqljs',
      'mongodb',
      'expo',
      'better-sqlite3',
      'capacitor'
    )
    .required(),
});
