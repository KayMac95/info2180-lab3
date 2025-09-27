function setupBoard(){
    window.addEventListener('DOMContentLoaded', function(){
        
        const tiles = this.document.getElementById('board').getElementsByTagName('div');

        for(let i = 0; i<tiles.length; i++){
            tiles[i].classList.add('square');
        }  

    });
}


setupBoard()