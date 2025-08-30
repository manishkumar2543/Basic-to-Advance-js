// function declaration💡

// function greet(){  📢
//     // fnc declaration
// }


// function dance(){
//     console.log("i am dancing")
// }
// // kitini baar bhi chla skte hai
// dance();
// dance();
// dance();

// agr hm variable me function ko save kr rahe to use hm function expression kehte hai
// let fnc=function(){
//     // fnc expression
//     console.log("i am expression function")
// }
// fnc();


// fat arrow function💡
// ()=>{
//     ye ek function hai📢
// }

// let fnc=()=>{
//     console.log("i am fat arrow function")

// }
// fnc();


// three major of function📢📢📢

// 1. function declaration 💡
// function fnc(){
//     // fun expression
// }
// 2. function expression 💡
// let fnc=function(){
//     // fun expression
// }

// 3. fat arrow function💡
// let fnc=()=>{
//     // fat arrow
// }


// function dance(v1){
//     console.log(`${v1} nach rha hai`)
// }
// dance("kuta");

// let dance=function(v1){
//     console.log(`${v1} nach rha hai`)
// }
// dance("chacha");
// dance("dada")

// fat arrow function💡
// let dance=(v1)=>{
//     console.log(`${v1} nach rha h`)
// }
// dance(`lion`);
// dance(`tiger`)
// dance(`cat`);
// dance(`dog`)

// function vs argument📢📢📢

// kuch aur example dekhte hai💡
// or ye jo fat arrow function ke barket me value di hai use parameter kehte hai.✔📢
// let add=(x,y)=>{
//     console.log(x+y);
// }
// add(5,4);
// add(10,20);   ye jo barket me value di hai use argument kehte hai📢📢📢


// default parameter📢📢📢
// let add=(x=3,y=1)=>{
//     console.log(x+y);

// }
// add();

// function add(x=2,y=3){
//     console.log(x+y);
// }
// add();

// let add=function(x=2,y=33){
//     console.log(x+y);
// }
// add();

// rest and spread parameter  📢 📢 📢
// .... rest and spread dono blte hai💡
//  note => jab arguments kai saare ho to use  utna hi parameter bannana padgea. isse-
// bachne ke liye rest use krte hai... agr ... function ke parameter space me lage to vo 
// rest operator hai. and agr wo array or object main lage to vo spread operator hai.🤷‍♀️


// function abc(...args){
//     console.log(args)
// }
// abc(1,2,3,4,5);

// let add=(a,b,c,...value)=>{
//     console.log(a,b,c,value)
// }
// add(1,2,3,4,5,6,1);

// let abc=function(a,b,c,...d){
//     console.log(a,b,c,d)
// }
// abc(1,2,3,4,5,5,6);

// Return value and early return. 📢 📢 📢
// Ex---- jaha se aaye ho vhi bhej denge jaise.

// function abc(){
//     return "hello world";
// }

// // 📢🤷argument ke chlte ye funtion chalaga to return ka vlue jo line number 132 me mtlb argument me jayega.
// to isko value ke under save kr lenge ✔✔✔💡
// let value =abc()
// console.log(value);

// function add(a,b){
//     return a+b;
// }
// // agr hm isko aise add(2,3);  krke call krnge to kuch nhi hoga isko vlae ke under save krna padega✔✔✔
// let sum=add(2,3);
// console.log(sum);

// function add(v){
//     return 5+v;

// }
//  let sum=add(5);
//  console.log(sum);

// let add=function(v){
//     return 4+v;
// }
// let sum=add(3);
// console.log(sum);

// let add=(v)=>{
//     return 3+v;
// }
// let sum=add(3);
// console.log(sum);

// first class functions (assgin to variables, pass as argument, return from function)📢 📢📢
// jaise ki functin me ek value bhejte hai to function ko bhi vlaue bna kar bhej skte hai.

// javascript me function ek value hai
// let abc=function(){ 

// }
// jab function ek value hai
// function abc(val){

// }
// abc(2);
 
// function abcd(val){
//     // or hm ya funtion ko call kr skte ahi
//     val();
// }
// // Tb hm function ko bhi vlaue bna kar bhej skte hai
// abcd(function(){
//     console.log("i am calle from adc function");
    
// });


// high order fuction 📢📢📢📢
// hof vo function hota hai jo return kre fucntion ya fir accpet kre ek fucntion apne parmeter me
// function abc(){
//     return function (){
//         console.log("High or fnc")

//     }
// }
// // pahla   abc() f ko chalne ke liye or dusra vla barket() function ko call krene ke liye
// abc()();


