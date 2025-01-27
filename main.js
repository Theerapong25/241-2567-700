// string , Number , boolean , Object , Array
/*
//String
let firstname = 'Ice';
const idcard = '1234';
console.log(firstname);

//Number 
let age =25;
let height = 5.9;

//Boolean
let isMarried  = false;
firstname = 'xxxx';
firstname = 'xxxx';
console.log('My name is ',firstname ,'and I am', age ,'year old.');
*/

/*
+ บวก      
- ลบ       
* คูณ       
/ หาร           
% หารเอาเศษ  
let number1 = '4';
let number2 = '8';

let result = number1 + number2;
console.log('new number is',result);//48 นำ 4 มาต่อเลข 8
*/

/* 
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
< น้อยกว่า 
>= มากกว่าหรือเท่ากับ
<= น้อยกว่าหรือเท่ากับ
*/
//let number1 = 5;
//let number2 = 5;
/*
let condition1 = number1 >= number2; // Boolean ตำที่ได้เป็น True หรือ False
console.log('result to condition is ',condition1);
*/
/*
// if - else condition
if(number1 != number2) { // เป็นเท็จจึงทำเงื่อนไขต่อไป
        console.log('this is if');
} else if (number1 == number2) {
    console.log('this is else if '); // เป็นจริงเลยเเสดงค่าออกไป
}else{ // ถ้าเป็นเท็จอีกจึงมาทำเงื่อนไขนี้
    console.log('this is else');
}
*/
/*
>= 80 เป็นเกรด A
>= 70 เป็นเกรด B
>= 60 เป็นเกรด C
>= 50 เป็นเกรด D
let score = prompt('Enter your score:'); //60
console.log('you score is'+ score);
if(score>=80){ // ถ้าเป็นจริงจะเเสดงเกรดออกไป
    console.log('you are grade A ');
}else if(score>= 70){//ถ้าเป็นเท็จจะมาทำเงื่อนไขนี้เเละต่อไปอีกถ้าเงื่อนไขนี้เป็นเท็จ
    console.log('you are grade B ');
}else if(score>= 60){
    console.log('you are grade C ');
}else if(score>= 50){
    console.log('you are grade D ');
}else{
    console.log('you are grade F ');
}
*/
/*
&& เเละ
|| หรือ
! not หรือ ไม่
let number1 = 5;
let number2 = 8;
//True || false = !(True) = false
let condition = number1 >= 3 || number2 >=10;
console.log('result of condition',condition)

let age = 30;
let gender = 'male'
// True && True = True
if (age >= 20 && gender == 'male'){
    console.log('You are male adult');
}
*/
/*
 let counter = 0;

 while (counter <= 10) { //True
      console.log('while loop');
      counter = counter +1 ;
 }
 for(let counter = 0; counter< 10; counter = counter+1){
    console.log('for loop')
 }
*/
// Array 
/*
let age1 = 20 ;
let age2 = 30 ;
let age3 = 40 ;
let age4 = 50 ;
console.log(age1,age2,age3,age4);
/*
let ages = [30,35,40];
console.log('new age',ages[2]);
console.log('age list',ages);
//1.เเทนที่ค่าเข้าไปใหม่ใน Array
ages = [45,50];
console.log('new age',ages);

//2.ต่อ array
ages.push(55);
console.log('new age',ages);
*/
/*
let ages = [30,35,40,45,50];
console.log(ages);
ages.sort();
console.log(ages);

let name_list = ['John','Bob','Alice','Mary']
name_list.push('Mike');
console.log(name_list.length);
console.log(name_list[0]);
for(let index = 0; index < name_list.length; index++){
    console.log('name list',name_list[index]);
}
*/
/*
let student = [{
    name: 'zz',
    age: 90,
    grade: 'A'
},{
    name: 'aa',
    age: 66,
    grade: 'B'
}];

student.pop()


for(let index =0; index < student.length; index++ ){
    console.log('Student number',(index+1));
    console.log('name',student[index].name);
    console.log('age',student[index].age);
    console.log('grade',student[index].grade);
}
*/
/*
let score1 = 50
let score2 = 90
let gardes ='' //ค่าว่าง
// ประกาศfunction ชื่อcalcuiateGrade ที่มีparameter เป็น score
function calcuiateGrade(score){
if(score >=80){
    grades = 'A'
} else if (score >= 70){
    grades = 'B'
}else if (score >= 60){
    grades = 'C'
}else if (score >= 50){
    grades = 'D'
}else {
    grades = 'F'
}
return gardes
}//เรียกใช้ function 
function calcuiateGrade(score){
    if(score >=80){
        grades = 'A'
    } else if (score >= 70){
        grades = 'B'
    }else if (score >= 60){
        grades = 'C'
    }else if (score >= 50){
        grades = 'D'
    }else {
        grades = 'F'
    }
    return gardes
}
let student1 = calcuiateGrade(score1)
let student2 = calcuiateGrade(score2)
console.log('garde',student1,student2)
*/
/*
let score = [10,20,30,40,50];
for(let index = 0; index < score.length; index++){
    console.log(score[index]);
}
/*
score[0]=score[0]*2;
score[1]=score[1]*2;
score[2]=score[2]*2;
score[3]=score[3]*2;
score[4]=score[4]*2;


score = score.map((s)=>{
    return s *2;
})

score.forEach((s)=>{
console.log('new score',s)    
})
*/
/*let score = [10,20,30,40];
//let newScortes = []

for(let index = 0; index , score.length; index++){
    console.log('Score',score[index]);
/*
    if(score[index] >= 30){
        newScortes.push(score[index]);
    }
}
newScortes.forEach((ns) => {
 console.log('New Score',ns);
})

}
let newScortes = score.filter((s) => {
   return s > 20;
})
newScortes.forEach((ns) => {
    console.log('New Score',ns);
})
*/
// ojects functions
let students = [
{
    name: 'John',
    score: 90,
    grade: 'A'
},
{
    name: 'Jane',
    score: 75,
    grade: 'B'
},
{
    name: 'Jim',
    score: 60,
    grade: 'C'
},
]
let student = students.find((s) => {
    if(s.name == "Jane"){
        return true
    }
})
let doublescore = students.map((s) =>{
    s.score = s.score*2
})
let heightscore_student = students.filter((s) =>{
    if(s.score > 80){
        return true
    }
})
console.log('student: ',student)
console.log('hight_student:',heightscore_student)