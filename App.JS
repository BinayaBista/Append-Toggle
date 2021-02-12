//first create the color array
//get button
//add event listener 


var elem = document.querySelector("#container");
let button = document.getElementById('btn'),
    color = ['Green', 'Purple', 'Blue'];
    i = 0;

 button.addEventListener ('click', function() {
     document.body.style.backgroundColor = color[i];
     i = (i + 1)% color.length


     var pElement = document.createElement ('p');
console.log(pElement);
var pText = document.createTextNode ("Color Changed");
pElement.appendChild(pText);

elem.appendChild(pElement);
   

 });
 
