let cells = document.querySelectorAll('#field td')
start(cells)

function start(cells) {
    let turn = 0;
    let isGameOn = true;
    for (let cell of cells) { // for cell in cells
        cell.addEventListener('click', function press() {
            if (turn % 2 === 0 && isGameOn) {
                this.textContent = 'X';
                this.removeEventListener('click', press);
                turn++;
                if (isVictory(cells)) {
                    alert('First Player Win!');
                    isGameOn = false;
                }
            }
            else {
                if (isGameOn) {
                    this.textContent = 'O';
                    this.removeEventListener('click', press);
                    turn++;
                    if (isVictory(cells)) {
                        alert('Second Player Win!');
                        isGameOn = false;
                    }
                }
            }
            if (turn === 8) {
                alert('Draw!');
            }
        })
    }
}

function isVictory(cells) {
    let combo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < 9; i++) {
        if (
            cells[combo[i][0]].textContent === cells[combo[i][1]].textContent &&
            cells[combo[i][1]].textContent === cells[combo[i][2]].textContent &&
            cells[combo[i][0]].textContent !== ''
        ) {
            return true;
        }
    }

    return false;
}
