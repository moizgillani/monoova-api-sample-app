/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface MAccount2 {
  /** 16-Digit account number that uniquely identifies the mAccount. */
  token?: string;
}

export const mAccount2Schema: Schema<MAccount2> = object({
  token: ['token', optional(string())],
});