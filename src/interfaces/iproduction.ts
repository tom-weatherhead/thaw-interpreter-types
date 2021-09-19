// tom-weatherhead/thaw-interpreter-types/src/interfaces/iproduction.ts

import { IEqualityComparable, IStringifiable } from 'thaw-common-utilities.ts';

import { GrammarSymbol } from '../enums/grammar-symbols';

export type ProductionRhsElementType = GrammarSymbol | string;

export interface IProduction extends IEqualityComparable, IStringifiable {
	readonly lhs: GrammarSymbol;
	readonly rhs: ProductionRhsElementType[];
	// readonly num: number;

	getRHSWithNoSemanticActions(): GrammarSymbol[];
	stripOutSemanticActions(): IProduction;
	containsSymbol(symbol: GrammarSymbol): boolean;
}
