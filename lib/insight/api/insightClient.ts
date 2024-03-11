/**
 * LINE Messaging API(Insight)
 * This document describes LINE Messaging API(Insight).
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-locals */
import { GetFriendsDemographicsResponse } from "../model/getFriendsDemographicsResponse";
import { GetMessageEventResponse } from "../model/getMessageEventResponse";
import { GetNumberOfFollowersResponse } from "../model/getNumberOfFollowersResponse";
import { GetNumberOfMessageDeliveriesResponse } from "../model/getNumberOfMessageDeliveriesResponse";
import { GetStatisticsPerUnitResponse } from "../model/getStatisticsPerUnitResponse";

import * as Types from "../../types";
import { ensureJSON } from "../../utils";
import { Readable } from "node:stream";

import HTTPFetchClient, { convertResponseToReadable } from "../../http-fetch";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

interface httpClientConfig {
  baseURL?: string;
  channelAccessToken: string;
  // TODO support defaultHeaders?
}

export class InsightClient {
  private httpClient: HTTPFetchClient;

  constructor(config: httpClientConfig) {
    if (!config.baseURL) {
      config.baseURL = "https://api.line.me";
    }
    this.httpClient = new HTTPFetchClient({
      defaultHeaders: {
        Authorization: "Bearer " + config.channelAccessToken,
      },
      baseURL: config.baseURL,
    });
  }

  private async parseHTTPResponse(response: Response) {
    const { LINE_REQUEST_ID_HTTP_HEADER_NAME } = Types;
    let resBody: Record<string, any> = {
      ...(await response.json()),
    };
    if (response.headers.get(LINE_REQUEST_ID_HTTP_HEADER_NAME)) {
      resBody[LINE_REQUEST_ID_HTTP_HEADER_NAME] = response.headers.get(
        LINE_REQUEST_ID_HTTP_HEADER_NAME,
      );
    }
    return resBody;
  }

  /**
   * Retrieves the demographic attributes for a LINE Official Account\'s friends.You can only retrieve information about friends for LINE Official Accounts created by users in Japan (JP), Thailand (TH), Taiwan (TW) and Indonesia (ID).
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-demographic"> Documentation</a>
   */
  public async getFriendsDemographics(): Promise<GetFriendsDemographicsResponse> {
    return (await this.getFriendsDemographicsWithHttpInfo()).body;
  }

  /**
   * Retrieves the demographic attributes for a LINE Official Account\'s friends.You can only retrieve information about friends for LINE Official Accounts created by users in Japan (JP), Thailand (TH), Taiwan (TW) and Indonesia (ID). .
   * This method includes HttpInfo object to return additional information.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-demographic"> Documentation</a>
   */
  public async getFriendsDemographicsWithHttpInfo(): Promise<
    Types.ApiResponseType<GetFriendsDemographicsResponse>
  > {
    const res = await this.httpClient.get("/v2/bot/insight/demographic");
    return { httpResponse: res, body: await res.json() };
  }
  /**
   * Returns statistics about how users interact with narrowcast messages or broadcast messages sent from your LINE Official Account.
   * @summary Get user interaction statistics
   * @param requestId Request ID of a narrowcast message or broadcast message. Each Messaging API request has a request ID.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-message-event">Get user interaction statistics Documentation</a>
   */
  public async getMessageEvent(
    requestId: string,
  ): Promise<GetMessageEventResponse> {
    return (await this.getMessageEventWithHttpInfo(requestId)).body;
  }

  /**
   * Returns statistics about how users interact with narrowcast messages or broadcast messages sent from your LINE Official Account. .
   * This method includes HttpInfo object to return additional information.
   * @summary Get user interaction statistics
   * @param requestId Request ID of a narrowcast message or broadcast message. Each Messaging API request has a request ID.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-message-event">Get user interaction statistics Documentation</a>
   */
  public async getMessageEventWithHttpInfo(
    requestId: string,
  ): Promise<Types.ApiResponseType<GetMessageEventResponse>> {
    const queryParams = {
      requestId: requestId,
    };

    const res = await this.httpClient.get(
      "/v2/bot/insight/message/event",
      queryParams,
    );
    return { httpResponse: res, body: await res.json() };
  }
  /**
   * Returns the number of users who have added the LINE Official Account on or before a specified date.
   * @summary Get number of followers
   * @param date Date for which to retrieve the number of followers.  Format: yyyyMMdd (e.g. 20191231) Timezone: UTC+9
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-followers">Get number of followers Documentation</a>
   */
  public async getNumberOfFollowers(
    date?: string,
  ): Promise<GetNumberOfFollowersResponse> {
    return (await this.getNumberOfFollowersWithHttpInfo(date)).body;
  }

