let sprite_1 = game.createSprite(0, randint(0, 4))
let sprite_2 = game.createSprite(randint(1, 4), randint(0, 4))
while (input.buttonIsPressed(Button.AB)) {
    sprite_1.change(LedSpriteProperty.X, 1)
    basic.pause(100)
}
while (input.logoIsPressed()) {
    sprite_1.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
}
while (input.buttonIsPressed(Button.B)) {
    let sprite: game.LedSprite = null
    sprite.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
}
if (true) {
    music.playMelody("C D E F - - - - ", 120)
    basic.showIcon(IconNames.Happy)
    game.gameOver()
}
basic.forever(function () {
	
})
