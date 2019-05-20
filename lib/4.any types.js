
// function add(one: any, two: any): number {
//   return one + two;
// }

// add(1, 2);     // Works.
// add("1", "2"); // Works.
// add({}, []);   // Works.


// function getNestedProperty(obj: any) {
//   return obj.foo.bar.baz;
// }

// getNestedProperty({});

// function fn(obj: any) {
//   let foo /* (:any) */ = obj.foo;
// }
// fn(8)

// function fn(obj: any) {
//   let foo: number = obj.foo;
// }

function fn(obj) /* (:number) */{
  let foo = obj.foo;
  let bar /* (:number) */ = foo * 2;
  return bar;
}

let bar /* (:number) */ = fn({ foo: 2 });
let baz /* (:string) */ = "baz:" + bar;