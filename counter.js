let count=0;
const val=document.getElementById("text");
const inc=document.getElementById("btn-inc");
const dec=document.getElementById("btn-dec");
const reset=document.getElementById("btn-reset");
inc.addEventListener("click",function(){
count=count+1;
val.innerHTML=count;
if(count>0)
val.style.color='rgb(234, 110, 247)';
console.log(count);
});
dec.addEventListener("click",function(){
    count=count-1;
    val.textContent=count;
    if(count<0)
val.style.color='rgb(102, 221, 237)';
    console.log(count);
    });
reset.addEventListener("click",function(){
        count=0;
        val.textContent=count;
        console.log(count);
        });
