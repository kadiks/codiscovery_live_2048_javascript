function moveTo(grid) {
    for(let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        let curNumInLine = grid[rowIndex].length - 1;
        for(let colIndex = grid[rowIndex].length - 1; colIndex >= 0; colIndex--) {
            if (grid[rowIndex][colIndex] !== null) {

                const curClassName = `cell-position-${rowIndex}-${colIndex}`;

                const cell = document.querySelector(`.${curClassName}`);

                if (curNumInLine !== colIndex) {
                    const curNum = grid[rowIndex][colIndex];
                    grid[rowIndex][curNumInLine] = curNum;
                    grid[rowIndex][colIndex] = null;

                    cell.classList.remove(curClassName);
                    cell.classList.add(`cell-position-${rowIndex}-${curNumInLine}`);
                }
                
                if (grid[rowIndex][curNumInLine + 1] === grid[rowIndex][curNumInLine]) {
                    const oldValue = grid[rowIndex][curNumInLine + 1];
                    const newValue = grid[rowIndex][curNumInLine + 1] * 2;
                    grid[rowIndex][curNumInLine + 1] = newValue;
                    grid[rowIndex][curNumInLine] = null;
                    cell.remove();
                    const doubleCell = document.querySelector(`.cell-position-${rowIndex}-${curNumInLine + 1}`)
                    doubleCell.classList.remove(`cell-${oldValue}`);
                    doubleCell.classList.add(`cell-${newValue}`);
                    doubleCell.classList.add(`cell-double`);
                    setTimeout(() => {
                        doubleCell.classList.remove(`cell-double`);
                    }, 500);
                    doubleCell.textContent = grid[rowIndex][curNumInLine + 1];

                    curNumInLine++;
                } 

                curNumInLine--;
                
            }   
        }
    }

    console.table(grid);
}

export default moveTo;


// [
//     [1, 2, 3, 4]
//     [5, 6, 7, 8]
//     [9, 10, 11, 12]
//     [13, 14, 15, 16]
// ]

// [
//     [4, 3, 2, 1]
//     [5, 6, 7, 8]
//     [9, 10, 11, 12]
//     [13, 14, 15, 16]
// ]