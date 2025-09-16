function calculate() {

    // YOUR CODE GOES HERE
    var x =Number(document.getElementById('number1').value);
    var y = Number(document.getElementById('number2').value);
    let s = 0;
    for (j = x;j<=y;j++){
        s = s+j;
    }
    document.getElementById('result').innerHTML ="The sum is: "+ s;
    
}