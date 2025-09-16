// Task 1
// Add an event listner to the button (the user drags his mouse over the button)
document.getElementById('justin-btn').addEventListener("mouseover",func)
document.getElementById('justin-btn').addEventListener("mouseout",func2)
function func(){
    document.getElementById('result').style.backgroundColor = 'Pink';
    document.getElementById('result').innerText = 'Welcome to my heart.';
    document.getElementById('result').style.color = 'blue';
}
function func2(){
    document.getElementById('result').style.backgroundColor = 'Black';
    document.getElementById('result').innerText = 'Dont leave my heart';
    document.getElementById('result').style.color = 'red';
}

// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)
