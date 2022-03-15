import Joi from 'joi';

export const DatabaseSQLValidateSchema = Joi.object({
  DATABASE_NAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_HOST: Joi.string().required(),
});
