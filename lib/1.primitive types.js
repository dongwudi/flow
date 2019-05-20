
// function method(x: number, y: string, z: boolean) {
//   console.log(x,y,z) //3.14 'hello' true
// }

// method(3.14, "hello", true);


// function method(x: Number, y: String, z: Boolean) {
//   console.log(x,y,z) //[Number: 42] [String: 'world'] [Boolean: false]
// }

// method(new Number(42), new String("world"), new Boolean(false));


// function acceptsBoolean(value: boolean) {
//   console.log(value)
// }
// acceptsBoolean(true);  // No errors!
// acceptsBoolean(false); // No errors!
// acceptsBoolean("foo"); // Error!

// function acceptsNumber(value: number) {
//   console.log(value)
// }

// acceptsNumber(42);       // Works!
// acceptsNumber(3.14);     // Works!
// acceptsNumber(NaN);      // Works!
// acceptsNumber(Infinity); // Works!
// acceptsNumber("foo");    // Error!

// function acceptsString(value: string) {
//   console.log(value)
// }

// acceptsString("foo"); // Works!
// acceptsString(false); // Error!

// "foo" + "foo"; // Works!
// "foo" + 42;    // Works!
// "foo" + {};    // Error!
// "foo" + [];    // Error!

// "foo" + String({});     // Works!
// "foo" + [].toString();  // Works!
// "" + JSON.stringify({}) // Works!

// function acceptsNull(value: null) {
//   /* ... */
// }

// function acceptsUndefined(value: void) {
//   /* ... */
// }

// acceptsNull(null);      // Works!
// acceptsNull(undefined); // Error!
// acceptsUndefined(null);      // Error!
// acceptsUndefined(undefined); // Works!

// function acceptsMaybeString(value: ?string) {
//   // ...
// }

// acceptsMaybeString("bar");     // Works!
// acceptsMaybeString(undefined); // Works!
// acceptsMaybeString(null);      // Works!
// acceptsMaybeString();          // Works!

// function acceptsObject(value: { foo?: string }) {
//   // ...
// }

// acceptsObject({ foo: "bar" });     // Works!
// acceptsObject({ foo: undefined }); // Works!
// acceptsObject({ foo: null });      // Error!
// acceptsObject({});                 // Works!


// function acceptsOptionalString(value?: string = 'default') {
//   // ...
// }

// acceptsOptionalString("bar");     // Works!
// acceptsOptionalString(undefined); // Works!
// acceptsOptionalString(null);      // Error!
// acceptsOptionalString();          // Works!