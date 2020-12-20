let speed = 0
let rand = 0
function shift () {
    speed = 0
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    for (let index = 0; index < 20; index++) {
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P1, 5 * speed)
        pins.analogWritePin(AnalogPin.P2, 5 * speed)
        speed += 1
    }
    speed = 0
    for (let index = 0; index < 20; index++) {
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P8, 5 * speed)
        pins.analogWritePin(AnalogPin.P12, 5 * speed)
        speed += 1
    }
    speed = 0
    for (let index = 0; index < 20; index++) {
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P13, 5 * speed)
        pins.analogWritePin(AnalogPin.P14, 5 * speed)
        speed += 1
    }
}
function allon () {
    for (let index = 0; index < 50; index++) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(1)
    }
}
function pinpon () {
    for (let index = 0; index < 10; index++) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(500)
    }
}
basic.forever(function () {
    rand = randint(1, 3)
    if (rand == 1) {
        shift()
    } else if (rand == 2) {
        allon()
    } else {
        pinpon()
    }
})
