const btn=document.querySelector('.btn');


btn.addEventListener('click',()=>{
    if(document.body.style.backgroundColor == "white"){
        document.body.style.backgroundColor = "black";
        btn.innerHTML="Click to Light";
    }
    else{
        document.body.style.backgroundColor = "white";
        btn.innerHTML="Click to Dark";
    }
})