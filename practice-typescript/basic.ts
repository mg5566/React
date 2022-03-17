// primitive types
// 1. number
let age: number;
age = 30;

// 2. string
let userName: string;
userName = "Mike";

// 3. boolean
let isStudent: boolean;
isStudent = false;

// null 과 undefined 는 나중에

// more complex types
// 1. array
let hobbies: string[];
hobbies = ["football", "movie", "cooking"];

//type alias
type Person = { name: string; age: number };

// 2. object
// let person: { name: string; age: number };
let person: Person;
person = { name: "mike", age: 30 };

// 3. both
// let people: { name: string; age: number }[];
let people: Person[];
people = [
  {
    name: "mike",
    age: 30,
  },
  {
    name: "Kang",
    age: 29,
  },
];

// type inference
const course = "React - The Complite Guide";
// course = 123; 불가능 타입 추론에 의해서 type 은 string 이기 때문에 number 를 assign 할 수없음.

// union type
// const courseUID = "C1";
// const courseUID = "2201";
// 무엇이 와도 이상하지 않습니다
let courseUID: string | number;
courseUID = 2201;
courseUID = "C1";

// functions & types
const add = (a: number, b: number) => a + b;

const printValue = (value: any) => console.log(value);


// generic
// const insertAtBeginning = (arr: any[], val: any) => {
const insertAtBeginning = <T>(arr: T[], val: T) => {
  const newArr = { val, ... arr};
  return newArr;
};

const demoArr = [1, 2, 3];

const updatedArr = insertAtBeginning(demoArr, -1);
const stringArr = insertAtBeginning<string>(["a", "b", "c"], "d");
