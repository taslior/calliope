input.onButtonPressed(Button.A, function () {
    Startzeit = input.runningTime()
    Schritte = 0
    Start = true
    basic.setLedColor(0x00ff00)
})
input.onGesture(Gesture.Shake, function () {
    if (Start == true) {
        Schritte += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (Start == true) {
        basic.setLedColor(0xff0000)
        Zeitunterschied = input.runningTime() - Startzeit
        Zeitunterschied = Zeitunterschied / 1000
        Start = false
        basic.showNumber(Zeitunterschied)
        basic.showNumber(Schritte)
        basic.showNumber(Schritte * Schrittlänge / Zeitunterschied)
    }
})
let Zeitunterschied = 0
let Schritte = 0
let Startzeit = 0
let Schrittlänge = 0
let Start = false
basic.setLedColor(0xff0000)
Start = false
Schrittlänge = 0.4
basic.forever(function () {
	
})
