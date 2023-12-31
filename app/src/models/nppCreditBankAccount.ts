/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, optional, Schema, string } from '../schema';
import {
  ToNppCreditBankAccountDetails,
  toNppCreditBankAccountDetailsSchema,
} from './toNppCreditBankAccountDetails';

/** disbursement to NppCreditBankAccount */
export interface NppCreditBankAccount {
  disbursementMethod: string;
  /** description for the transaction */
  description?: string;
  toNppCreditBankAccountDetails: ToNppCreditBankAccountDetails;
  /** This is the amount of funds to be paid */
  amount: number;
  /** Reference will appear on payees statement. Refer to the disbursement object, May be overwritten for some account configurations, contact us for more details. */
  lodgementReference?: string;
}

export const nppCreditBankAccountSchema: Schema<NppCreditBankAccount> = object({
  disbursementMethod: ['disbursementMethod', string()],
  description: ['description', optional(string())],
  toNppCreditBankAccountDetails: [
    'toNppCreditBankAccountDetails',
    lazy(() => toNppCreditBankAccountDetailsSchema),
  ],
  amount: ['amount', number()],
  lodgementReference: ['lodgementReference', optional(string())],
});
