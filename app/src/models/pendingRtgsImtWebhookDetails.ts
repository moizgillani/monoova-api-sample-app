/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface PendingRtgsImtWebhookDetails {
  /** Monoova generated Unique ID. */
  transactionId?: string;
  /** Payee Bank Account Number. */
  accountNumber?: string;
  /** Payee BSB. */
  bSB?: string;
  /** Payer submitted Account Name. */
  accountName?: string;
  /** Transaction Reference Number. */
  transactionReferenceNumber?: string;
  /** Payment amount,2 decimal places for cents. */
  amount?: number;
  /** Transaction Status. Possible value Pending. */
  status?: string;
  /** Payer submitted reference */
  lodgementRef?: string;
  /** AEDT, Sydney. Transaction Received date. */
  date?: string;
  /** Source Account Name address and account number (This will be an optional field depending on merchant setting) */
  sourceDetails?: string;
  /** AEDT, Sydney. This will indicate the time user has to Confirm/Reject a transaction. */
  respondBeforeDateTime?: string;
  /** Sending Organisation */
  sendingOrganisation?: string;
  /** Receiving Organisation */
  receivingOrganisation?: string;
  /** Ordering Institution */
  orderingInstitution?: string;
  /** Originating Address */
  originatingAddress?: string;
}

export const pendingRtgsImtWebhookDetailsSchema: Schema<PendingRtgsImtWebhookDetails> = object(
  {
    transactionId: ['TransactionId', optional(string())],
    accountNumber: ['AccountNumber', optional(string())],
    bSB: ['BSB', optional(string())],
    accountName: ['AccountName', optional(string())],
    transactionReferenceNumber: [
      'TransactionReferenceNumber',
      optional(string()),
    ],
    amount: ['Amount', optional(number())],
    status: ['Status', optional(string())],
    lodgementRef: ['LodgementRef', optional(string())],
    date: ['Date', optional(string())],
    sourceDetails: ['SourceDetails', optional(string())],
    respondBeforeDateTime: ['RespondBeforeDateTime', optional(string())],
    sendingOrganisation: ['SendingOrganisation', optional(string())],
    receivingOrganisation: ['ReceivingOrganisation', optional(string())],
    orderingInstitution: ['OrderingInstitution', optional(string())],
    originatingAddress: ['OriginatingAddress', optional(string())],
  }
);