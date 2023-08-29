/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, lazy, object, optional, Schema, string } from '../schema';
import {
  DTOBPAYValidationV1,
  dTOBPAYValidationV1Schema,
} from './dTOBPAYValidationV1';

export interface DTOValidateBPAYResponseV1 {
  /** This value represents the total time in milliseconds that the Platform took to process the request. */
  durationMs?: bigint;
  /** This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors */
  status?: string;
  /** This is a plain English description of the status. */
  statusDescription?: string;
  validation?: DTOBPAYValidationV1;
}

export const dTOValidateBPAYResponseV1Schema: Schema<DTOValidateBPAYResponseV1> = object(
  {
    durationMs: ['durationMs', optional(bigint())],
    status: ['status', optional(string())],
    statusDescription: ['statusDescription', optional(string())],
    validation: ['validation', optional(lazy(() => dTOBPAYValidationV1Schema))],
  }
);
