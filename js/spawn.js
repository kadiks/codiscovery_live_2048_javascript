import getPositionEmptyCells from './getPositionEmptyCells.js';
import addCell from './addCell.js';

function spawn(cellNum, grid) {
    
    
    // Choose N random numbers
    const numbers = [...Array(cellNum)].map(getRandomStartNumber);
    console.log("🚀 ~ file: spawn.js ~ line 7 ~ spawn ~ numbers", numbers);
    
    // Choose N random empty position on grid
    const emptyCells = getPositionEmptyCells(grid);
    const selectedCells = getRandomEmptyCells(cellNum, emptyCells);

    selectedCells.forEach((cellPosition, index) => {
        // Insert numbers in grid at specific position
        grid[cellPosition.row][cellPosition.col] = numbers[index];
        // Insert cell in HTML grid
        addCell(cellPosition, numbers[index]);
    });    
}

function getRandomEmptyCells(cellNum = 2, cellPositions) {
    console.log("🚀 ~ file: spawn.js ~ line 22 ~ getRandomEmptyCells ~ cellPositions", cellPositions)
    let selectedIndexCells = [];
    let selectedCells = [];

    while(selectedIndexCells.length < cellNum) {
        console.log("🚀 ~ file: spawn.js ~ line 26 ~ getRandomEmptyCells ~ cellNum", cellNum)
        console.log("🚀 ~ file: spawn.js ~ line 26 ~ getRandomEmptyCells ~ selectedIndexCells", selectedIndexCells)
        const rand = Math.floor(Math.random() * cellPositions.length);
        if (!selectedIndexCells.includes(rand)) {
            selectedIndexCells = [...selectedIndexCells, rand];
        }
    }



    for (const indexCell of selectedIndexCells) {
        console.log("🚀 ~ file: spawn.js ~ line 38 ~ getRandomEmptyCells ~ indexCell", indexCell)
        selectedCells = [...selectedCells, cellPositions[indexCell]];
    }

    console.log("🚀 ~ file: spawn.js ~ line 43 ~ getRandomEmptyCells ~ selectedCells", selectedCells)
    return selectedCells;
}

function getRandomStartNumber() {
    const possibilities = [2, 2, 2, 2, 2, 2, 2, 2, 4];
    const rand = Math.floor(Math.random() * possibilities.length);

    const selectedNumber = possibilities[rand];

    return selectedNumber;
}

export default spawn;