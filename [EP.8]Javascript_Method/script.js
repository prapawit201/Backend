function clickbtn() {
  document.getElementById("hello").innerHTML = "bye bye";
}

// let a = 1;
// let b = 2;
// document.write(a + b);

//slice ตัดเอาตัวออกมาจาก array โดยใช้ array ใหม่
// let arr = [1, 2, 3, 4, 5];
// document.write(arr.slice(0, 3));

//splice
// let arr1 = [1, 2, 3, 4, 5];
// document.write(arr1.splice(1, 2));

//join
// let arr2 = ["1", "2", "3", "4", "5"];
// document.write(arr2.join(" - "));

// let objectStr = { name: "babe", old: 21 };
// document.write(Object.keys(objectStr));
// document.write(Object.values(objectStr));

//map
// let arr = [1, 2, 3, 4, 5];
// console.log(
//   arr.map(n => {
//     return n + 1;
//   })
// );

//sort
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.sort());

//reverse
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());

//for
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.forEach(n => console.log(n + 1)));

//filter
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.filter(n => n > 1));

//reduce
// function reduceArr(a, b) {
//   return a + b;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reduce(reduceArr));

//shift
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.shift());

//includes
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(2));

//push
// let temp = [];
// let form = {
//   name: "",
//   old: [],
// };
// temp.push(form);
// let arr = [1, 2, 3, 4, 5];
// form.old.push(...arr);
// console.log(temp);

//concat รวม array เข้าด้วยกัน
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// console.log(arr1.concat(arr2));

//toString
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.toString());

//unShift เพิ่ม data ในช่อง index  ที่ 0
// let arr = ["6", "7", "8"];
// console.log(arr.unshift("1", "2"));

//fill เเทนค่าใน arr ด้วย values
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.fill(0));

//find
// let arr = [1, 2, 3, 4, 5];
// console.log(
//   arr.forEach(
//     arr.find(n => {
//       console.log(n > 0);
//     })
//   )
// );

//JsonStringtify + Json.parse
// let data = [
//   {
//     name: "babe",
//     old: 22,
//   },
// ];
// console.log(JSON.parse(JSON.stringify(data)));

//toUpperCase
// let arrStr = ["a", "b", "c", "d"];
// console.log(arrStr.toString().toUpperCase());

//fetch
// const data = fetch('https://www.google.com')
// console.log(data)

// let a = 6;
// for (let i = 0; i < a; i++) {
//   for (let j = 1; j < i; j++) {
//     console.log("*");
//   }
//   console.log("\n");
// }

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }
function myFunction1() {
  let x = document.getElementById("mySelect").value;
  document.getElementById("demo1").innerHTML = "You selected type : " + x;
}
