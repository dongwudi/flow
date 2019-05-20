// @flow
// class MyClass {
//     // ...
//   }
  
// let myInstance: MyClass = new MyClass();

// class MyClass {
//     method() {
//       // $ExpectError
//       this.prop = 42; // Error!
//     }
//   }
  

//   class MyClass {
//     prop: number;
//     method() {
//       this.prop = 42;
//     }
//   }


// function func_we_use_everywhere (x: number): number {
//     return x + 1;
//   }
//   class MyClass {
//     static constant: number;
//     static helper: (number) => number;
//     method: number => number;
//   }
//   MyClass.helper = func_we_use_everywhere
//   MyClass.constant = 42
//   MyClass.prototype.method = func_we_use_everywhere

//   class MyClass {
//     prop: number = 42;
//   }

  class MyClass<A, B, C> {
    constructor(arg1: A, arg2: B, arg3: C) {
      // ...
    }
  }
  
  var val: MyClass<number, boolean, string> = new MyClass(1, true, 'three');