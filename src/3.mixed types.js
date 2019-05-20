// @flow

// function square(n: number) {
//   return n * n;
// }

// square(2)

// function stringifyBasicValue(value: string | number) {
//   return '' + value;
// }
// stringifyBasicValue('str')

// function identity<T>(value: T): T {
//   return value;
// }


// function getTypeOf(value: mixed): string {
//   return typeof value;
// }

// function stringify(value: mixed) {
//   // ...
// }

// stringify("foo");
// stringify(3.14);
// stringify(null);
// stringify({});

// function stringify(value: mixed) {
//   // $ExpectError
//   return "" + value; // Error!
// }

// stringify("foo");

function stringify(value: mixed) {
  if (typeof value === 'string') {
    return "" + value; // Works!
  } else {
    return "";
  }
}

stringify("foo");