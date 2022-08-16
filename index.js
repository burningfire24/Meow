const x=document.getElementById("totalcounter");
const y=document.getElementById("Remaining");

const meowtext = document.getElementById("write");


meowtext.addEventListener("keyup",()=>{
    updatecount();  
})

updatecount();
function updatecount(){
    x.innerText=meowtext.value.length;
    y.innerText=meowtext.getAttribute("maxLength")-x.innerText;
}
