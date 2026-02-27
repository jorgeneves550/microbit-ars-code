def notifica(texto: str, num2: number):
    if texto == "ambAula":
        if num2 == 1:
            for index in range(4):
                basic.show_icon(IconNames.NO)
                basic.clear_screen()
                music.play(music.tone_playable(330, music.beat(BeatFraction.QUARTER)),
                    music.PlaybackMode.UNTIL_DONE)
        else:
            for index2 in range(4):
                basic.show_icon(IconNames.YES)
                basic.clear_screen()
    elif texto == "alunoAlt":
        if num2 == aluno:
            for index3 in range(4):
                basic.show_leds("""
                    . . # . .
                    . # # # .
                    # # # # #
                    . # # # .
                    . . # . .
                    """)
                music.play(music.tone_playable(784, music.beat(BeatFraction.EIGHTH)),
                    music.PlaybackMode.UNTIL_DONE)
                basic.show_leds("""
                    . . . . .
                    . . # . .
                    . # # # .
                    . . # . .
                    . . . . .
                    """)
def intervir(num: number):
    handrise = 0
    if handrise == 0:
        basic.show_icon(IconNames.HAPPY)
    else:
        basic.show_icon(IconNames.CONFUSED)
aluno = 0
radio.set_group(1)
aluno = 1