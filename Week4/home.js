// console.log("Week 4 - Hello World");

// Document Object Model

let x  = document.getElementById("Greeting").innerHTML;
x = 'Hi';
console.log(x);

// Task
// Get all instances of <p>

let j = document.getElementsByTagName('p');
console.log(j);

for (para of j){
    // console.log(para.innerHTML)
    para.innerHTML = "BOOYAH";
}