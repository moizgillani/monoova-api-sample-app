/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface SubscriptionsUpdate {
  /** Unique id for the subscription that needs to be updated. */
  id: number;
  /** This is the API endpoint where the call back notification will be sent. */
  targetUrl: string;
  /** On/Off. Defaults to Off. */
  subscriptionStatus: string;
  /** This token will be sent back with the callback in Authorization header. <br> (Authorization:&nbsp; <strong>[type] [credentials] </strong>&nbsp;(e.x Basic Rjc1234567890jdGMS67890U78...)) <br> When updating the token, both 'type' and 'credentials' are required. */
  securityToken?: string;
}

export const subscriptionsUpdateSchema: Schema<SubscriptionsUpdate> = object({
  id: ['id', number()],
  targetUrl: ['targetUrl', string()],
  subscriptionStatus: ['subscriptionStatus', string()],
  securityToken: ['securityToken', optional(string())],
});