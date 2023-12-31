/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Key2Enum
 */
export enum Key2Enum {
  CreditTplusXDays = 'CreditTplusXDays',
}

/**
 * Schema for Key2Enum
 */
export const key2EnumSchema: Schema<Key2Enum> = stringEnum(Key2Enum);
