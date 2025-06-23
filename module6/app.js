// const num=5;

// console.log(num);

// let n=2;
// n=3;
// n='value'
// console.log(n)

// const bng='bangladesh';

// const country=`my country is ${bng}`;

// console.log(country);

// const num=[1,2,3,4,5,6];


// console.log(...num);


// Distructuring array and object
// const parson={
//     name:'val',
//     age:12,
//     roll:20
// };

// const {name,age,roll}=parson

// console.log(age);

// const arr=['val',20,'bodahuat'];

// const [a,b,c]=arr;
// console.log(b);


// const sum=(num1,num2)=>{return num1+num2 };
// console.log(sum(20,30));


const prodect=[
    {id:1,name:'xiaomi',description:'this is xiaomi',price:500},
    {id:2,name:'oppo',description:'this is oppo',price:400},
    {id:3,name:'Iphone',description:'this is Iphone',price:1000},
    {id:4,name:'vivo',description:'this is vivo',price:600},
]

// for(let i=0;i<prodect.length;i++){
//     if(prodect[i].id==3)
//     { console.log(prodect[i]); }
// }

// const r=prodect.find(pd=> pd.name=='vivo');
// console.log(r);

// const r=prodect.filter(pd=> pd.color='green')
// console.log(r);

// const r=prodect.map(pd=>pd.price*2);
// console.log(r);

// const r=prodect.forEach(pd=>
// { console.log(pd.id)}
// );


// const num=[1,2,3,4,5,6,7,8,9,10];

// const oddeven=(arr)=>{
//     let even=[];
//     let odd=[];
//     for(let i=0;i<arr.length;i++)
//     {
//         const ele=arr[i];
//         if(ele%2==0)
//         { even.push(ele); }
//         else
//         { odd.push(ele); }
//     }
//     return even;
// };

// console.log(oddeven(num));

const frinds=['adf','valff','dfadf','adbdd','valee'];
const checkFriends=(arr)=>{
    let biggesname=arr[0];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element.length>biggesname.length)
        { biggesname=element; }
    }
    return biggesname;
}

console.log(checkFriends(frinds));