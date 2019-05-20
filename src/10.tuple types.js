// @flow
// let tuple1: [number] = [1];
// let tuple2: [number, boolean] = [1, true];
// let tuple3: [number, boolean, string] = [1, true, "three"];

// let tuple: [number, boolean, string] = [1, true, "three"];

// let num  : number  = tuple[0]; // Works!
// let bool : boolean = tuple[1]; // Works!
// let str  : string  = tuple[2]; // Works!

// console.log(tuple[0]) //1

// let tuple: [number, boolean, string] = [1, true, "three"];

// let num  : number  = tuple[0]; // Works!
// let bool : boolean = tuple[1]; // Works!
// let str  : string  = tuple[2]; // Works!

// let tuple: [number, boolean, string] = [1, true, "three"];

// let none = tuple[3]; // Error!

// let tuple: [number, boolean, string] = [1, true, "three"];

// function getItem(n: number) {
//   let val: number | boolean | string = tuple[n];
//   // ...
// }

// let tuple: [number, boolean, string] = [1, true, "three"];

// tuple[0] = 2;     // Works!
// tuple[1] = false; // Works!
// tuple[2] = "foo"; // Works!

// $ExpectError
// tuple[0] = "bar"; // Error!
// // $ExpectError
// tuple[1] = 42;    // Error!
// // $ExpectError
// tuple[2] = false; // Error!

// @flow
// let tuple1: [number, boolean]       = [1, true];
// // $ExpectError
// let tuple2: [number, boolean, void] = tuple1; // Error!

// let array: Array<number>    = [1, 2];
// // $ExpectError
// let tuple: [number, number] = array; // Error!

// @flow
// let tuple: [number, number] = [1, 2];
// // $ExpectError
// let array: Array<number>    = tuple; // Error!