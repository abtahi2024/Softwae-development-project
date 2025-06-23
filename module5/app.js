var test='Hallo world';

// console.log( typeof test);
var a=10;
// console.log(typeof a);
var obj={
    name:'Abtahii',
};
// console.log(typeof obj)

var num='23.4';
// console.log(typeof parseInt(num),typeof parseFloat(num));


// var status='rain';
// if(status=='rain')
// {
//     console.log('go out said');
// }
// else
// {
//     console.log('Not out said')
// }

// var result = 60;

// if (result < 0) {
//   console.log("failed");
// } else if (result >= 0 && result < 40) {
//   console.log("tumi C grade paico");
// } else if (result >= 40 && result < 60) {
//   console.log("tumi B grade paico");
// } else if (result >= 60 && result < 70) {
//   console.log("tumi A- grade paico");
// } else {
//   console.log("invalid");
// }


var parson={
  hand:2,
  eye:2,
  hair:'dont know'
}

// console.log(parson);

var friend=['rohim',3,{ name:'value'} ];
// console.log(friend[2]);

friend.push(30)
friend.pop()
friend.unshift('gise')
friend.shift()
// console.log(friend)

// for(var i=0;i<friend.length;i++)
// {
//   var el=friend[i];
//   if(el=='rohim')
//   { console.log('YES'); }
//   else
//   { console.log('No')}
// }

// for(var i=20;i>=0;i--)
// { console.log(i); }

function sum(num1,num2){
  return num1+num2
}
console.log( sum(20,30));