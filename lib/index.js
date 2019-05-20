// ./node_modules/.bin/flow src


// 原始类型--------------------------
function test1(x, y, z) {}
test1(3, "hello", true); //no errors!


//对象类型--------------------------
function test2(x, y, z) {}
test2(new Number(3), new String('hello'), new Boolean(false)); //no errors!


// Boolean 在Flow中，默认并不会转换类型，如果你需要转换类型请使用显示或隐式转换 --------------------------
function acceptsBoolean(value) {}
acceptsBoolean(true); // no errors!
acceptsBoolean(false); // no errors!
// acceptsBoolean("hello"); // Error!
acceptsBoolean(Boolean("hello")); // no errors!
acceptsBoolean(!!"hello"); // no errors!

// Number--------------------------
function acceptsNumber(value) {}

acceptsNumber(4); // no errors!
acceptsNumber(1.2); // no errors!
acceptsNumber(NaN); // no errors!
acceptsNumber(Infinity); // no errors!
// acceptsNumber("hello");    // Error!


// null和void  JavaScript有 null 和 undefined。Flow将这些视为单独的类型：null 和 void（void表示undefined类型）--------------------------
function acceptsNull(value) {}

function acceptsUndefined(value) {}

acceptsNull(null); //  no errors!
// acceptsNull(undefined); // Error!
// acceptsUndefined(null);      // Error!
acceptsUndefined(undefined); //  no errors!

// 可选值--------------------------
// 用于可选值的地方，你可以通过在类型前添加一个问号（如 ?string 或者 ?number）来创建它们。除了问号 ? 后跟着的类型，也许类型也可以是 null 或者 void 类型
function acceptsMaybeString(value) {}

acceptsMaybeString("hello"); // no errors!
acceptsMaybeString(undefined); // no errors!
acceptsMaybeString(null); // no errors!
acceptsMaybeString(); // no errors!

// 可选的对象属性--------------------------
// { propertyName?: string } 除了它们的设定值类型之外，这些可选属性也可以被 void 完全省略。但是，他们不能 null
function acceptsObject(value) {}

acceptsObject({ foo: "hello" }); // no errors!
acceptsObject({ foo: undefined }); // no errors!
// acceptsObject({ foo: null }); // Error!
acceptsObject({}); // no errors!


// 可选的函数参数--------------------------
// 函数可以具有可选参数，其中问号 ? 出现在参数名称后面。同样，该参数不能为 null
function acceptsOptionalString(value) {}

acceptsOptionalString("hello"); // no errors!
acceptsOptionalString(undefined); // no errors!
// acceptsOptionalString(null);      // Error!
acceptsOptionalString(); // no errors!

//具体值--------------------------
function foo(value) {}
foo('hello'); // no errors!
// foo(3); // Error!
// foo('2'); // Error!


// | 或者--------------------------

function getColor(name) {
  switch (name) {
    case "success":
      return "green";
    case "warning":
      return "yellow";
    case "danger":
      return "red";
  }
}
getColor("success"); // no errors!
getColor("danger"); // no errors!
// getColor("error");   // Error!


//mixed 混合类型--------------------------
// 并不能确定需要的值到底是哪种类型，这时候我们可以使用混合类型来表示，但在使用该值之前，我们需要判断该值到底是哪种类型，否则会引起错误
// function mixedfn (value:mixed) {
//   return '' + value  //error
// }
// mixedfn('hello')

function mixedfn(value) {
  if (typeof value === 'string') {
    return value;
  } else {
    return '';
  }
}

mixedfn('hello'); //no errors!


//any 任意类型----------------------
function add(one, two) {
  return one + two;
}
add(1, 2); // no errors!
add("1", "2"); // no errors!
add({}, []); // no errors!

// 数组类型-------------------------
let arr = [1, 2, 3];