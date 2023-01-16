const btnStart = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#aed2ec','#6582a2','#a28ae8','#8183FFFF','#C281FFFF','#E284FFFF','#D6FFDBFF']
let score = 0
let time = 0

btnStart.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})


timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event =>{
    if (event.target.classList.contains('circle')) {
        score ++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    setTime(time)
    createRandomCircle()
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.remove()
    board.innerHTML = `<h1> Счет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNum(10, 35)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNum(0, width - size)
    const y = getRandomNum(0, height - size)
    const color1 = getRandomColor()
    const color2 = getRandomColor()
    const color3 = getRandomColor()

    circle.classList.add('circle')
    circle.style.background = `linear-gradient(90deg, ${color1} 0%, ${color2} 47%, ${color3} 100%)`
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    board.append(circle)
}

function getRandomNum(min, max) {
    return Math.round(Math.random() * (max-min) + min)
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
