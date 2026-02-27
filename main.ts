input.onGesture(Gesture.Shake, function () {
    numAleatorio = randint(1, totalAlunos)
    basic.showNumber(numAleatorio)
    radio.sendValue("alunoAlt", numAleatorio)
    basic.clearScreen()
})
let numAleatorio = 0
let totalAlunos = 0
let coluna = 0
let linha = 0
let alunoLed = 0
radio.setGroup(1)
totalAlunos = 10
