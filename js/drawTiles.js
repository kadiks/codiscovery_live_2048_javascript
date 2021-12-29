function drawTiles(grid) {
    for(let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for(let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
            drawTile();
        }    
    }
}

function drawTile() {
    const divEl = document.createElement('div');
    divEl.classList.add('tile');
    document.querySelector('.grid').append(divEl);
}

export default drawTiles;