// tom-weatherhead/thaw-interpreter-types/src/interfaces/iproduction.ts

import { IEqualityComparable, IStringifiable } from 'thaw-common-utilities.ts';

import { GrammarSymbol } from '../enums/grammar-symbols';

/* eslint-disable @typescript-eslint/ban-types */

export type ProductionRhsElementType = GrammarSymbol | string;

// A user-defined type guard. See e.g. https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

// export function isProduction(obj: unknown): obj is IProduction {
// 	const otherProduction = obj as IProduction;
// 	const lhs = otherProduction.lhs;
// 	const rhs = otherProduction.rhs;
// 	// const num = otherProduction.num;
//
// 	return (
// 		typeof lhs !== 'undefined' &&
// 		typeof lhs === 'number' &&
// 		typeof rhs !== 'undefined' &&
// 		rhs instanceof Array &&
// 		rhs.every((element: unknown) => typeof element === 'number' || typeof element === 'string') // &&
// 		// typeof num !== 'undefined' &&
// 		// typeof num === 'number'
// 	);
// }

export interface IProduction extends IEqualityComparable, IStringifiable {
	readonly lhs: GrammarSymbol;
	readonly rhs: ProductionRhsElementType[];
	// readonly num: number;

	getRHSWithNoSemanticActions(): GrammarSymbol[];
	stripOutSemanticActions(): IProduction;
	containsSymbol(symbol: GrammarSymbol): boolean;
}
