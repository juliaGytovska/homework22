 //task 1
let boys=["Mike", "Nikola","Tom"] 
 console.log(boys[2])

 boys.splice(1,1,"Alex")
  
 boys.splice(0,2)

 console.log(boys.length); 

 //task 2
 let a=[5,3,-4,25,32,-16,6]
 let b=[21,-30,9,5,12,-19,5,25]
 function calc(a, b) {
    const numb1 = a.reduce((acc, val) => acc + val, 0);
    const numb2 = b.reduce((acc, val) => acc + val, 0);
    
    if (numb1> numb2) {
      console.log("a > b");
    } else if (numb1< numb2) {
      console.log("a < b");
    } else {
      console.log("a == b");
    }
  }

  //task3
  let phrase="i am learning javascript right now";
  let word = phrase.split(" ");
console.log(word);

//task4
 
 let aa=[5,3,8,5,3,2,1,2]
 let bb=[]
 let one = new Set(aa); 
one.forEach(function(element) {
  bb.push(element); 
});
console.log(bb);
 

 
 
 //task 5
 let users=[
    {id:1, age:17},
    {id:3, age:19},
    {id:2, age:18},     
    {id:4, age:21},
    {id:5, age:17},
    {id:6, age:20},
    {id:7, age:25}, 
]

 const result = users.filter(({age }) => age >18 && age < 21 );
 let ids = result.map(user=> user.id);
 console.log(ids);

