function notifica(texto: string, num2: number) {
    if (texto == "ambAula") {
        if (num2 == 1) {
            for (let index = 0; index < 4; index++) {
                basic.showIcon(IconNames.No)
                basic.clearScreen()
                music.play(music.tonePlayable(330, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            }
        } else {
            for (let index2 = 0; index2 < 4; index2++) {
                basic.showIcon(IconNames.Yes)
                basic.clearScreen()
            }
        }
        
    } else if (texto == "alunoAlt") {
        if (num2 == aluno) {
            for (let index3 = 0; index3 < 4; index3++) {
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

function intervir(num: number) {
    let handrise = 0
    if (handrise == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Confused)
    }
    
}

let aluno = 0
radio.setGroup(1)
aluno = 1
