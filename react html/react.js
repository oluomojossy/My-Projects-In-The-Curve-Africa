// Task 1

let car = {
    Brand: "Toyota",
    Model: "Corolla",
    Year: 2008,

}
console.log(car)
// Task 2
let anyName={
    add: "a+b",
    sub:"a-b",

    addSub:function(a,b){
        return(a+b, a-b)
    }
}
addSub2=anyName.addSub(6,5)
console.log(addSub2)
// Task 3
let choppingCart= {
    items: [],
    addItem: function(item){
        item.push(item);
    },
    totalItems: function(){
        return(this.items.length)
    }
}

array=choppingCart.items["beans", "yam"]
console.log(array)





 





// let number= {
//     mutiply: function(a,b){
//         return(a*b)
//     }
    
// }
// mutiply2=number.mutiply(5,6)
// console.log(mutiply2)


