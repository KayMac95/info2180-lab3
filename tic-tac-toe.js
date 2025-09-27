function setupBoard(){
    window.addEventListener('DOMContentLoaded', function(){
        
        var tiles = this.document.getElementById('board').getElementsByTagName('div');

        //Add square tiles classes to each div containers
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

    });
}


var curr_player = 1 // Keeps track of current player (1 or 2)
var game_state = [0, 0, 0, 0, 0 ,0, 0, 0, 0];

function tileClick(tile, clickedTile){
    if (tile.textContent == "" && curr_player==1){ 
        tile.textContent = 'X'; 
        game_state[clickedTile] = 1; 
        console.log('Tile clicked!: ', clickedTile);
        curr_player=2;
    }

    else if (tile.textContent == "" && curr_player==2){
        tile.textContent = 'O';
        game_state[clickedTile] = 1;
        console.log('Tile clicked!: ', clickedTile);
        curr_player = 1;
    }
    
    
}

function Play(){
    setupBoard();
}


Play()
