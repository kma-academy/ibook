import Joi from 'joi';
import { DatabaseSQLValidateSchema } from './database-sql.schema';

export const FeatureGenreValidateSchema = DatabaseSQLValidateSchema.append({
  TRANSPORT_URL: Joi.string().required(),
});
