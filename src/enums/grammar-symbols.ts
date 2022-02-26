// tom-weatherhead/thaw-interpreter-types/src/enums/grammar-symbols.ts

// Renamed Symbol to GrammarSymbol,
// since Symbol is already defined by JavaScript or Node.js
// (e.g. Symbol.iterator)

export enum GrammarSymbol {
	UndefinedSymbol = 0,
	Lambda,
	Dot,

	terminalBegin,
	terminalEnd,
	terminalAssign,
	terminalSemicolon,
	terminalRead,
	terminalWrite,
	terminalLeftBracket,
	terminalRightBracket,
	terminalLeftSquareBracket,
	terminalRightSquareBracket,
	terminalOrBar,
	terminalComma,
	terminalID,
	terminalVariable,
	terminalIntegerLiteral,
	terminalFloatLiteral,
	terminalStringLiteral,
	terminalPlus,
	terminalMinus,
	terminalCond,
	terminalLet,
	terminalLetStar,

	// LISP terminals
	terminalDefine,
	terminalIf,
	terminalWhile,
	terminalSet,
	terminalMultiply,
	terminalDivide,
	terminalEquals,
	terminalLessThan,
	terminalGreaterThan,
	terminalPrint,
	terminalCons,
	terminalCar,
	terminalCdr,
	terminalNumberPred,
	terminalSymbolPred,
	terminalListPred,
	terminalNullPred,
	terminalStringPred,
	terminalApostrophe,
	terminalDot,
	terminalList,
	terminalRplaca,
	terminalRplacd,
	terminalDefineMacro,
	terminalQuoteKeyword,
	terminalRandom,
	terminalToString,
	terminalListToString,
	terminalStringToList,
	terminalStringToSymbol,
	terminalSin,
	terminalCos,
	terminalTan,
	terminalPow,
	terminalExp,
	terminalLn,
	terminalFloor,
	terminalAtan2,
	terminalThrow,
	terminalStringLessThan,

	// Scheme terminals
	terminalPrimOpPred,
	terminalClosurePred,
	terminalLambdaKeyword,
	terminalLetRec,
	terminalCallCC,

	// Prolog terminals
	terminalNameBeginningWithCapital,
	terminalNameNotBeginningWithCapital,
	terminalFrom, // ':-'
	terminalInferPred, // '?-'
	terminalNotSymbol, // '\\+'
	terminalIs, // 'is'
	terminalLessOrEqual, // '=<'
	terminalGreaterOrEqual, // '>='
	terminalNotEqual, // '\\==' (equals is '==')
	terminalArithmeticEqual, // '=:='
	terminalArithmeticNotEqual, // '=\\='
	terminalUnifiable, // '='
	terminalNotUnifiable, // '\\='
	terminalIfThen, // '->'
	terminalColon, // ':'
	terminalDCGArrow, // '-->'
	terminalUniv, // '=..'
	terminalCaret, // '^'

	// EcstaSKI terminals
	terminalFn,
	terminalThickArrow, // '=>'

	// Terminals for the augmented Lambda calculus
	terminalIn,
	terminalTrue,
	terminalFalse,
	terminalComb,
	terminalInc,
	terminalDec,
	terminalAnd,
	terminalOr,
	terminalIsZero,
	terminalNil,

	// Smalltalk terminals
	terminalOctothorpe,
	terminalDollar,
	terminalClass,
	terminalObjectPred,
	terminalStrlen,
	terminalSubstr,
	terminalTypename,
	terminalStrcat,
	terminalNewArray,
	terminalArrayLength,
	terminalArrayGet,
	terminalArraySet,
	terminalArrayPred,
	terminalCharPred,
	terminalStringIndex,

	// APL terminals
	terminalVectorConst,
	terminalMax,
	terminalPlusSlash,
	terminalMinusSlash,
	terminalMultiplySlash,
	terminalDivideSlash,
	terminalMaxSlash,
	terminalOrSlash,
	terminalAndSlash,
	terminalCompress,
	terminalShape,
	terminalRavel,
	terminalRestruct,
	terminalCat,
	terminalIndx,
	terminalTrans,
	terminalSquareBrackets,
	terminalDoubleSubscripting,

	// CLU terminals
	terminalCluster,
	terminalRep,
	terminalExport,

	// Fxx terminals
	terminalThen,
	terminalElse,
	terminalCall,

	// Protos
	terminalTypeBoolean,
	terminalTypeByte,
	terminalTypeClosure,
	terminalTypeInteger,
	terminalTypeFloatingPoint,
	terminalTypeList,
	terminalTypeMap,
	terminalTypeString,
	terminalModulus,
	terminalMapGet,
	terminalMapSet,
	terminalAsync,
	terminalPlusEqual, // +=
	terminalMinusEqual, // -=
	terminalMultiplyEqual, // *=
	terminalDivideEqual, // /=
	terminalModulusEqual, // %=
	terminalLeftCurlyBrace, // {
	terminalRightCurlyBrace, // }
	terminalDo,
	terminalForEach,
	terminalDeclare,
	terminalBooleanPred,
	terminalMapPred,
	terminalPairPred,
	terminalLogicalNot, // !
	terminalBitwiseAnd, // &
	terminalBitwiseOr, // |
	terminalBitwiseXor, // ^
	terminalBitwiseNot, // ~
	terminalBitwiseShiftLeft, // <<
	terminalBitwiseShiftRight, // >>
	terminalBitwiseAndEqual, // &=
	terminalBitwiseOrEqual, // |=
	terminalBitwiseXorEqual, // ^=
	terminalBitwiseShiftLeftEqual, // <<=
	terminalBitwiseShiftRightEqual, // >>=
	terminalIncrement, // ++
	terminalDecrement, // --
	terminalQuestionMark, // ?
	terminalColonColon, // ::

