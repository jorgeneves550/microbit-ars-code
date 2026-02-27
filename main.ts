function notifica (texto: string, num2: number) {
    if (texto == "ambAula") {
        if (num2 == 1) {
            for (let index = 0; index < 4; index++) {
                basic.showIcon(IconNames.No)
                basic.clearScreen()
                music.play(music.tonePlayable(330, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            }
        } else {
            for (let index = 0; index < 4; index++) {
                basic.showIcon(IconNames.Yes)
                basic.clearScreen()
            }
        }
    } else if (texto == "alunoAlt") {
        if (num2 == aluno) {
            for (let index = 0; index < 4; index++) {
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # # # # #
                    . # # # .
                    . . # . .
                    `)
                music.play(music.tonePlayable(784, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    . # # # .
                    . . # . .
                    . . . . .
                    `)
            }
        }
    }
}
input.onButtonPressed(Button.A, function () {
    handrise2 = 1
    radio.sendValue("A", aluno)
    basic.showIcon(IconNames.Confused)
})
function intervir (num: number) {
    let handrise3 = 0
    if (handrise3 == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Confused)
    }
}
input.onButtonPressed(Button.B, function () {
    radio.sendValue("B", aluno)
    basic.showIcon(IconNames.Happy)
})
radio.onReceivedValue(function (name, value) {
    let handrise = 0
    notifica(name, value)
    intervir(handrise)
})
let handrise2 = 0
let aluno = 0
radio.setGroup(1)
aluno = 1
