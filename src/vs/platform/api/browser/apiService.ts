/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { RequestInterceptor } from '../../request/common/requestInterceptor.js';

export class ApiService {
	private interceptor: RequestInterceptor;

	constructor() {
		this.interceptor = new RequestInterceptor();
	}

	public async fetchWorkspace(id: string): Promise<any> {
		return this.interceptor.intercept(`/api/workspace/${id}`);
	}

	public async fetchSettings(): Promise<any> {
		return this.interceptor.intercept('/api/settings');
	}
}
