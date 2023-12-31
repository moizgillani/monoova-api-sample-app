/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface SubscriptionsResend {
  /** This is the Platform ID that is unique to your payment request. */
  transactionId: number;
  /** The type of event to be sent to this URL via callback. */
  eventName: string;
}

export const subscriptionsResendSchema: Schema<SubscriptionsResend> = object({
  transactionId: ['transactionId', number()],
  eventName: ['eventName', string()],
});
