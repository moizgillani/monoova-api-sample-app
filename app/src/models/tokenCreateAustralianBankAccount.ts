/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, number, object, optional, Schema, string } from '../schema';

export interface TokenCreateAustralianBankAccount {
  /** The mWallet or mAccount 16-Digit number that owns the payload. */
  accountNumber: bigint;
  /** A simple text description that is associated with the token. For example “Savings Account”. */
  description?: string;
  /** Name associated with the bank account. Minimum length is 2. */
  bankAccountName: string;
  /** This is the bank account number. Range of '1' to '999999999'. */
  bankAccountNumber: number;
  /** Bank-State-Branch number. Format is 3-3 digits. (Eg. '000-000') */
  bsb: string;
}

export const tokenCreateAustralianBankAccountSchema: Schema<TokenCreateAustralianBankAccount> = object(
  {
    accountNumber: ['accountNumber', bigint()],
    description: ['description', optional(string())],
    bankAccountName: ['bankAccountName', string()],
    bankAccountNumber: ['bankAccountNumber', number()],
    bsb: ['bsb', string()],
  }
);