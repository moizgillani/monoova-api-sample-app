/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface DTOMAccountTransactionLineItem {
  /** The amount of funds credited from the mAccount */
  credit?: number;
  /** The time the transaction occurred in ISO 8601 date-time format. Note that Timezone is suppressed. The example Timezone is Sydney local time */
  dateTime?: string;
  /** The amount of funds debited from the mAccount */
  debit?: number;
  /** This is the description that was provided by the caller to the financial API with your unique reference prepended */
  description?: string;
  /** If funds were being moved to an mAccount, then this is the mAccount 16-Digit card number */
  destinationMAccountCardNumber?: string;
  isWaitingForFundsToClear?: boolean;
  /** This is the Platform internal Id for the row returned */
  mPaymentsId?: number;
  /** If funds were being moved to/from an mWallet, then this is the mWallets 16-Digit account number */
  mWalletAccountNumber?: string;
  /** If you need to sort the results, only use this field. If you sort the results on any other field, the runningBalance won’t make sense.rowOrder start at 0. */
  rowOrder?: number;
  /** The current balance of the mAccount at the end of this single row transaction */
  runningBalance?: number;
  /** If funds were being moved from an mAccount, then this is the source mAccount 16-Digit Card number */
  sourceMAccountCardNumber?: string;
  /** Minor keyword describing thetransaction. E.g. GatewayMWalletCredit */
  subTransactionType?: string;
  /** A small description describing the financial action */
  transactionDescription?: string;
  /** This is the transactionId that was returned from a financial transaction */
  transactionId?: number;
  /** Major keyword describing the transaction. E.g. include Payment, LoadFunds, DailySettlement */
  transactionType?: string;
  /** This is the unique reference that was passed in by the calling service */
  uniqueReference?: string;
}

export const dTOMAccountTransactionLineItemSchema: Schema<DTOMAccountTransactionLineItem> = object(
  {
    credit: ['credit', optional(number())],
    dateTime: ['dateTime', optional(string())],
    debit: ['debit', optional(number())],
    description: ['description', optional(string())],
    destinationMAccountCardNumber: [
      'destinationMAccountCardNumber',
      optional(string()),
    ],
    isWaitingForFundsToClear: ['isWaitingForFundsToClear', optional(boolean())],
    mPaymentsId: ['mPaymentsId', optional(number())],
    mWalletAccountNumber: ['mWalletAccountNumber', optional(string())],
    rowOrder: ['rowOrder', optional(number())],
    runningBalance: ['runningBalance', optional(number())],
    sourceMAccountCardNumber: ['sourceMAccountCardNumber', optional(string())],
    subTransactionType: ['subTransactionType', optional(string())],
    transactionDescription: ['transactionDescription', optional(string())],
    transactionId: ['transactionId', optional(number())],
    transactionType: ['transactionType', optional(string())],
    uniqueReference: ['uniqueReference', optional(string())],
  }
);
