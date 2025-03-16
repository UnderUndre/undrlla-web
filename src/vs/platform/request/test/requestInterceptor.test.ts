/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// TODO: Fix ESLint rule for code-import-patterns
// Test utilities/frameworks first
import { jest, expect } from '@jest/globals';

// VS Code common modules second
import { RequestInterceptor } from '../common/requestInterceptor.js';

describe('RequestInterceptor', () => {
	let interceptor: RequestInterceptor;

	beforeEach(() => {
		interceptor = new RequestInterceptor();
	});

	test('should rewrite API URLs', async () => {
		const originalFetch = global.fetch;

		try {
			global.fetch = jest.fn<typeof fetch>().mockImplementation(() =>
				Promise.resolve(new Response())
			);

			await interceptor.intercept('/api/workspace/123');

			expect(global.fetch).toHaveBeenCalledWith(
				'http://localhost:3000/api/workspace/123',
				expect.any(Object)
			);
		} finally {
			global.fetch = originalFetch;
		}
	});
});
