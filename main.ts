radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(input.soundLevel())
    basic.pause(100)
})
