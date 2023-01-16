const board = document.querySelector('#board')
const SQUARES_COUNT = 700
const colors = ['#aed2ec','#6582a2','#a28ae8','#8183FFFF','#C281FFFF','#E284FFFF','#D6FFDBFF']

function setColor(square) {
    const color = getRandomColor()
    square.style.backgroundColor = color
    square.style.boxShadow = `0 0 3px ${color}, 0 0 10px #aed2ec`
}

function removeColor(square) {
    square.style.backgroundColor = 'rgba(163, 255, 198, 0.56)'
    square.style.boxShadow = `0 0 5px #7a9ea2`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

for (let i = 0; i < SQUARES_COUNT; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}
