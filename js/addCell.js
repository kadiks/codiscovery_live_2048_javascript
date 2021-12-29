function addCell(position, num) {
    const divEl = document.createElement('div');
    divEl.classList.add('cell', `cell-${num}`, 'cell-new', `cell-position-${position.row}-${position.col}`);
    divEl.textContent = num;
    document.querySelector('.cells').append(divEl);

    setTimeout(() => {
        divEl.classList.remove('cell-new');
    }, 100);
}

export default addCell;