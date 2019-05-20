// @flow
// function concat(a: string, b: string): string {
//   return a + b;
// }

// concat("foo", "bar"); // Works!
// // $ExpectError
// concat(true, false);  // Error!

// function method(...args: Array<number>) {
//   // ...
// }

// method();        // Works.
// method(1);       // Works.
// method(1, 2);    // Works.
// method(1, 2, 3); // Works.

// function method(): boolean {
//   if (Math.random() > 0.5) {
//     return true;
//   }
//   return false
// }

// async function method(): Promise<number> {
//   return 123;
// }

// function method() {
//   return this;
// }

// var num: number = method.call(42);
// // $ExpectError
// var str: string = method.call(42);

// function truthy(a, b): boolean {
//   return a && b;
// }

// function concat(a: ?string, b: ?string): string {
//   if (truthy(a, b)) {
//     // $ExpectError
//     return a + b;
//   }
//   return '';
// }

// function truthy(a, b): boolean %checks {
//   return !!a && !!b;
// }

// function concat(a: ?string, b: ?string): string {
//   if (truthy(a, b)) {
//     return a + b;
//   }
//   return '';
// }

type CallableObj = {
  (number, number): number,
  bar: string
};

function add(x, y) {
  return x + y; 
}


add.bar = "hello world";
(add: CallableObj)