// Pure vs impure functions 📢 📢 📢
// pure function-  Aisa function jo bahr ke value ke na badle. 💡
// impure function - Asia function jo bahr ke value ke bdal de. 💡


// Pure funtion hai jo bahr ko value ko change nhi krega💡💡✔
// let a=2;
// function abc(){
//     console.log("pure function");
// }
// abc();


// Ye impure function hai ye change krega bahr ke value ko.💡✔
// let a = 20;
// function bc(){
//     a++;
//     console.log(a)
// }
// bc();

// closures and lexical scoping. 📢 📢 📢
// closures- ek function jo return kre ek aur function aur return hone vla fucntion use krega function 
// use krrega parent function ke variable ko.💡💡

// function abc() parent hai
// function abc(){
//     // ye parent ka variable hai
//     let a=2;
//     // return hone vla fucntion use krega hmesa parent function ke varibale ko.💡
//     return function(){
//         // or parent ko varible ko use iss function me khi khi krnege hi
//         console.log(a);

//     }
// }
// abc()();

// Lexical scoping 📢
//lexical scoping - function under function bante 

// global scope

// let a = 10; // global scope

// function outer() {
//     let b = 20; // outer function ka local scope

//     function inner() {
//         let c = 30; // inner function ka local scope
//         console.log(a); // 10 -> global variable
//         console.log(b); // 20 -> outer function ka variable
//         console.log(c); // 30 -> inner function ka variable
//     }

//     inner();
// }

// outer();

// let a= 2;
// function outer(){
//     let b=3;
//     function inner (){
//         let c=4;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     inner()
// }
// outer();

//  IIFE (Immediately invoke function expression) 📢 📢 📢
// IIFE - IIFE ek aisa function hai jo define hote hi turant execute ho jata hai.

// syntax: -👀
// (function(){
// //  code here
// }) ();

// (function(){
//      console.log("i am IIFE")
// }) ();

// (function(name){
//     console.log("hello " ,name)
// }) ("manish")


// Hosting difference between declaration and expression. 📢 📢 📢
// Hoisting - function bnne ke pahle sbse to hm call kr dete hai.
// Or ye function statement se hoga function expression se nhi hoga.


// abc();
// function abc(){
//     console.log("i am delclaration function")
// }


// error a jayega🏓🏓 not work expression function
// abc();
// let abc=function(){
//     console.log("i am expression function")
// }

//                           Solve Question and prctices  📢📢📢

//  1. what is different between function declaration and function expression in terms of hosting.
// solve-
//  ye chal jayga
// function greek(){
//     console.log("function declaration")
// }
// greek();


// abc();
// let abc=function(){
//     console.log("function expression")
// }

// fnc expression not work and fnc declaration work fine.

//2. Convert this function is arrow function. 

// function multiply(a,b){
//     return a*b;
// }
// let result=multiply(3,4);
// console.log(result);

// convert into arrow function
// let multiply=(a,b)=>{
//     return a*b;
// }
// let result=multiply(2,2);
// console.log(result);
 
// 3. identify parameter and argument.
 
// function ke age jo likha hota vo parameter hai
// function welcome(name){

//     console.log(name)
// }
// // ye apna argument hai
// welcome("Manish");

// 4. How many parameter does this function have and how many argument pass.

// three parameter hai 
// function demo(a,b,c){
//     console.log(a,b,c);
// }
// // Do argument pass hai
// demo(1,2)

// 5. pridict output this code.

// function sayHi(name="Guest"){
//     console.log("Hello",name)

// }
// sayHi();
// output- Hello Guest

// 6. what does the .... operator mean in parameter.

// function abc(a,b,c,...args){
//     console.log(a,b,c,args);
// }
// abc(1,2,3,4,5,6);

// 7. Use rest parameter to accept any number of score and return the total.

// function getScore(...scores){
//     let total=0;
//     scores.forEach(function(val){
//         total+=val;
//     })
//     return total
// }
// //  let sum =getScore(10,20,30,40,50)
// //  console.log(sum)
// console.log(getScore(10,20,30,40,50))

// 8. fix the function use a yearly return.
//  function checkAge(age){
//     if(age<18){
//         console.log("Too young")
//     }
//     else{
//         console.log("Allowed")
//     }
//  }
//  checkAge(12);

// function checkAge(age){
//     if(age<18) return "Too young";
//     return "Allowed";
// }
// console.log(checkAge(19));

// 9.what is the return value of this function.

// function f(){
//     return;
// }
// console.log(f());
// output- undefined

