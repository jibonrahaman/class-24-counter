let counter=document.querySelectorAll(`.counter`)
// console.log(counter.dataset.number);
console.log(counter);

let arr=Array.from(counter);
console.log(arr);

arr.map((item)=>{
    console.log(item);

    let count=0;

function increement(){
    count++
   console.log(count);
   item.innerHTML=count;
    if(item.dataset.number==count){
        clearInterval(stop)
    }
}
let stop=setInterval(function(){
    increement()
},100/ item.dataset.number)
})





