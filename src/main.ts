// tom-weatherhead/thaw-interpreter-types/src/main.ts

export * from './enums/grammar-symbols';
export * from './enums/language-selectors';
export * from './enums/lexical-analyzer-selectors';
export * from './enums/lexical-states';
export * from './enums/parser-selectors';

export * from './interfaces/igrammar';
export * from './interfaces/iparser';
export * from './interfaces/iproduction';
export * from './interfaces/itoken';
export * from './interfaces/itokenizer';

// TODO? : Add an interface IStdio {
//	readLineFromStdin(): Promise<string>;
//	writeToStdout(str: string): Promise<void>;
//	writeToStderr(str: string): Promise<void>;
// } ... but then all evaluate() functions will need to be async
