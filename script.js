// Array-------  📢
// useCase:-- array hm islye use karte hai kyu normal hm ek variable me ek hi value store kar
// but array me me multiple values store kar sakte hai 



// let arry=[22,23,24];
// console.log(arry[0])
         
        //   Index position Value 📢
// 22- zero index -0  👈
// 23- first index -1 👈 
// 24 - second index -2 👈

//  Modifying Array Elements 📢📢

// let array= [1,2,3,4,5];
// array[2]=10;
// console.log(array)
// output: [1,2,10,4,5]


            //   Push    -Add elements at the end of array 📢 📢 📢

            // let array=[1,2,3,4,5];
            // array.push(6000);
            // console.log(array);

        // POP   - Remove elements from the end of array. 📢 📢 📢

        // let array=[1,2,3,4,5];
        // array.pop();
        // console.log(array);
        
        // Shift  -Remove elements from the beginging of array.📢 📢 📢

        // let array=[1,2,3,4,5];
        // array.shift();
        // console.log(array); 

        // Unshift -- Add elements to the begining of array.📢 📢 📢
        // let arry=[1,2,3,4,5];
        // arry.unshift(0);
        // console.log(arry);

        // Splice  - Add/Remove elements from array.📢📢📢
        // let array=[1,2,3,4,5];
        // array.splice(2,2);
        // console.log(array);

        // splice -(index,deleteCount )


        // Slice - Create a new array from a given array.📢📢📢
        // let array=[1,2,3,4,5];
        // let newArray=array.slice(1,3);
        // console.log(newArray);


        // Reverse -Reverse the order of elements in an array.📢📢📢
        // let array=[1,2,3,4,5];
        // array.reverse();
        // console.log(array);

        // Sort - sort elements in arrray in ascending order ya descending order.📢📢📢
        // or ye hmesha function accpet krta hai 👈


        // Ascending order✍
        // let array=[1,23,33,34,5];
        // array.sort(function(a,b){
        //         return a-b;
        // });
        // console.log(array);

        // Descending Order✍
        // let array=[22,44,11,55];
        // array.sort(function(a,b){
        //         return b-a;
        // })
        // console.log(array);
         

                        //      ForEach Loop -   literating over array elements.���
                        // forEach kya krta har ek element ke liye function ko chlta hai.✍
        

                // let array=[1,2,3,4,5];
                // array.forEach(function(value){
                //         console.log(value)
                // })

                // add all elements five.👈

        // let array=[1,2,3,4,5];
        // array.forEach(function(value){
        //         console.log(value +5);
        // })
         
                        //   Map array elements.������

        // Map sirf tab use krna hai jab apko ek naya array bnana hai puchle array ke data base pr.✍
        // jab apko aisa case dikh jayega jaha pr  ek array se nya array bnnega and wo naya array✍
        // kuch value rakhega tb map lagega.
        
        // Important Point :-  short, map , filter , forEach  sb funtion accept krta hai.💡
        // map dikhe sath ek me ek blank array bnna liya kro.💡

//        let array=[1,2,3,4,5];
//        let newArray=array.map(function(value){
//                 return 10;
//        })
//        console.log(newArray);

        // let array=[9,10,4,11,12];
        // let newArray=array.filter(function(value){
        //         if(value > 10) return value;
        // })
        // console.log(newArray);


                        //   Filter - filtering array elements.������
                        // or ye bilkil map ki trah hai.

        // let array=[1,2,3,4,5,6,7,8,9,10];
        // let newArray=array.filter(function(value){
        //         if(value > 4) return true;
        // })
        // console.log(newArray)

        //   Find - Find an element in an array.������
        // let array=[1,2,3,4,5];
        // let reuslt=array.filter(function(value){
        //         return value === 3;

        // })
        // console.log(reuslt)


        //  Reduce📢📢

        // let array=[1,2,3,4,5];
        // let newArray=array.reduce(function(accumulator,value){
        //         return accumulator + value
        // },0)      
        // console.log(newArray);

        // Work-Example: ----💡
        // accumulator= iske jagh hm kuch bhi de skte hai but yhi nam hota h.
        // accumulator = 0 value jo function ke last me diye hai.
        // value= 1
        // accumulator=1
        // value= 2
        // accumlator=1+2=3 ais hi hoga or accumlator apna value yad rakhta hai.

        //    Find ---  📢 📢 📢

        // let arr= [
        //         {id :1, key :1},
        //         {id :2, key:2},
        //         {id :3, key:3},
        // ];
        // let va=arr.find(function(val){
        //         return val.key===1;
        // })
        // console.log(va);

        // Some  📢 📢 📢

        // let arr=[90,32,43,50];
        // let v=arr.some(function(val){
        //         return val > 85 ;
        // })
        // console.log(v)
        // agr ek bhhi ho hoga to true print hoga nhi hoga to false

        // Every 📢 📢 📢 
        // agr saare number bde hai to ture print hoga nhi to false.
        // let arr=[200,90,100,500];
        // let v=arr.every(function(val){
        //         return val > 85;
        // })
        // console.log(v)

        // Destucting Array Elements ������📢

        // let array=[1,2,3,4,5];
        // let [a , ,b,c,...rest]=array;
        // console.log(a,b,c,rest);

        // let array=[1,2,3,4,5];
        // let [a,b, , c]=array;
        // console.log(a,b,c);
       
        //  Spread 📢📢

        // let arr=[1,2,3,4,5];
        // // agr hm arr2 me kuch change kiye to arr me kuch change nhi hoga💡
        // let arr2=[...arr];
        // arr2.pop();
        // console.log(arr,arr2);
        // output: [1,2,3,4,5] [1,2,3,4] 👈


                        //     Questions ✍✍✍

