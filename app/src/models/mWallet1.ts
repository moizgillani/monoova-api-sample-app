/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface MWallet1 {
  /** 16-Digit account number that uniquely identifies the mWallet. */
  token?: string;
  /** 4 digit numerical pin. */
  pin?: string;
}

export const mWallet1Schema: Schema<MWallet1> = object({
  token: ['token', optional(string())],
  pin: ['pin', optional(string())],
});