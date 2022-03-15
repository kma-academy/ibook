import { DatabaseSQLValidateSchema } from './database-sql.schema';
import Joi from 'joi';

export const GatewayValidateSchema = DatabaseSQLValidateSchema.append({
  GENRE_TRANSPORTER_URL: Joi.string().required(),
});
