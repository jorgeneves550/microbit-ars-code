numAleatorio = 0
alunoLed = 0
linha = 0
coluna = 0
radio.set_group(1)
totalAlunos = 10

def on_gesture_shake():
    global numAleatorio
    numAleatorio = randint(1, totalAlunos)
    basic.show_number(numAleatorio)
    radio.send_value("alunoAlt", numAleatorio)
    basic.clear_screen()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
