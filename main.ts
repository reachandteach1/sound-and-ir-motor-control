input.onLoudSound(function () {
    activateMotor = true
})
let activateMotor = false
pins.A2.digitalWrite(false)
pins.LED.digitalWrite(false)
light.clear()
pause(1000)
activateMotor = false
forever(function () {
    if (!(pins.IRIn.digitalRead()) || activateMotor) {
        activateMotor = false
        pins.LED.digitalWrite(true)
        pins.A2.digitalWrite(true)
        light.showAnimation(light.rainbowAnimation, 5000)
        light.clear()
        pins.A2.digitalWrite(false)
        pins.LED.digitalWrite(false)
    }
})