// 1. Create an array with 3 fruits and print the second fruit.

// let fruits=["apple","banana","orange"];
// console.log(fruits[1]);

// 2. Add "mango" at the end and pinapple at the beginning of this aarray.

// let fruits=["apple", "banana", "orange"];
// fruits.push("mango");
// fruits.unshift("pinapple");
// console.log(fruits);

// output: ["pinapple", "apple", "banana", "orange", "mango"]👈

// 3. Replace "Banana" with "Kiwi" in the array above .

// let fruits=["apple","banana"];
// fruits.pop();
// fruits.push("kiwi");
// console.log(fruits);

// output: ["apple", "kiwi"] 👈

// 4. Remove the last items from this array using  a method.
// let arr=[1,2,3,4,5];
// arr.pop();
// console.log(arr)

// output: [1,2,3,4] 👈

// 4. Insert "red" and "Blue" at index 1 in this array.

// let colours=["yellow", "green", "black"];
// colours.splice(1, 0, "red", "blue");
// console.log(colours);


// 5. Extract only the middle 3 elements from this array.

// let items=[1,2,3,4,5,6];
// let arr=items.slice(1,5)
// console.log(arr);

// 6. Sort this array alphgabetically and then reverse it.

// let names=["Mary","John","Bob","Manish","EMMA"];
// names.sort().reverse();
// console.log(names);

// ouput: ["Mary", "Manish", "EMMA", "John", "Bob"] 👈

// 7. Use .map() to square each number.

// let numbers=[1,2,3,4,5];
// let squareNumbers=numbers.map(function(val){
//         return val*val;
// })
// console.log(squareNumbers);

// 8. Use.filter()  to keep number greater than 10.

// let arr=[2,4,12,60,9];
// let newArray=arr.filter((val)=>{
//         return val > 10;
// })
// console.log(newArray);

// 9. Use.reduce() to find the sum of this array.

// let numbers=[10,20,30,40];
// let sum=numbers.reduce((acc,value)=>{
//         return acc + value;
// },0)
// console.log(sum)


// 10. Use .find() to get the first number less then 10.

// let arr=[12,15,3,8,20];
// let newArray=arr.find((val)=>{
//         return val < 10;
// });
// console.log(newArray);

// 11.  Use .some() to check if any student has scored below 35.

// let scored=[20,40,50,80];
// let reuslt=scored.some((val)=>{
//         return val < 35;
// })
// console.log(reuslt);
// some :- some ke mtlb koe bhi 35 se km laya h to true print karega.
// output: true ��💡💡


// 12. Use .every() to check if all number in even.

// let numbers=[2,4,6,8,10];
// let result=numbers.every((val)=>{
//         return val % 2 ===0;
// })
// console.log(result)

// 13. Destructuring this array to get firstName and lastName.

// let fullName=["Manish","kumar"];
// let [firstName, lastName]=fullName;
// console.log(firstName, lastName);
// console.log(firstName);

// 14. Merge two arrays using spread operator.

// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let mergeArray=[...arr1,...arr2];
// console.log(mergeArray);

// 15. Add "India" to start of this array using spread operator.

// let conturies=["USA", "UK", "Canada"];
// conturies=["India",...conturies];
// console.log(conturies);
// output: ["India", "USA", "UK", "Canada"] ��>👈

// 16. Clone this array porperly (not by reference).

// let arr=[1,2,3,4,5];
// let cloneArray=[...arr];
// // cloneArray.pop();
// console.log(arr,cloneArray);




// let array=[1,2,3,4,5];
// let newArray=array.reduce(function(accumulator,valure){
//         return accumulator + valure

// },0)
// console.log(newArray);

// let arr=[1,2,3,4,5];
// let sum=0;
// for(let i=0; i<arr.length; i++){
//         sum+=arr[i];
// }
// console.log(sum);

// let array=[1,2,3,4,5];
// let sum=0;
// array.forEach(function(value){
// sum+=value;
// });
// console.log(sum);


// let array=[1,2,3,4,5];
// let newArray=array.map(function(){
//         return 2;
// })
// console.log(newArray);




// Ek array lo [10,20,30,40,50] aur sabse bada number find karo.

// let arr=[10,4,55,10];
// let max=0;
// arr.forEach(function(value){
//         if(value > max)
//                 max=value;
//         return value
// })
// console.log(max);

// let arr=[100,200,300,400,500];
// let max=0;
// for(let i= 0; i<arr.length; i++){
//         if(arr[i] > max)
//                 max=arr[i];
// }
// console.log(max)



// let arr=[10,20,30,40,50];
// let small;
// arr.forEach(function(val){
//         if(val > small)
//                 small=val;
//         return val;

// })
// console.log(small);

// Ek array lo [10,20,5,40,3] aur sabse chhota number find karo.
let arr=[10,]






        





