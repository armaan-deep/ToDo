let inp=document.querySelector(".inp");
let btn=document.querySelector(".addbtn");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(event){
    let newTask=document.createElement("li");
    let newtaskBtn=document.createElement("button");
    
    newtaskBtn.innerText="x";
    newtaskBtn.classList.add("delbtn")
    newTask.innerText=inp.value;
    
    ul.appendChild(newTask);
    newTask.appendChild(newtaskBtn);
    
    inp.value="";
    newtaskBtn.addEventListener("click",()=>
    {
      newtaskBtn.parentElement.remove(); 
    }); 
});