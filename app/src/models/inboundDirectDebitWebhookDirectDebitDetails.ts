/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface InboundDirectDebitWebhookDirectDebitDetails {
  /** Monoova generated Unique ID. */
  transactionId?: string;
  /** Payment Batch ID. Payments come in batches throughout the day. */
  batchId?: string;
  /** Time Stamp. */
  dateTime?: string;
  /** The status of the transaction. Possible values are Pending, Reject, Accept. */
  status?: string;
  /** Time by when you have to respond to the Inbound Direct Debit request. */
  respondBeforeDateTime?: string;
  /** Payee BSB. */
  bsb?: string;
  /** Payee Bank Account Number. */
  accountNumber?: number;
  /** Payer submitted Account Name. */
  accountName?: string;
  /** Payment amount, 2 decimal places for cents. */
  amount?: number;
  /** Payer submitted reference. */
  lodgementRef?: string;
  /** Remitting Entity. */
  remitterName?: string;
  /** Preferred name of the User supplying the Direct Entry file. */
  nameOfUserSupplyingFile?: string;
  /** This is the User Identification Number which is assigned by APCA and User Financial Institutions. */
  numberOfUserSupplyingFile?: string;
  /** Direct Entry file description. */
  descriptionOfEntriesOnFile?: string;
  /** Blank; OR 'W' dividend paid to a resident of a country where a double tax agreement is in force. 'X' dividend paid to a resident of any other country. 'Y' interest paid to all non-resident. */
  indicator?: string;
  /** Blank OR Payment amount,2 decimal places for cents. */
  withholdingTaxAmount?: number;
  /** Payer BSB */
  sourceBsb?: string;
  /** Payer Bank Account Number. */
  sourceAccountNumber?: string;
}

export const inboundDirectDebitWebhookDirectDebitDetailsSchema: Schema<InboundDirectDebitWebhookDirectDebitDetails> = object(
  {
    transactionId: ['TransactionId', optional(string())],
    batchId: ['BatchId', optional(string())],
    dateTime: ['DateTime', optional(string())],
    status: ['Status', optional(string())],
    respondBeforeDateTime: ['RespondBeforeDateTime', optional(string())],
    bsb: ['Bsb', optional(string())],
    accountNumber: ['AccountNumber', optional(number())],
    accountName: ['AccountName', optional(string())],
    amount: ['Amount', optional(number())],
    lodgementRef: ['LodgementRef', optional(string())],
    remitterName: ['RemitterName', optional(string())],
    nameOfUserSupplyingFile: ['NameOfUserSupplyingFile', optional(string())],
    numberOfUserSupplyingFile: [
      'NumberOfUserSupplyingFile',
      optional(string()),
    ],
    descriptionOfEntriesOnFile: [
      'DescriptionOfEntriesOnFile',
      optional(string()),
    ],
    indicator: ['Indicator', optional(string())],
    withholdingTaxAmount: ['WithholdingTaxAmount', optional(number())],
    sourceBsb: ['SourceBsb', optional(string())],
    sourceAccountNumber: ['SourceAccountNumber', optional(string())],
  }
);
