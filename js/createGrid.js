function createGrid(size = 4) {
    const grid = [...Array(size)].map((el, index) => {
        return [...Array(size)].map((el, index) => {
            return null;
        });
    });
    // console.table(grid);

    return grid;
    
}

export default createGrid;