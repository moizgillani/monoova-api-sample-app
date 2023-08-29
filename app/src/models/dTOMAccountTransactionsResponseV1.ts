/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  DTOMAccountTransactionLineItem,
  dTOMAccountTransactionLineItemSchema,
} from './dTOMAccountTransactionLineItem';

export interface DTOMAccountTransactionsResponseV1 {
  /** This value represents the total time in milliseconds that the Platform took to process the request. */
  durationMs?: bigint;
  /** This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors */
  status?: string;
  /** This is a plain English description of the status. */
  statusDescription?: string;
  /** Opening balance of the mAccountfor the returned items */
  openingBalance?: number;
  /** Closing balance of the mAccountfor the returned items */
  closingBalance?: number;
  /** Total debits for the returned items */
  totalDebits?: number;
  /** Total credits for the returned items */
  totalCredits?: number;
  /** an Array of mAccountTransactionLineItem */
  items?: DTOMAccountTransactionLineItem[];
}

export const dTOMAccountTransactionsResponseV1Schema: Schema<DTOMAccountTransactionsResponseV1> = object(
  {
    durationMs: ['durationMs', optional(bigint())],
    status: ['status', optional(string())],
    statusDescription: ['statusDescription', optional(string())],
    openingBalance: ['openingBalance', optional(number())],
    closingBalance: ['closingBalance', optional(number())],
    totalDebits: ['totalDebits', optional(number())],
    totalCredits: ['totalCredits', optional(number())],
    items: [
      'items',
      optional(array(lazy(() => dTOMAccountTransactionLineItemSchema))),
    ],
  }
);