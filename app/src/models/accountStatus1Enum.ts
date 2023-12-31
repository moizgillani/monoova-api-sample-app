/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AccountStatus1Enum
 */
export enum AccountStatus1Enum {
  Enabled = 'enabled',
  Disabled = 'disabled',
}

/**
 * Schema for AccountStatus1Enum
 */
export const accountStatus1EnumSchema: Schema<AccountStatus1Enum> = stringEnum(AccountStatus1Enum);
