let servo1 = 90
let servo2 = 90
let servo3 = 90
let servo4 = 90
let servo5 = 90
let servo6 = 90

input.onButtonPressed(Button.A, () => {
    servo1 = 45
    servo2 = 135
    servo3 = 45
    servo4 = 135
    servo5 = 45
    servo6 = 135
    pins.servoWritePin(0, servo1)
    pins.servoWritePin (1, servo2)
    pins.servoWritePin (2, servo3)
    pins.servoWritePin(3,servo4)
    pins.servoWritePin (4, servo5)
    pins.servoWritePin (5, servo6)
    basic.pause(500)
})

input.onButtonPressed(Button.B, () => {
    servo1 = 135
    servo2 = 45
    servo3 = 135
    servo4 = 45
    servo5 = 135
    servo6 = 45
    pins.servoWritePin(0, servo1)
    pins.servoWritePin(1, servo2)
    pins.servoWritePin(2, servo3)
    pins.servoWritePin(3, servo4)
    pins.servoWritePin(4, servo5)
    pins.servoWritePin(5, servo6)
    basic.pause(500)
})
