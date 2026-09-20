// console.log("Hello, World!");

let customer={
    name:"Thilini",
    age :23,
    address:"moragahahena",
    items :["item1","item2","item3"],

    father:{
        name:"Dad",
        age:50,
        address:"Horana"
    }

}

//to access fathers properties
console.log(customer.father.age);




let customer2={
    items:[
        {
            id:1,
            name:"thilini",
            variants:[
                {
                id:1,
                name:"dont",
                price:100
                }
            ]
        },
        {
            id:2,
            name:"imeshika"
        }
    ]
}

console.log(customer2.items[1].id);