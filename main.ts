input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
        score += 1
    } else {
        game.removeLife(1)
    }
})
input.onButtonPressed(Button.AB, function () {
    sprite.delete()
    sprite = game.createSprite(2, 2)
    game.setLife(3)
})
input.onButtonPressed(Button.B, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
        score += 1
    } else {
        game.removeLife(1)
    }
})
let score = 0
let sprite: game.LedSprite = null
basic.showString("Made by Ivano Slunjski")
sprite = game.createSprite(2, 2)
game.setLife(3)
basic.forever(function () {
    sprite.move(0.5)
    basic.pause(100)
    sprite.ifOnEdgeBounce()
    if (score == 3) {
        sprite.move(0.7)
        basic.pause(100)
    }
    if (score == 5) {
        sprite.move(1)
        basic.pause(100)
    }
    if (score == 7) {
        sprite.move(1.2)
        basic.pause(100)
    }
    if (score == 10) {
        sprite.move(1.5)
        basic.pause(100)
    }
})
