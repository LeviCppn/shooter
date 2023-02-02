input.onPinPressed(TouchPin.P0, function () {
    game.pause()
})
input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    shoot = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
    shoot.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (shoot.isTouching(Enemy)) {
            game.addScore(1)
        }
        if (shoot.get(LedSpriteProperty.Y) <= 0) {
            shoot.delete()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    game.resume()
})
let EnemyFire: game.LedSprite = null
let shoot: game.LedSprite = null
let Enemy: game.LedSprite = null
let player: game.LedSprite = null
game.setLife(10)
game.setScore(0)
player = game.createSprite(2, 4)
Enemy = game.createSprite(0, -4)
basic.forever(function () {
    Enemy.move(1)
    basic.pause(100)
    Enemy.ifOnEdgeBounce()
    EnemyFire = game.createSprite(Enemy.get(LedSpriteProperty.X), Enemy.get(LedSpriteProperty.Y))
    EnemyFire.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        EnemyFire.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
        if (EnemyFire.isTouching(player)) {
            game.removeLife(1)
        }
        if (EnemyFire.get(LedSpriteProperty.Y) >= 4) {
            EnemyFire.delete()
        }
    }
})
