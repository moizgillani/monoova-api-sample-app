/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface VerifyValidate {
  /** token from verify/v1/aba/initiate.(Inititiates a verification transaction) */
  token: string;
  /** amount for the verification. */
  amount: number;
  /** Once you receive the verification code, enter it here to confirm your identity. */
  code: string;
}

export const verifyValidateSchema: Schema<VerifyValidate> = object({
  token: ['token', string()],
  amount: ['amount', number()],
  code: ['code', string()],
});
