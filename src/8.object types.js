// @flow
// var obj1: { foo: boolean } = { foo: true };
// var obj2: {
//   foo: number,
//   bar: boolean,
//   baz: string,
// } = {
//   foo: 1,
//   bar: true,
//   baz: 'three',
// };

// var obj = { foo: "bar" };
// // $ExpectError
// obj.bar; // Error!

// var obj: { foo?: boolean } = {};

// obj.foo = true;    // Works!
// // $ExpectError
// obj.foo = 'hello'; // Error!


// function acceptsObject(value: { foo?: string }) {
//   // ...
// }

// acceptsObject({ foo: "bar" });     // Works!
// acceptsObject({ foo: undefined }); // Works!
// // $ExpectError
// acceptsObject({ foo: null });      // Error!
// acceptsObject({});                 // Works!

// var obj = {
//   foo: 1,
//   bar: true,
//   baz: 'three'
// };

// var foo: number  = obj.foo; // Works!
// var bar: boolean = obj.bar; // Works!
// // $ExpectError
// var baz: null    = obj.baz; // Error!
// var bat: string  = obj.bat; // Error!

// var obj = {
//   foo: 1
// };

// // $ExpectError
// obj.bar = true;    // Error!
// // $ExpectError
// obj.baz = 'three'; // Error!

// @flow
// var obj = {};

// obj.foo = 1;       // Works!
// obj.bar = true;    // Works!
// obj.baz = 'three'; // Works!

// var obj = {};

// if (Math.random()) obj.prop = true;
// else obj.prop = "hello";

// // $ExpectError
// var val1: boolean = obj.prop; // Error!
// // $ExpectError
// var val2: string  = obj.prop; // Error!
// var val3: boolean | string = obj.prop; // Works!

// var obj = {};

// obj.foo = 1;
// obj.bar = true;

// var foo: number  = obj.foo; // Works!
// var bar: boolean = obj.bar; // Works!
// var baz: string  = obj.baz; // Works?

// function method(obj: { foo: string }) {
//   // ...
// }

// method({
//   foo: "test", // Works!
//   bar: 42      // Works!
// });

// var foo: {| foo: string |} = { foo: "Hello", bar: "World!" }; // Error!

// type FooT = {| foo: string |};
// type BarT = {| bar: number |};

// type FooBarFailT = FooT & BarT;
// // type FooBarT = {| ...FooT, ...BarT |};

// const fooBarFail: FooBarFailT = { foo: '123', bar: 12 }; // Error!
// // const fooBar: FooBarT = { foo: '123', bar: 12 }; // Works!

// var o: { [string]: number } = {};
// o["foo"] = 0;
// o["bar"] = 1;
// var foo: number = o["foo"]

// var obj: { [number]: string } = {};
// obj[42].length; // No type error, but will throw at runtime

// var obj: {
//   size: number,
//   [id: number]: string
// } = {
//   size: 0
// };

// function add(id: number, name: string) {
//   obj[id] = name;
//   obj.size++;
// }

function method(obj: Object) {
  obj.foo = 42;               // Works.
  let bar: boolean = obj.bar; // Works.
  obj.baz.bat.bam.bop;        // Works.
}

method({ baz: 3.14, bar: "hello" });