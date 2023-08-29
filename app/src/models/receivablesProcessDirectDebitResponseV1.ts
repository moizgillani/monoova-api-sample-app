/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, number, object, optional, Schema, string } from '../schema';

export interface ReceivablesProcessDirectDebitResponseV1 {
  /** This value represents the total time in milliseconds that the Platform took to process the request. */
  durationMs?: bigint;
  /** This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors */
  status?: string;
  /** This is a plain English description of the status. */
  statusDescription?: string;
  /** This is your uniqueReference that was passed in when the transaction was executed */
  uniqueReferenced?: string;
  /** This is the transactionId that was returned when the transaction was executed */
  transactionId?: number;
  /** This is the fee amount Excluding GST that has been debited from your mAccount */
  feeAmountExcludingGst?: number;
  /** This is the GST Component of the fee amount that has been debited from your mAccount */
  feeAmountGstComponent?: number;
  /** This is the total fee amount Including GST that has been debited from your mAccount */
  feeAmountIncludingGst?: number;
}

export const receivablesProcessDirectDebitResponseV1Schema: Schema<ReceivablesProcessDirectDebitResponseV1> = object(
  {
    durationMs: ['durationMs', optional(bigint())],
    status: ['status', optional(string())],
    statusDescription: ['statusDescription', optional(string())],
    uniqueReferenced: ['uniqueReferenced', optional(string())],
    transactionId: ['transactionId', optional(number())],
    feeAmountExcludingGst: ['feeAmountExcludingGst', optional(number())],
    feeAmountGstComponent: ['feeAmountGstComponent', optional(number())],
    feeAmountIncludingGst: ['feeAmountIncludingGst', optional(number())],
  }
);
