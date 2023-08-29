/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string, unknown } from '../schema';

export interface DTOGenericPaymentGatewayTransactionStatus {
  completedDate?: string;
  uniqueReference?: string;
  statusDescription?: string;
  transactionStatus?: string;
  dishonouredDate?: string;
  creditCardPaymentStatus?: unknown;
  waitingOnClearedFundsDate?: string;
}

export const dTOGenericPaymentGatewayTransactionStatusSchema: Schema<DTOGenericPaymentGatewayTransactionStatus> = object(
  {
    completedDate: ['completedDate', optional(string())],
    uniqueReference: ['uniqueReference', optional(string())],
    statusDescription: ['statusDescription', optional(string())],
    transactionStatus: ['transactionStatus', optional(string())],
    dishonouredDate: ['dishonouredDate', optional(string())],
    creditCardPaymentStatus: ['creditCardPaymentStatus', optional(unknown())],
    waitingOnClearedFundsDate: [
      'waitingOnClearedFundsDate',
      optional(string()),
    ],
  }
);