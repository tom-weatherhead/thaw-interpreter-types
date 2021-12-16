// tom-weatherhead/thaw-interpreter-types/src/enums/language-selectors.ts

export enum LanguageSelector {
	MinimalLanguage,
	// BEGIN : Languages from Kamin's book
	Micro,
	Chapter1,
	LISP,
	APL,
	Scheme,
	SASL,
	CLU,
	Smalltalk,
	Prolog, // Kamin's Prolog syntax, from his book.
	// END : Languages from Kamin's book
	Prolog2, // Real Prolog syntax.
	Inference,
	JSON,
	EcstaSKI, // Evaluation via graph reduction using S, K, I combinators.
	Adso, // Not yet used
	LambdaCalculus,
	LambdaCalculusWithAugmentedSyntax,
	LambdaCalculusIntegerExtension,
	C,
	N1,
	Arithmetic
}
