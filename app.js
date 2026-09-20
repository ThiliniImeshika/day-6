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

// let number = 0;
// function increasevalue(){
//   heading.innerText ="Thilini" + ++number;
//     console.log("Clicked");
    
// }
// function decreasevalue(){
//   heading.innerText ="Thilini" + --number;
    
// }

function btnSumOnAction01(){


    let n1 =document.getElementById("inputText01").value;
    let n2 =document.getElementById("inputText02").value;

    //we should convert this to number
    //let sum =n1 + n2;

    let sum=parseInt(n1) + parseInt(n2);

    console.log(n1);
    console.log(n2);
    console.log(sum);

    document.getElementById("heading").innerText="sum:" +sum;

}

function btnSumOnAction02(){
    console.log("hii");

    let n1 =document.getElementById("inputText01").value;
    let n2 =document.getElementById("inputText02").value;

    //we should convert this to number
    //let sum =n1 + n2;

    let minus=parseInt(n1) - parseInt(n2);

    console.log(n1);
    console.log(n2);
    console.log(minus);

    document.getElementById("heading").innerText="minus:" +minus;

}