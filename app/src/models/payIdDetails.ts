/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import { PayIdStatusEnum, payIdStatusEnumSchema } from './payIdStatusEnum';

export interface PayIdDetails {
  /** The bank account number for the account against which you are trying to Register a PayID */
  bankAccountNumber?: number;
  /** Email address for the PayID. Max length: 256 */
  payId?: string;
  /** Name displayed to the payers in order to identify you */
  payIdName?: string;
  /** Status of your PayID. Possible values: Enable, Disable, Deregister, Port */
  payIdStatus?: PayIdStatusEnum;
}

export const payIdDetailsSchema: Schema<PayIdDetails> = object({
  bankAccountNumber: ['BankAccountNumber', optional(number())],
  payId: ['PayId', optional(string())],
  payIdName: ['PayIdName', optional(string())],
  payIdStatus: ['PayIdStatus', optional(payIdStatusEnumSchema)],
});