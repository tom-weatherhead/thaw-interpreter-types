// tom-weatherhead/thaw-interpreter-types/src/enums/lexical-states.ts

export enum LexicalState {
	tokenNone = 1,
	tokenIntLit,
	tokenFltLit,
	tokenStrLit,
	tokenStrLit2,
	tokenIdent,
	tokenBoolIdent,
	tokenSkolemIdent,
	tokenVariable,
	tokenPlus,
	tokenMinus,
	tokenMult,
	tokenDiv,
	tokenEqual,
	tokenNotEqual,
	tokenLess,
	tokenLessEqual,
	tokenGreater,
	tokenGreaterEqual,
	tokenSemicolon,
	tokenComma,
	token2OrBar,
	token2Ampersand,
	tokenLeftBracket, // (
	tokenRightBracket, // )
	tokenAssign, // Usually :=
	tokenArrow, // ->
	tokenThickArrow, // =>
	tokenExclamation,
	tokenApostrophe,
	tokenOctothorpe, // #
	tokenDollar,
	tokenDot,
	tokenLeftSquareBracket, // [
	tokenRightSquareBracket, // ]
	tokenOrBar, // |
	tokenAmpersand, // &
	tokenColon,
	tokenLeftCurlyBrace, // {
	tokenRightCurlyBrace, // }
	tokenQuoteKeyword,
	tokenQuestionMinus,
	tokenColonMinus,
	tokenEqualLessThan,
	tokenBackslashPlus,
	tokenBackslashEqual,
	tokenEqualEqual,
	tokenBackslashEqualEqual,
	tokenEqualColonEqual,
	tokenEqualBackslashEqual,
	tokenMinusMinusGreaterThan,
	tokenEqualDotDot,
	tokenCaret, // ^
	tokenTilde, // ~
	tokenLowercaseGreekLetterLambda, // λ

	// Protos
	tokenPercent,
	tokenPlusEqual,
	tokenMinusEqual,
	tokenMultEqual,
	tokenDivEqual,
	tokenPercentEqual,
	tokenForAll, // ∀
	tokenThereExists, // ∃
	tokenThereDoesNotExist, // ∄
	tokenEmptySet, // ∅
	tokenIsAnElementOf, // U+2208	∈	Is an element of (i.e. is a member of) (large)
	tokenIntersection, // ∩
	tokenUnion, // ∪
	tokenIsASubsetOf, // U+2286	⊆	Subset of or equal to
	tokenIsAProperSubsetOf,
	tokenBitwiseShiftLeft,
	tokenBitwiseShiftRight,
	tokenBitwiseAndEqual,
	tokenBitwiseOrEqual,
	tokenBitwiseXorEqual,
	tokenBitwiseShiftLeftEqual,
	tokenBitwiseShiftRightEqual,

	tokenEOF,

	// Non-accept (intermediate) states
	stateStart,
	stateError,
	stateStrLitOpen,
	stateStrLit2Open,
	stateIntLitDot,
	stateQuestion,
	stateAmpersand,
	stateAt,
	stateDollar,
	stateBackslash,
	stateEqualColon,
	stateEqualBackslash,
	stateMinusMinus,
	stateEqualDot
}

// T_EOF_Error,            // End of file (one or more errors detected)
// T_2DOT,			    /* .. */
// T_POWER,			    /* ** */
