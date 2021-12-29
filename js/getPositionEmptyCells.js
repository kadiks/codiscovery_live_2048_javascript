// @return [Position] 
// @type Position { col: Number, row: Number }
function getPositionEmptyCells(grid) {

    let emptyCells = [];

    for(let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for(let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
            if (grid[rowIndex][colIndex] === null) {
                emptyCells = [...emptyCells, {col: colIndex, row: rowIndex}];
            }
        }    
    }

    return emptyCells;
}

export default getPositionEmptyCells;