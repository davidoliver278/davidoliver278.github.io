var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random-btn");

function setGradient() {
       body.style.background = 
         "linear-gradient(to right, " 
         + color1.value 
         + ", " 
         + color2.value 
         + ")";
    css.textContent = body.style.background + ";";
}

function getRandomColor(){
    
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (i=0; i < 6; i++){
        
        color += letters[Math.floor(Math.random()* 16)];
    }
    
    var letters = "0123456789ABCDEF";
    var colorTwo = "#";
    for (i=0; i < 6; i++){
        
        colorTwo += letters[Math.floor(Math.random()* 16)];
    }
    
    color1.value = color;
    color2.value = colorTwo;
    
    body.style.background = 
         "linear-gradient(to right, " 
         + color1.value 
         + ", " 
         + color2.value 
         + ")";
    
     css.textContent = body.style.background + ";";
   
    
}

random.addEventListener("click", getRandomColor)



window.onload = function(){
     body.style.background = 
         "linear-gradient(to right, " 
         + color1.value 
         + ", " 
         + color2.value 
         + ")";
    css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient)

color2.addEventListener("input",setGradient)

