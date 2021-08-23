// rollup.config.js

/**
 * Copyright (c) Tom Weatherhead. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
	input: './dist/lib/main.js',
	output: [
		{
			file: 'dist/thaw-interpreter-types.cjs.js',
			format: 'cjs',
			exports: 'named',
			globals: { uuid: 'uuid' }
			// plugins: [nodeResolve()]
		},
		{
			file: 'dist/thaw-interpreter-types.esm.js',
			format: 'es',
			esModule: true,
			compact: true,
			globals: { uuid: 'uuid' },
			plugins: [terser()]
		},
		{
			file: 'dist/thaw-interpreter-types.js',
			name: 'thaw-interpreter-types',
			format: 'umd',
			compact: true,
			globals: { uuid: 'uuid' },
			plugins: [terser()]
		}
	],
	context: 'this',
	external: ['uuid'],
	plugins: [nodeResolve()]
};
