//@ flow
// let arr1: Array<boolean> = [true, false, true];
// let arr2: Array<string> = ["A", "B", "C"];
// let arr3: Array<mixed> = [1, true, "three"]

// // 
// let array: Array<number> = [0, 1, 2];
// let value: number = array[3]; // Works.
let array = [0, 1, 2];
let value = array[1];

if (value !== undefined) {
  // number
}