let string="";
let buttons=document.querySelectorAll(".button");
let clear=document.querySelector(".double");
let pi=document.querySelector(".pi");
let message=document.querySelector(".display textarea");

buttons.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        if(e.target.innerText=='x')
        {
            string+='*';
        }
        else if(e.target.innerText=='=')
        {
             string=eval(string);
        }
        else{
            string+=e.target.innerText;
          
        }
        message.innerHTML=string;
        
    })
  

})
pi.addEventListener("click",()=>{
    string+=3.141;
    message.innerHTML=string;
})
clear.addEventListener("click",()=>{
    string="";
    message.innerHTML=string;
})