/**
 * Mission Stickers API
 * This document describes LINE Mission Stickers API.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-locals */
import { MissionStickerRequest } from '../model/missionStickerRequest';
import * as Types from "../../types";
import {ensureJSON} from "../../utils";
import {Readable} from "stream";

import { RequestFile } from './apis';
import HTTPClient from "../../http";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


interface httpClientConfig {
    baseURL?: string;
    // TODO support defaultHeaders?
}


export class ShopClient {
    private httpClient: HTTPClient;

    constructor(config: httpClientConfig = {}) {
        if (!config.baseURL) {
            config.baseURL = 'https://api.line.me';
        }
        this.httpClient = new HTTPClient(config);
    }

    /**
     * Sends a mission sticker.
     * @param missionStickerRequest 
     */
    public async missionStickerV3(missionStickerRequest: MissionStickerRequest, ) : Promise<Types.MessageAPIResponseBase> {
        let params = undefined;
            // isQueryParam=false isFormParam=false isQueryParam=false isPathParam=false isHeaderParam=false isBodyParam=true isModel=true
            params = missionStickerRequest

        const res = this.httpClient.post(
            "/shop/v3/mission",
            params,
        );
        return ensureJSON(res);
    }
}