// 10. what dose it mean when we say "function are first class citizens".
//   function fnc(a){
//     a();
//   }
// fnc(()=>{
//     console.log("i am arrwo funtion")
// })

// function outer(){
//     return function inner(){
//         console.log("i am inner function")
//     }
  
// }
// let newFnc=outer();
// newFnc();//     type 1.
// outer()();    tpye 2.

// 11. Can you assign a function to a variable and then call it show how.
// let abc=function(){
//     console.log("i am function assign to variable")
// }
// abc();

// 12. Pass a function into another function and execute it inside.

// function abc(fnc){
//     fnc();
// }
// abc(function(){
//     console.log("another funtion executed")
// })

// 13. what is a high order function.

// function fnc(val){

//     // ye me high order function hai kyu parameter accept kr rha hai ek function.
//     console.log("i am high order function")
//     val();
// }
// fnc(function(){
//     console.log("i callback function")
// })

// 14. identify High order function.
// [1,2,3].map(function(val){
    
//     return x*2;
// });

// map apna high order function hai kyu function ko parameter ki taur accpet kr rha hai.✔
// function(val){ return val*2 } ye callback function hai.
// kyunki ye HOF ko diya gaya hai aur wo isse call karega)

// What is pure vs impure function.
// let total=0;
// function addTotal(num){
//     total+=num;
//     return total;
// }
// console.log(addTotal(5));
// console.log(addTotal(10));
// console.log(addTotal(15));   Ye ek impure function hai kyu ki bahr ke value ko change kr rha hai.

// 15.Convert the above function into a pure function.

// let total=0;
// function addTotal(num){
//     let newTotel=total;
//     newTotel+=num;
//     return total;
// }
// console.log(addTotal(5));
// console.log(addTotal(10));
// console.log(addTotal(15));
// Ye impure function hai ✅  kyu out same rah rha hai

// 16. what is Closure? when is it created?
// jab ek function return kr raha ho ek new function ko or jab under vala function kisi bahr vle 
//fucntion ka variable use krta hai to use closure kahte hai

// function abc(){
//     let a=2;
//    return function(){
//     console.log(a);
//    }
// }
// abc()();

// 17.

// function outer(){
//     let count=0;
//     return function(){
//         count++;
//         console.log(count)
//     }
// }
// let counter=outer();
// counter();
// counter();
// counter();
// counter();

// 18. convert this normal function into a IIFE.

// Normal function
// function abc(){
//     console.log("i am normal function")
// }
// abc();

// // convert into IIFE Fucntion
// (function greek(){
//     console.log("i am IIFE function")

// }) ();

// // 19. What is the use of IIFE?  Nme one  Real world use case.

// let shery=(function(){
//     let score=0;
//     return{
//         getScore: function(){
//             console.log(score);
//         },
//         setScore: function(val){
//             score=val;
//         },

//     };
// }) ();

// 20. What will be the output here and why?

// abc();
// let abc=function(){
//     console.log("i am function expression")
// }
// ouput- Error🏓


// abc();
// function abc(){
//     console.log("i am delclaration function")
// }


// abc();
// function abc(){
//     console.log("i am delclaration function")
// }
// output- i am delclaration function ✔✔

//                  Practice Set ✍✍✍

// 1. Write a BMI caculator .

// function bmi(weight, height){
//     return weight / (height*height)
// }
// console.log(bmi(65,1.7). toFixed(2))

// 2. Create a resuable discount calculato function.

// function discountCalculator(discount){
//     return function(price){
//         return price -(price*discount/100);
//     }
// }
// let discounter=discountCalculator(10);
// console.log(discounter(200))

// function discountCalculator(discount){
//     return function(price){
//         return price -(price*discount/100)
//     }
// }    
// let ten=discountCalculator(10);
// let twenty=discountCalculator(20);

// console.log(ten(1200))
// console.log(twenty(1200))


// function counter(){
//     // iska value increment hote jayega 1,2,3,4,.......
//     let count=0;
//     return function(){
//         // ye count ko increment kr rha hai 
//         count++;
//         return count;
//     }
// }
// let c= counter();
// console.log(c());
// console.log(c());
// console.log(c());

// 3. Create a pure function to transfrom a value.

// function double(val){
//     return val*2;
// }
// console.log(double(15))

// Use to IIFE to isolate variable.

// (function(){
//     const password="secret password";
//     console.log(password);
// }) ();
// isko hm function ke ander hi acces kr skte hai bahr nhi print kr skte hai.👈

                            // end👱‍♂️
















