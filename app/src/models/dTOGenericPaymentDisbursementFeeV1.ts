/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface DTOGenericPaymentDisbursementFeeV1 {
  /** The type of Disbursement: mAccount, mWallet, DirectCredit, BPAY, Charity, Sign-In mAccount */
  method?: string;
  /** The percentage of the amountto be taken as a fee Excluding GST */
  feePercentageExGst?: number;
  /** The fixed amount to be taken as a fee Excluding GST */
  feeFixedExGst?: number;
}

export const dTOGenericPaymentDisbursementFeeV1Schema: Schema<DTOGenericPaymentDisbursementFeeV1> = object(
  {
    method: ['method', optional(string())],
    feePercentageExGst: ['feePercentageExGst', optional(number())],
    feeFixedExGst: ['feeFixedExGst', optional(number())],
  }
);
