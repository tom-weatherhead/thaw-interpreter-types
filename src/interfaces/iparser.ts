// tom-weatherhead/thaw-interpreter-types/src/interfaces/iparser.ts

import { IToken } from './itoken';

export interface IParser {
	recognize(tokenList: IToken[]): void;
	parse(tokenList: IToken[]): unknown;
}
