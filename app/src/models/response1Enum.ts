/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Response1Enum
 */
export enum Response1Enum {
  Confirm = 'Confirm',
  Reject = 'Reject',
}

/**
 * Schema for Response1Enum
 */
export const response1EnumSchema: Schema<Response1Enum> = stringEnum(Response1Enum);
