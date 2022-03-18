var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// primitive types
// 1. number
var age;
age = 30;
// 2. string
var userName;
userName = "Mike";
// 3. boolean
var isStudent;
isStudent = false;
// null 과 undefined 는 나중에
// more complex types
// 1. array
var hobbies;
hobbies = ["football", "movie", "cooking"];
// 2. object
// let person: { name: string; age: number };
var person;
person = { name: "mike", age: 30 };
// 3. both
// let people: { name: string; age: number }[];
var people;
people = [
    {
        name: "mike",
        age: 30
    },
    {
        name: "Kang",
        age: 29
    },
];
// type inference
var course = "React - The Complite Guide";
// course = 123; 불가능 타입 추론에 의해서 type 은 string 이기 때문에 number 를 assign 할 수없음.
// union type
// const courseUID = "C1";
// const courseUID = "2201";
// 무엇이 와도 이상하지 않습니다
var courseUID;
courseUID = 2201;
courseUID = "C1";
// functions & types
var add = function (a, b) { return a + b; };
var printValue = function (value) { return console.log(value); };
// generic
// const insertAtBeginning = (arr: any[], val: any) => {
var insertAtBeginning = function (arr, val) {
    var newArr = __assign({ val: val }, arr);
    return newArr;
};
var demoArr = [1, 2, 3];
var updatedArr = insertAtBeginning(demoArr, -1);
var stringArr = insertAtBeginning(["a", "b", "c"], "d");
