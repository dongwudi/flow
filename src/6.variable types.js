// @flow
// const foo /* : number */ = 1;
// const bar: number = 2;

// let foo: number = 1;
// foo = 2;   // Works!
// // $ExpectError
// foo = "3"; // Error!

// let foo = 42;

// if (Math.random()) foo = true;
// if (Math.random()) foo = "hello";

// let isOneOf: number | boolean | string = foo; // Works!

// @flow
// let foo = 42;
// let isNumber: number = foo; // Works!

// foo = true;
// let isBoolean: boolean = foo; // Works!

// foo = "hello";
// let isString: string = foo; // Works!

// @flow
// let foo = 42;

// function mutate() {
//   foo = true;
//   foo = "hello";
// }

// mutate();

// // $ExpectError
// let isString: string = foo; // Error!