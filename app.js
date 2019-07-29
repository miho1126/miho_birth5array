// * 生年月日を入力したら生まれた日の曜日が出る

let birth = prompt('出生日の曜日は..')

let birthday = prompt('出生日の曜日は..')
function weekday(birthday){
  let date = new Date();
  let today = date.getFullYear() + ('0' + (date.getMonth() + 1)).slice(-2) + ('0' + date.getDate()).slice(-2);
  let weekday = '日月火水木金土'[date.getDay()];
console.log(weekday); 
} weekday(birthday)


// * 五次元配列

let h1d = [1,2,3]

let h2d = [
  [1,2,3],[4,5,6]
]

let h3d = [
  [
    [1,2,3],[4,5,6]
],
  [
    [7,8,9],[10,11,12]
  ]
];
 for( let h2d of h3d ){
   for(let h1d of h2d){
     for(let h of h1d){
       document.write(h)
     }
   }
 }

 let h4d = 
 [
   [
     [
       [1,2,3],[4,5,6]
     ],
     [
       [7,8,9],[10,11,12]
     ]
   ]
   [
     [
       [13,14,15],[16,17,18]
     ],
     [
       [19,20,21],[22,23,24]
     ]
   ]
 ];




//  let num = [0,1,2];
// console.log(num)

// let i = {
//   food:'ラーメン',
//   from:'沖縄',
//   age:'20'
// };
// console.log(i);
// console.log(i['food']);

// let i2 = {
//   food:'UFO',
//   from:'東京',
//   age:'30'
// }

// let is = [i,i2];
// console.log(is);
// console.log(is[0]);
// console.log(is[1]['age']);
// console.log(is[0].age);