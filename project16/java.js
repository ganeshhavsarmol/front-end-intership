// TASK 1 NAME INITIALS GENERATOR


// let str = "Ganesh Avsarmol"
// function initial(name){
//     let nameArr = name.split(" ");
//     let newStr = ""
//     for(let i=0;i<nameArr.length;i++){
//         newStr = newStr + nameArr[i][0]
//     }
//     return newStr
// }

// console.log(initial(str))



// TASK 2  Lucky Number Checker

// let num = 8;
//  function numberSqaure(num){
//     console.log(Math.sqrt(num));
//     console.log(Math.pow(num,3));
//     console.log(Math.pow(num,2));
    
// if(num%2==0){
//     console.log("even");
    
// }
// else{
//     console.log("odd");
    
// }
//  }

//  numberSqaure(num)



// TASK 3  DAYS LEFT IN THE WEEK
 

// const date= new Date();
// console.log(date.getDay());
// if(
//     date
// )

 

// function daysLeft() {

//   let today = new Date().getDay();

//   let left = 7 - today;

//   console.log(left + " days left until Sunday.");

// }

// daysLeft();





// Task 4: Product Search

// let product = ["keyboard" , "laptop" ,"Mouse"]

// function item(product){
// if (product.includes("Mouse")) {
//   console.log("Product Found");  
// }
// else { console.log(" Product not Found ");}
// }

// item(product)


// let  title = "the dark knight"

// function sahil(title){
//   let name = title.split(" ")
// let str = "" 
// name.map((item,index)=>{
   
//     str = str +" "+ item.replace(item[0],item[0].toUpperCase())
// })
//   console.log(str);
  
// }
// sahil(title)


// let marks = [45,78,60,91];

// function mark(marks){
// console.log(Math.max(...marks));
// console.log(Math.min(...marks));
// let avg =(45+78+60+91)/5;
// console.log(avg);

// }
// mark(marks)



// TASK 7


// let arr = ["Rahul","Anam","Rahul","Sneha","Anam"]
// function str(arr){
// console.log([...new Set(arr)]);
// }
// str(arr)

// TASK 8/


// let name = "Shaikh Sahil";
// let birthYear = 2006;
// function userName(name,birthYear){
// let splitArr = name.split(" ");

// return splitArr[1].toLowerCase() + birthYear
// }
// console.log(userName(name,birthYear));


// TASK 9
// let arr = [200, 900, 500, 3500]
// let discount = 0
// function bill(arr) {
//   let total = arr.reduce((a, b) => a + b, 0);
 
// if (total > 5000) {
//     discount = total * 10 / 100;
//   } else {
//     discount = 0;
//   }
//   console.log("Total:", total);
//   console.log("Discount:", discount);
//   console.log("Final:", total - discount);
// }

// bill(arr);

// TASK 10/

 
// let total =100
// let attendence = 50%
// function ganesh(total,attendence){
// if (attendence/total * 100 >=75){
//     console.log("");

 
//  }
// else{
//     console.log( " Not Eligiable to Exam");
    
// }
// } 
// ganesh(total,attendence)