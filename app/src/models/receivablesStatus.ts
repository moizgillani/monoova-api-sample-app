/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface ReceivablesStatus {
  /** The bank account number for the account to open or close. <br/> `at least one of clientUniqueId or bankAccountNumber required` */
  bankAccountNumber?: number;
  /** The unique identifier for the account to open or close. <br/> `at least one of clientUniqueId or bankAccountNumber required` */
  clientUniqueId?: string;
  /** Used to open and close account numbers. Closed account numbers will return all payments made to that account number. */
  isActive?: boolean;
}

export const receivablesStatusSchema: Schema<ReceivablesStatus> = object({
  bankAccountNumber: ['bankAccountNumber', optional(number())],
  clientUniqueId: ['clientUniqueId', optional(string())],
  isActive: ['isActive', optional(boolean())],
});
