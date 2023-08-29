/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';
import { Key4Enum, key4EnumSchema } from './key4Enum';

export interface SendSettlementStatement {
  key?: Key4Enum;
  value?: boolean;
}

export const sendSettlementStatementSchema: Schema<SendSettlementStatement> = object(
  {
    key: ['key', optional(key4EnumSchema)],
    value: ['value', optional(boolean())],
  }
);