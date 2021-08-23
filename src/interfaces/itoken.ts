// tom-weatherhead/thaw-interpreter-types/src/interfaces/itoken.ts

export type TokenValueType = number | string | undefined;

export interface IToken {
	tokenType: number;
	readonly tokenValue: TokenValueType;
	readonly line: number;
	readonly column: number;
	readonly isQuoted: boolean;
}
