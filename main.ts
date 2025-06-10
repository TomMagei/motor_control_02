input.onButtonPressed(Button.A, function () {
    pwm += DELTA
    if (pwm > MAX) {
        pwm = MAX
    }
    calc_level()
})
function calc_level () {
    level = MAX % pwm
    level = level / DELTA
}
input.onButtonPressed(Button.B, function () {
    pwm += -1 * DELTA
    if (pwm < MIN) {
        pwm = MIN
    }
    calc_level()
})
let level = 0
let pwm = 0
let MAX = 0
let MIN = 0
let DELTA = 0
pins.analogSetPeriod(AnalogPin.P0, 1)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 1)
DELTA = 40
MIN = 780
MAX = 1020
pwm = MAX
calc_level()
basic.forever(function () {
    basic.showString("" + (level))
    pins.analogWritePin(AnalogPin.P0, pwm)
})
