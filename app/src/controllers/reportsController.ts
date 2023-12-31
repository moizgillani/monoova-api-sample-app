/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import {
  DTOGenericPaymentGenericPaymentSettlementResponseV1,
  dTOGenericPaymentGenericPaymentSettlementResponseV1Schema,
} from '../models/dTOGenericPaymentGenericPaymentSettlementResponseV1';
import {
  DTOGenericPaymentGenericPaymentStatementResponseV1,
  dTOGenericPaymentGenericPaymentStatementResponseV1Schema,
} from '../models/dTOGenericPaymentGenericPaymentStatementResponseV1';
import { string } from '../schema';
import { BaseController } from './baseController';

export class ReportsController extends BaseController {
  /**
   * You may choose to set your mAccounts to settle automatically every day.  If so, the mAccount balance
   * will be brought to zero at 4pm (Sydney time) each business day.  Any positive balance will be
   * disbursed to the bank account you have linked;  any negative balance will be direct debited from the
   * bank account you have linked.  Transactions on weekends, public holidays and after 4pm won’t appear
   * in the settlement report until after 4pm the next business day. <br> This report returns an array of
   * actual disbursements for each transaction that was settled on the given date.  Date is represented
   * by ISO8601 – ‘2016-03-01’ for 1st March 2016.
   *
   * @param date Date is represented by ISO8601 – ‘2016-03-01’ for 1st March 2016.
   * @return Response from the API call
   */
  async reportSettlement(
    date: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DTOGenericPaymentGenericPaymentSettlementResponseV1>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ date: [date, string()] });
    req.appendTemplatePath`/reports/v1/settlement/${mapped.date}`;
    req.throwOn(400, ApiError, 'Bad request');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(
      dTOGenericPaymentGenericPaymentSettlementResponseV1Schema,
      requestOptions
    );
  }

  /**
   * This API returns all successful transactions on the given date. Date is represented by ISO8601 –
   * ‘2016-03-01’ for 1st March 2016.
   *
   * @param date Date is represented by ISO8601 – ‘2016-03-01’ for 1st March 2016.
   * @return Response from the API call
   */
  async reportStatement(
    date: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DTOGenericPaymentGenericPaymentStatementResponseV1>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ date: [date, string()] });
    req.appendTemplatePath`/reports/v1/statement/${mapped.date}`;
    req.throwOn(400, ApiError, 'Bad request');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(
      dTOGenericPaymentGenericPaymentStatementResponseV1Schema,
      requestOptions
    );
  }
}
