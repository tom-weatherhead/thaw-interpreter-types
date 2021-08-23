// tom-weatherhead/thaw-interpreter-types/src/interfaces/itokenizer.ts

import { IToken } from './itoken';

export interface ITokenizer {
	tokenize(str: string): IToken[];
}