	// terminal,

	terminalEOF,

	// Non-terminal symbols
	nonterminalStart, // The start symbol (i.e. the system goal)
	nonterminalProgram,
	nonterminalStatementList,
	nonterminalStatementTail,
	nonterminalStatement,
	nonterminalIDList,
	nonterminalIDTail,
	nonterminalExprList,
	nonterminalExprTail,
	nonterminalExpression,
	nonterminalTerm,
	nonterminalPrimaryTail,
	nonterminalPrimary,
	nonterminalAddOp,

	// Chapter 1 non-terminals
	nonterminalBracketedEntity, // TODO: Migrate away from this; use nonterminalBracketedInput and nonterminalUnbracketedInput instead.

	// LISP non-terminals
	nonterminalInput,
	nonterminalFunDef, // Function definition
	nonterminalFunction,
	nonterminalArgList,
	nonterminalVariableList,
	nonterminalVariable,
	nonterminalValue,
	nonterminalBracketedExpression,
	nonterminalExpressionList,
	nonterminalOptr, // Operator
	nonterminalValueOp,
	nonterminalQuotedConst,
	nonterminalSExpression,
	nonterminalSExpressionList,
	nonterminalSymbol,
	nonterminalMacroDef,
	nonterminalExprPairList,
	nonterminalLetKeyword,
	nonterminalVarExprList,

	nonterminalBracketedInput,
	nonterminalUnbracketedInput,
	nonterminalSExpressionListTail,

	// Prolog non-terminals
	nonterminalClause,
	nonterminalQuery,
	nonterminalGoal,
	nonterminalClauseTail,
	nonterminalGoalList,
	nonterminalGoalListTail,
	nonterminalList,
	nonterminalListContents,
	nonterminalListContentsTail,
	nonterminalFunctorExpression,
	nonterminalTailOfGoalOrFunctorExpression,
	nonterminalExpressionListTail,
	nonterminalGoalTail1,
	nonterminalVariableOrNumericLiteral,
	// nonterminalLHSGoal,
	// nonterminalLHSGoalTail,
	// nonterminalFunctor,
	// nonterminalFunctorParameters,
	// nonterminalGoalWithPossibleDisjunctiveTail,
	// nonterminalPossibleDisjunctiveTail,

	// EcstaSKI non-terminals
	nonterminalLambdaExpression,
	nonterminalLetStatement,

	nonterminalFunctionCall,
	nonterminalAfterVariable,

	// Smalltalk non-terminals
	nonterminalClassDef,
	nonterminalClass,
	nonterminalInstVars,
	nonterminalMethodDef,
	nonterminalMethodDefList,
	nonterminalLiteralList,

	// APL non-terminals
	nonterminalVectorConst,
	nonterminalIntegerLiteralList,

	// CLU non-terminals
	nonterminalClusterDef,
	nonterminalRep,
	nonterminalFunDefList,
	nonterminalOnePartName,
	// nonterminalTwoPartName,
	nonterminalOnePartNameTail,
	nonterminalExportList,
	nonterminalOnePartNameList,

	// Arithmetic
	nonterminalArithmeticExpression,
	nonterminalArithmeticExpression0,
	nonterminalArithmeticExpression1,
	nonterminalArithmeticExpression2,
	nonterminalArithmeticExpression3,
	nonterminalArithmeticExpression4,
	nonterminalArithmeticExpression5,
	nonterminalArithmeticExpression6,
	nonterminalArithmeticExpression7,
	nonterminalArithmeticExpression8,
	nonterminalArithmeticExpression9,
	nonterminalArithmeticExpression10,
	nonterminalArithmeticExpression11,
	nonterminalArithmeticExpression12,
	nonterminalArithmeticExpression13,
	nonterminalArithmeticExpression14,
	nonterminalArithmeticExpression15,
	nonterminalArithmeticOperator,
	nonterminalArithmeticOperator1,
	nonterminalArithmeticOperator2,
	nonterminalArithmeticOperator3,
	nonterminalArithmeticOperator4,
	nonterminalArithmeticOperator5,
	nonterminalArithmeticOperator6,
	nonterminalArithmeticOperator7,
	nonterminalArithmeticOperator8,
	nonterminalArithmeticOperator9,
	nonterminalArithmeticOperator10,
	nonterminalArithmeticOperator11,
	nonterminalArithmeticOperator12,
	nonterminalArithmeticOperator13,
	nonterminalArithmeticOperator14,
	nonterminalArithmeticOperator15,
	nonterminalArithmeticComparisonOperator,

	// Protos
	nonterminalActualParameterList,
	nonterminalFormalParameterList,
	nonterminalCommaSeparatedVariableList,
	nonterminalCommaSeparatedExpressionList,
	nonterminalTypeName,
	nonterminalTypeExpression,
	nonterminalTypeParameterized,
	nonterminalOptionalElseBlock,
	nonterminalNonEmptyExpressionList,
	nonterminalLValue, // A 'left value'; i.e. an expression to which a value can be assigned; e.g. the expression on the left-hand side of an assignment operator
	nonterminalAssignmentOperator,
	nonterminalBlock,
	nonterminalDeclarationPartOfBlock,
	nonterminalDeclaration,
	nonterminalDeclarationList,
	nonterminalValueList,
	nonterminalValueListTail
}
