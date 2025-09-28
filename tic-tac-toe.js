function setupBoard(){
    window.addEventListener('DOMContentLoaded', function(){
        
        let tiles = this.document.getElementById('board').getElementsByTagName('div');

        // Add square tiles classes to each div containers
        for(let i = 0; i<tiles.length; i++){
            tiles[i].classList.add('square');
            tiles[i].addEventListener('click', function(){
                tileClick(tiles[i], i);
            })

            // Hover effect
            tiles[i].addEventListener('mouseenter', function(){
                tiles[i].classList.add('hover');
            })
            tiles[i].addEventListener('mouseleave', function(){
                tiles[i].classList.remove('hover');
            })
        }
        
        // Add Eventlistener to new game button 
        const newgame_button = document.getElementsByTagName('button');
        newgame_button[0].addEventListener('click', function(){
            reset(tiles);
        });

    });
}


let curr_player = 1 // Keeps track of current player (1 or 2)
let game_state = [0, 0, 0, 0, 0 ,0, 0, 0, 0]; // Value of 1 assigned when an X is clicked, -1 otherwise.

function tileClick(tile, clickedTile){
    if (tile.textContent == "" && curr_player==1){ 
        tile.textContent = 'X'; 
        tile.classList.add('X');
        game_state[clickedTile] = 1; 
        checkState(game_state, curr_player);
        curr_player=2;
    }

    else if (tile.textContent == "" && curr_player==2){
        tile.textContent = 'O';
        tile.classList.add('O');
        game_state[clickedTile] = -1;
        checkState(game_state, curr_player);
        curr_player=1;
    }
    
    
}

/*
Checks for a 'win' by summing each row, column, diagonal direction. If sum = 3 (3 X's in a row) - player 1 wins, 
else if sum = -3 (3 O's in a row) - player 2 wins
*/
function checkState(state, player){
    //use a switch
    sum2win_p1 = 3; 
    sum2win_p2 = -3;

    // case where current player is 1
    if (player==1){
        switch(sum2win_p1){
            case (state[0] + state[1] + state[2]): // All X's for 1st row
                this.document.getElementById('status').textContent="Congratulations! X is the Winner!";
                this.document.getElementById('status').classList.add("you-won");
                break;
            case (state[3] + state[4] + state[5]): // All X's for 2nd row
                this.document.getElementById('status').textContent="Congratulations! X is the Winner!";
                this.document.getElementById('status').classList.add("you-won");
                break;
            case (state[6] + state[7] + state[8]): // All X's for 3rd row
                this.document.getElementById('status').textContent="Congratulations! X is the Winner!";
                this.document.getElementById('status').classList.add("you-won");
                break;
            case (state[0] + state[3] + state[6]): // All X's for 1st column
                this.document.getElementById('status').textContent="Congratulations! X is the Winner!";
                this.document.getElementById('status').classList.add("you-won");
                break;
            case (state[1] + state[4] + state[7]): // All X's for 2nd column
                this.document.getElementById('status').textContent="Congratulations! X is the Winner!";
                this.document.getElementById('status').classList.add("you-won");
                break;
            case (state[2] + state[5] + state[8]): // All X's for 3rd column
                this.document.getElementById('status').textContent="Congratulations! X is the Winner!";
                this.document.getElementById('status').classList.add("you-won");
                break;
            case (state[0] + state[4] + state[8]): // All X's for diagonal (top left - bottom right)
                this.document.getElementById('status').textContent="Congratulations! X is the Winner!";
                this.document.getElementById('status').classList.add("you-won");
                break;
            case (state[2] + state[4] + state[6]): // All X's for diagonal (top right - bottom left)
                this.document.getElementById('status').textContent="Congratulations! X is the Winner!";
                this.document.getElementById('status').classList.add("you-won");
                break;
            default:
                break;

        }
    }

    else{
        // case where current player is 2
        switch(sum2win_p2){
            case (state[0] + state[1] + state[2]): // All O's for 1st row
                this.document.getElementById('status').textContent="Congratulations! O is the Winner!";
                this.document.getElementById('status').classList.add("you-won");
                break;
            case (state[3] + state[4] + state[5]): // All O's for 2nd row
                this.document.getElementById('status').textContent="Congratulations! O is the Winner!";
                this.document.getElementById('status').classList.add("you-won");
                break;
            case (state[6] + state[7] + state[8]): // All O's for 3rd row
                this.document.getElementById('status').textContent="Congratulations! O is the Winner!";
                this.document.getElementById('status').classList.add("you-won");
                break;
            case (state[0] + state[3] + state[6]): // All O's for 1st column
                this.document.getElementById('status').textContent="Congratulations! O is the Winner!";
                this.document.getElementById('status').classList.add("you-won");
                break;
            case (state[1] + state[4] + state[7]): // All O's for 2nd column
                this.document.getElementById('status').textContent="Congratulations! O is the Winner!";
                this.document.getElementById('status').classList.add("you-won");
                break;
            case (state[2] + state[5] + state[8]): // All O's for 3rd column
                this.document.getElementById('status').textContent="Congratulations! O is the Winner!";
                this.document.getElementById('status').classList.add("you-won");
                break;
            case (state[0] + state[4] + state[8]): // All O's for diagonal (top left - bottom right)
                this.document.getElementById('status').textContent="Congratulations! O is the Winner!";
                this.document.getElementById('status').classList.add("you-won");
                break;
            case (state[2] + state[4] + state[6]): // All O's for diagonal (top right - bottom left)
                this.document.getElementById('status').textContent="Congratulations! O is the Winner!";
                this.document.getElementById('status').classList.add("you-won");
                break;
            default:
                break;

        }
    }
    

    
}


function reset(tile_squares){   
    // reset the status text
    this.document.getElementById('status').textContent="Move your mouse over a square and click to play an X or an O.";
    this.document.getElementById('status').classList.remove("you-won");

    // reset the textContent of the tiles to ""
    for(let i = 0; i<tile_squares.length; i++){
            tile_squares[i].textContent = "";
            tile_squares[i].classList.remove('X');
            tile_squares[i].classList.remove('O');

    }

    // reset game__state 
    game_state = [0,0,0,0,0,0,0,0,0]

    // reset default player back to 1
    curr_player=1;
}







function play(){
    setupBoard();
}


play()
