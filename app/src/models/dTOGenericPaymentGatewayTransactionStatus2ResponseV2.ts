/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  DTOGenericPaymentGatewayTransactionStatus,
  dTOGenericPaymentGatewayTransactionStatusSchema,
} from './dTOGenericPaymentGatewayTransactionStatus';

export interface DTOGenericPaymentGatewayTransactionStatus2ResponseV2 {
  /** This value represents the total time in milliseconds that the Platform took to process the request. */
  durationMs?: bigint;
  /** This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors */
  status?: string;
  /** This is a plain English description of the status. */
  statusDescription?: string;
  statuses?: DTOGenericPaymentGatewayTransactionStatus[];
}

export const dTOGenericPaymentGatewayTransactionStatus2ResponseV2Schema: Schema<DTOGenericPaymentGatewayTransactionStatus2ResponseV2> = object(
  {
    durationMs: ['durationMs', optional(bigint())],
    status: ['status', optional(string())],
    statusDescription: ['statusDescription', optional(string())],
    statuses: [
      'statuses',
      optional(
        array(lazy(() => dTOGenericPaymentGatewayTransactionStatusSchema))
      ),
    ],
  }
);
