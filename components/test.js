const a =[{
    name:{
        school:"sagar",
        home:"anand",
        office:"guru"
    },
    
        class:{
            school:"sagar",
            home:"anand",
            office:"guru"
        },

        perform:{
            school:"sagar",
            home:"anand",
            office:"guru"
        },
    
        sum:{
            school:"sagar",
            home:"anand",
            office:"guru"
        },
        name:{
            school:"sagar",
            home:"anand",
            office:"guru"
        }
    }

]
const j ={
    name:{
        id: "sgar"
    }
}
const b=JSON.stringify(a); // object to json data
console.log(b)
b.map((item,index)=>(
    console.log(item, index)
))
// console.log(JSON.parse(b)); // json data to object
// const b ={
//     sudaha:{
//         id:1,
//         product:{
//             name:"realme",
//             price:4000,
//             category:"mobile"
//         }
//     }
// }
// console.log(b);