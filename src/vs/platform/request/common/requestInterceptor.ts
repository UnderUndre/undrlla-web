/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { ApiConfiguration, defaultApiConfig } from '../../api/common/apiConfig.js';

export class RequestInterceptor {
	private config: ApiConfiguration;

	constructor() {
		this.config = defaultApiConfig;
	}

	public async intercept(url: string, init?: RequestInit): Promise<Response> {
		// Handle only API requests
		if (url.startsWith('/api/')) {
			const apiUrl = this.buildApiUrl(url);
			return fetch(apiUrl, {
				...init,
				headers: {
					...init?.headers,
					'X-API-Version': this.config.version
				}
			});
		}
		return fetch(url, init);
	}

	private buildApiUrl(path: string): string {
		return `${this.config.baseUrl}${path}`;
	}
}
