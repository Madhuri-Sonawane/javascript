 // aply 10% offer on each value and print offer value instead of these value
 let items=[250,645,300,900,50];

 //by using for of loop
//console.log("by using for of loop");

 let i=0;
for(let val of items){
    console.log(`${i} : ${val} `);
    let offer =val/10;
    items[i] = items[i] - offer;
    console.log(`value after offer: ${items[i]}`);
    i++;
}

//by usinng for loop

console.log("by using for loop");

let prices=[250,645,300,900,50];

for(let i=0; i< prices.length;i++){
   
    let offer= prices[i]/10;
    prices[i]-=offer;
    console.log(`price after offer ${prices[i]}`);
}