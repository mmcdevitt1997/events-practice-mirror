

//  let inputTarget = document.getElementById('#message')
document.querySelector('#message').addEventListener("keyup" , function(content){
   let red = document.querySelector("#red"); 
   let green = document.querySelector("#green");
   green.innerHTML= content.target.value
   red.innerHTML = content.target.value
});

