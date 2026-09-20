// console.log("Hello, World!");

// let customer={
//     name:"Thilini",
//     age :23,
//     address:"moragahahena",
//     items :["item1","item2","item3"],

//     father:{
//         name:"Dad",
//         age:50,
//         address:"Horana"
//     }

// }

// //to access fathers properties
// // console.log(customer.father.age);




// let customer2={
//     items:[
//         {
//             id:1,
//             name:"thilini",
//             variants:[
//                 {
//                 id:1,
//                 name:"dont",
//                 price:100
//                 }
//             ]
//         },
//         {
//             id:2,
//             name:"imeshika"
//         }
//     ]
// }

// console.log(customer2.items[1].id);



//DOM Manipulations(Document Object Model)


// document.write("<h2>hello world o2</h2>");
// console.log(document.title);
// //this is dom manipulation

// let heading = document.getElementById("heading");

//change the properties of the heading


console.log(document.title);

// function myFunction(){
//     console.log("button clicked");
//     heading.innerText="Imeshika" + i;
// }

let number = 0;
function increasevalue(){
  heading.innerText ="Thilini" + number++;
    console.log("Clicked");
    
}
function decreasevalue(){
  heading.innerText ="Thilini" + number--;
    
}