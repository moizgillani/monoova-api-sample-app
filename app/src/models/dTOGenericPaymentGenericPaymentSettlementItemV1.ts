/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface DTOGenericPaymentGenericPaymentSettlementItemV1 {
  /** This is your uniqueReference that was passed in when the transaction was executed */
  uniqueReferenced?: string;
  /** This is the transactionId that was returned when the transaction was executed */
  transactionId?: number;
  /** This is the settlement or the requested disbursement amount */
  disbursementAmount?: number;
  /** This is the disbursementMethod that was used to make the settlement payment */
  disbursementMethod?: string;
  /** This is the fee amount Excluding GST that has been debited from your mAccount */
  feeAmountExclGst?: number;
  /** This is the GST Component of the fee amount that has been debited from your mAccount */
  feeAmountGstComponent?: number;
  /** This is the total fee amount Including GST that has been debited from your mAccount */
  feeAmountInclGst?: number;
}

export const dTOGenericPaymentGenericPaymentSettlementItemV1Schema: Schema<DTOGenericPaymentGenericPaymentSettlementItemV1> = object(
  {
    uniqueReferenced: ['uniqueReferenced', optional(string())],
    transactionId: ['transactionId', optional(number())],
    disbursementAmount: ['disbursementAmount', optional(number())],
    disbursementMethod: ['disbursementMethod', optional(string())],
    feeAmountExclGst: ['feeAmountExclGst', optional(number())],
    feeAmountGstComponent: ['feeAmountGstComponent', optional(number())],
    feeAmountInclGst: ['feeAmountInclGst', optional(number())],
  }
);
