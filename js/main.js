import createGrid from './createGrid.js';
import drawTiles from './drawTiles.js';
import spawn from './spawn.js';
import goLeft from './moves/goLeft.js';
import goRight from './moves/goRight.js';
import goUp from './moves/goUp.js';
import goDown from './moves/goDown.js';

const grid = createGrid(4);
console.table(grid);
// const emptyCells = getPositionEmptyCells(grid);

drawTiles(grid);

spawn(2, grid);
console.table(grid);

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            goLeft(grid);
            spawn(1, grid);
            break;
        case 'ArrowRight':
            goRight(grid);
            spawn(1, grid);
            break;
        case 'ArrowUp':
            goUp(grid);
            spawn(1, grid);
            break;
        case 'ArrowDown':
            goDown(grid);
            spawn(1, grid);
            break;
        default:
            break;
    }
});