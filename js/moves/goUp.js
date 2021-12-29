function moveTo(grid) {
    for(let colIndex = 0; colIndex < grid.length; colIndex++) {
        let curNumInLine = 0;
        for(let rowIndex = 0; rowIndex < grid?.length; rowIndex++) {
            if (grid?.[rowIndex]?.[colIndex] !== null) {

                const curClassName = `cell-position-${rowIndex}-${colIndex}`;

                const cell = document.querySelector(`.${curClassName}`);

                if (curNumInLine !== rowIndex) {
                    const curNum = grid[rowIndex][colIndex];
                    grid[curNumInLine][colIndex] = curNum;
                    grid[rowIndex][colIndex] = null;

                    cell.classList.remove(curClassName);
                    cell.classList.add(`cell-position-${curNumInLine}-${colIndex}`);
                }
                
                if (grid?.[curNumInLine]?.[colIndex]
                    && grid?.[curNumInLine - 1]?.[colIndex] === grid?.[curNumInLine]?.[colIndex]) {
                    const oldValue = grid[curNumInLine - 1][colIndex];
                    const newValue = grid[curNumInLine - 1][colIndex] * 2;
                    grid[curNumInLine - 1][colIndex] = newValue;
                    grid[curNumInLine][colIndex] = null;
                    cell.remove();
                    const doubleCell = document.querySelector(`.cell-position-${curNumInLine - 1}-${colIndex}`)
                    doubleCell.classList.remove(`cell-${oldValue}`);
                    doubleCell.classList.add(`cell-${newValue}`);
                    doubleCell.classList.add(`cell-double`);
                    setTimeout(() => {
                        doubleCell.classList.remove(`cell-double`);
                    }, 500);
                    doubleCell.textContent = grid[curNumInLine - 1][colIndex];

                    curNumInLine--;
                } 

                curNumInLine++;
                
            }   
        }
    }

    console.table(grid);
}

export default moveTo;

// [2, 2, 2, 2] colIndex = 0; curNumInLine = 0;
// [4, null, 2, 2] colIndex = 1; curNumInLine = 0;
// [4, 2, null, 2] colIndex = 2; curNumInLine = 1;
// [4, 2, 2, null] colIndex = 3; curNumInLine = 1;


// [
//     [1, 2, 3, 4]
//     [5, 6, 7, 8]
//     [9, 10, 11, 12]
//     [13, 14, 15, 16]
// ]