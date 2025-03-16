/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export interface ApiConfiguration {
	baseUrl: string;
	version: string;
	endpoints: {
		workspace: string;
		auth: string;
		settings: string;
	};
}

export const defaultApiConfig: ApiConfiguration = {
	baseUrl: process.env.API_URL || 'http://localhost:3000',
	version: process.env.API_VERSION || 'v1',
	endpoints: {
		workspace: '/api/workspace',
		auth: '/api/auth',
		settings: '/api/settings'
	}
};