  /**
   * Returns the number of users who have added the LINE Official Account on or before a specified date. .
   * This method includes HttpInfo object to return additional information.
   * @summary Get number of followers
   * @param date Date for which to retrieve the number of followers.  Format: yyyyMMdd (e.g. 20191231) Timezone: UTC+9
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-followers">Get number of followers Documentation</a>
   */
  public async getNumberOfFollowersWithHttpInfo(
    date?: string,
  ): Promise<Types.ApiResponseType<GetNumberOfFollowersResponse>> {
    const queryParams = {
      date: date,
    };

    const res = await this.httpClient.get(
      "/v2/bot/insight/followers",
      queryParams,
    );
    return { httpResponse: res, body: await res.json() };
  }
  /**
   * Returns the number of messages sent from LINE Official Account on a specified day.
   * @summary Get number of message deliveries
   * @param date Date for which to retrieve number of sent messages. - Format: yyyyMMdd (e.g. 20191231) - Timezone: UTC+9
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-delivery-messages">Get number of message deliveries Documentation</a>
   */
  public async getNumberOfMessageDeliveries(
    date: string,
  ): Promise<GetNumberOfMessageDeliveriesResponse> {
    return (await this.getNumberOfMessageDeliveriesWithHttpInfo(date)).body;
  }

  /**
   * Returns the number of messages sent from LINE Official Account on a specified day. .
   * This method includes HttpInfo object to return additional information.
   * @summary Get number of message deliveries
   * @param date Date for which to retrieve number of sent messages. - Format: yyyyMMdd (e.g. 20191231) - Timezone: UTC+9
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-delivery-messages">Get number of message deliveries Documentation</a>
   */
  public async getNumberOfMessageDeliveriesWithHttpInfo(
    date: string,
  ): Promise<Types.ApiResponseType<GetNumberOfMessageDeliveriesResponse>> {
    const queryParams = {
      date: date,
    };

    const res = await this.httpClient.get(
      "/v2/bot/insight/message/delivery",
      queryParams,
    );
    return { httpResponse: res, body: await res.json() };
  }
  /**
   * You can check the per-unit statistics of how users interact with push messages and multicast messages sent from your LINE Official Account.
   * @param customAggregationUnit Name of aggregation unit specified when sending the message. Case-sensitive. For example, `Promotion_a` and `Promotion_A` are regarded as different unit names.
   * @param from Start date of aggregation period.  Format: yyyyMMdd (e.g. 20210301) Time zone: UTC+9
   * @param to End date of aggregation period. The end date can be specified for up to 30 days later. For example, if the start date is 20210301, the latest end date is 20210331.  Format: yyyyMMdd (e.g. 20210301) Time zone: UTC+9
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-statistics-per-unit"> Documentation</a>
   */
  public async getStatisticsPerUnit(
    customAggregationUnit: string,
    from: string,
    to: string,
  ): Promise<GetStatisticsPerUnitResponse> {
    return (
      await this.getStatisticsPerUnitWithHttpInfo(
        customAggregationUnit,
        from,
        to,
      )
    ).body;
  }

  /**
   * You can check the per-unit statistics of how users interact with push messages and multicast messages sent from your LINE Official Account. .
   * This method includes HttpInfo object to return additional information.
   * @param customAggregationUnit Name of aggregation unit specified when sending the message. Case-sensitive. For example, `Promotion_a` and `Promotion_A` are regarded as different unit names.
   * @param from Start date of aggregation period.  Format: yyyyMMdd (e.g. 20210301) Time zone: UTC+9
   * @param to End date of aggregation period. The end date can be specified for up to 30 days later. For example, if the start date is 20210301, the latest end date is 20210331.  Format: yyyyMMdd (e.g. 20210301) Time zone: UTC+9
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-statistics-per-unit"> Documentation</a>
   */
  public async getStatisticsPerUnitWithHttpInfo(
    customAggregationUnit: string,
    from: string,
    to: string,
  ): Promise<Types.ApiResponseType<GetStatisticsPerUnitResponse>> {
    const queryParams = {
      customAggregationUnit: customAggregationUnit,
      from: from,
      to: to,
    };

    const res = await this.httpClient.get(
      "/v2/bot/insight/message/event/aggregation",
      queryParams,
    );
    return { httpResponse: res, body: await res.json() };
  }
}
