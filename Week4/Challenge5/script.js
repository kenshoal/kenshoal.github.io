function generate_board() {

    //============================================================================
    // Task 1
    // Retrieve the friend name(s) from the 'friends' multi-select dropdown menu
    //============================================================================

    // Array to contain the names of user-selected friend(s)
    // For example, if the user selected 'Darryl' and 'Yin Kit',
    //   this array's value will be:
    //      [ 'darryl', 'yinkit' ]
    //
    let friends = []; // Initialize to empty


    // YOUR CODE GOES HERE
    let opt = document.getElementsByTagName('option');
    for (option of opt){
        if (option.selected){
            friends.push(option.value);
        }
    }
    console.log(opt);

    // Display user's selection in Developer Tools --> Console.
    console.log(friends);



    //============================================================================
    // Task 2
    // Given one or more selected friends and given 4 fruit names,
    //   generate a 'randomized' Array of finalized card names.
    // 
    // Card names are as follows:
    //    apple_brandon.png
    //    banana_brandon.png
    //    kiwi_brandon.png
    //    orange_brandon.png
    //
    // where 'brandon' can be replaced with another friend's name,
    // e.g.
    //    apple_nick.png
    // (and so on)
    //
    // Display all 4 fruit cards of one or more selected friends.
    //
    // NOTE: Each card must be displayed TWO and ONLY TWO times (thus, a "pair")
    //       (such that the user can attempt to 'match').
    //
    // Check out this utility function (declared at the bottom of this file)
    //   for randomizing the order of Array elements.
    //        shuffleArray()
    //============================================================================
    const fruits = [ 'apple', 'banana', 'kiwi', 'orange' ];

    // YOUR CODE GOES HERE
    let fin = [];
    for (friend of friends){
        for (i = 0;i<2;i++){
            for (fruit of fruits){
                fin.push(fruit+"_"+friend+".png");
            }
        }
    }



    //============================================================================
    // Task 3
    // Display the cards in <div id="game-board">
    //
    // For this, we will make use of Template Literal (using backticks).
    //
    // NOTE: The game board will always have 4 columns and N rows, where N denotes
    //       (number of selected friends) x 2.
    //
    //       For example, if I chose 'Brandon', 'Darryl', and 'Nick' (3 friends),
    //         then the newly generated game board will be
    //         6 (rows) by 4 (columns).
    //============================================================================
    const num_cols = fruits.length;
    const num_rows = friends.length * 2;

    console.log("# of columns: " + num_cols)
    console.log("# of rows: " + num_rows);


    // YOUR CODE GOES HERE

    // You will need to rewrite the value of this result_str (String).
    let shuffled = shuffleArray(fin);
    console.log(shuffled);
    let result_str = "";
    let count = 0;
    let arr = [];
    for(i = 0;i<num_rows;i++){
        partial = '<div class = "row">'
        for(j = 0;j< num_cols;j++){
        count = i*4+j;
        let nam = shuffled[count].split('.')[0];
        console.log(nam);
        if(arr.includes(nam +"1")){
            arr.push(nam+"2")
            var id = nam + "2";
        }
        else{
            arr.push(nam+"1")
            var id= nam + "1"
        }
        let temp = "<div class = 'col' style='padding: 4px;' ><img onclick = 'game(this)' name ="+nam+" id ="+id + "  src = 'cards/hidden.png"+"'></img></div>";
        partial += temp;      
        }
        partial+="</div>";
        result_str += partial;
    }


    // DO NOT MODIFY THE FOLLOWING
    // Replace the innerHTML of <div id="game-board">
    //   with a newly prepared HTML string (result_str).
    document.getElementById('game-board').innerHTML = result_str;
 
    // while (score<fruits.length*friends.length){
    //     var a = false;
    //     var b = false;
        
    //     var a = document.getElementsByTagName('img').addEventListener('onclick');
    // }
    
}
let cnt = 0;
let score = 0;
let firstCard = null;
let secondCard = null;

function game(img_element){
    let tmp = img_element.id;
    let name = tmp.slice(0,-1);

    img_element.src = "cards/" + name + ".png"; 

    if (!firstCard) {
        firstCard = tmp;
    } else if (!secondCard && tmp !== firstCard) {
        secondCard = tmp;
        cnt = 2;


        if (firstCard.slice(0,-1) === secondCard.slice(0,-1)) {

                document.getElementById(firstCard).style.opacity = "0.5";
                document.getElementById(secondCard).style.opacity = "0.5";
                score++;
                document.getElementById('score').innerText = "Total Score: " + score;
                firstCard = null;
                secondCard = null;
                cnt = 0;
            }
        else {
            setTimeout(() => {
                document.getElementById(firstCard).src = "cards/hidden.png";
                document.getElementById(secondCard).src = "cards/hidden.png";
                firstCard = null;
                secondCard = null;
                cnt = 0;
            }, 2000);
        }
    }
    const fruits = [ 'apple', 'banana', 'kiwi', 'orange' ];
    let friends = []; // Initialize to empty


    // YOUR CODE GOES HERE
    let opt = document.getElementsByTagName('option');
    for (option of opt){
        if (option.selected){
            friends.push(option.value);
        }
    }
    const num_cols = fruits.length;
    const num_rows = friends.length * 2;
    if(score<num_cols*num_rows){
    document.getElementById('score').innerText = "Total Score: " + score;}
    else{
        document.getElementById('score').innerText = "All matched, congratulations!"; 
    }
}


// Utility Function
// DO NOT MODIFY
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}