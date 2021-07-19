//1.
// let car_a = 120
// let car_b = 90
// let car_c = 40

// let total = car_a + car_b + car_c
// let result =(120 / total)*100
// console.log(`จำนวนรถ A : ${car_a} จากทั้งหมด ${total} คิดเป็น ${(car_a / total)*100 } %`)
// console.log(`จำนวนรถ B : ${car_b} จากทั้งหมด ${total} คิดเป็น ${(car_b / total)*100 } %`)
// console.log(`จำนวนรถ C : ${car_c} จากทั้งหมด ${total} คิดเป็น ${(car_c / total)*100 } %`)

//---------------------------------------------------------------------------------------

//3.
//3.1
// let a =1
// let b = 2
// let c= ''
// console.log(`a=${a}, b=${b}, c=${c}`)
// a += 0
// b= a+c
// console.log(typeof(a) , typeof(b))
// if (b===a) {
//     console.log("a equal b")
// }else{
//     console.log("something went wrong")
// }
//ผลลัพท์ที่ได้คือ something went wrong เพราะว่า บันทัดที่ 17 มันคือ a = a+0 ดังนั้นค่าที่ได้ก็ยังเป็น 1 type = number
//เเต่ b นั้นคือเอา 1 มาต่อท้ายด้วย '' ทำให้ type = string ดังนั้นเมื่อเอามาเช็ค if โดยใช้ === 3 ตัว
//หมายความการเช็คกรณีนี้จะเช็คในส่วนของค่าว่าตรงกันหรือไม่ เเละในส่วนของtype ของ attribute ที่เอามาเช็คว่าเป็น type เดียวกันหรือป่าว
//ดังนั้นผลที่ออกมาก็จะเป็น something went wrong เพราะ type คนละประเภทกัน

//3.2
// var square = function (n) {
//     return n*n
// }
// function square(n) {
//     return n*n
// }
// console.log(square(5))
//ผลลัพท์ที่ได้ เหมือนกัน คือจะ console log มาที่ผลลัพท์ = 25
//เพราะว่าการทำงานของfunction เหมือนกันทุกอย่างเเต่ต่างกันเเค่ อันเเรกจะมีตัวเเปรมารองรับเท่านั้น

//---------------------------------------------------------------------------------------

//4
// let n = 1 //เป็นค่าสมมุติจากโจทย์เท่านั้น
// let m = 5
// let result =0
// for (let i = n; i <= m; i++) {
//     console.log(result)
//     result += i
// }
// console.log(result)

//---------------------------------------------------------------------------------------

//5
// function getCountry() {
//   let country_Arr = [
//     { name: "Thailand", abbr: "TH", remark: "", regionId: 1 },
//     { name: "Singapore", abbr: "SG", remark: "This is SG", regionId: 1 },
//     { name: "United State", abbr: "US", remark: "", regionId: 7 },
//   ];
//   return country_Arr;
// }
// function getRegion() {
//   let region_Arr = [
//     { id: 1, name: "Asia" },
//     { id: 2, name: "South America" },
//     { id: 7, name: "North America" },
//   ];
//   return region_Arr;
// }

// let country = getCountry();
// let region = getRegion();
// let temp;
// let result = []
// for (let i = 0; i < country.length; i++) {
//   for (let j = 0; j < region.length; j++) {
//       if (country[i].regionId == region[j].id) {
//           tmp={
//               abbr : country[i].abbr,
//               country : region[j].name
//           }
//           result.push(tmp)
//       }
//   }
// }
// console.log(result);

//---------------------------------------------------------------------------------------

//6
// let input = selectGoldCoin([-2, -1, 3, 4, 6,7,10]); //ตัวอย่าง input ที่ส่งมาเป็น array อีกที

// function selectGoldCoin([a, b, c, d, e,f,g]) {
//   let total = [a, b, c, d, e,f,g];
//     let check = {
//         from : 1, //1 สมมติมาจากต่าที่รับมา req.body
//         to : 6, //6 สมมติมาจากต่าที่รับมา req.body
//         gold :0
//     }
//  let result = 0
//  for (let i = check.from-1; i < check.to; i++) {
    
//      result += total[i]
//      console.log(result)
//  }
//  console.log(result)
// }
