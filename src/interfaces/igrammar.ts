// tom-weatherhead/thaw-interpreter-types/src/interfaces/igrammar.ts

import { Stack } from 'thaw-common-utilities.ts';

import { IToken } from './itoken';

import { IProduction } from './iproduction';

import { GrammarSymbol } from '../enums/grammar-symbols';

import { LexicalAnalyzerSelector } from '../enums/lexical-analyzer-selectors';

import { ParserSelector } from '../enums/parser-selectors';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SemanticStackType = Stack<any>;

export interface IGrammar {
	terminals: GrammarSymbol[];
	nonTerminals: GrammarSymbol[];
	startSymbol: GrammarSymbol;
	productions: IProduction[];

	// 'Get' accessors:
	languageName: string;
	defaultLexicalAnalyzer: LexicalAnalyzerSelector;
	defaultParser: ParserSelector;
	selectorsOfCompatibleParsers: ParserSelector[];

	executeSemanticAction(semanticStack: SemanticStackType, action: string): void;
	tokenToSymbol(token: IToken): GrammarSymbol;
	pushTokenOntoSemanticStack(
		semanticStack: SemanticStackType,
		tokenAsSymbol: GrammarSymbol,
		token: IToken
	): void;
	findStartingProduction(): IProduction;
	// removeProductionsContainingSymbol(symbol: number): void;
}
