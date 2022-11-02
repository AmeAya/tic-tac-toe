let cells = document.querySelectorAll('#field td')
start(cells)

function start(cells) {
    let turn = 0
    for (let cell of cells) { // for cell in cells
        cell.addEventListener('click', function press() {
            if (turn % 2 === 0) {
                this.textContent = 'X';
                this.removeEventListener('click', press);
            }
            else {
                this.textContent = 'O';
                this.removeEventListener('click', press);
            }
            turn++;
        })
    }
}

function isVictory(cells) {
    let combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


}
