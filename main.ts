controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
sprites.onCreated(SpriteKind.Player, function (sprite) {
    info.setLife(1)
})
let projectile_3: Sprite = null
let pojectile_2: Sprite = null
let projectile: Sprite = null
scene.setBackgroundImage(assets.image`Highway`)
let mySprite = sprites.create(assets.image`Turtle_MySprite`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.x = 80
mySprite.y = 120
mySprite.setStayInScreen(true)
mySprite.say("Gotta Cross the road!")
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 9 6 6 6 6 6 6 c 6 . . . 
        . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
        . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
        . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
        . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
        . 6 8 b b b 8 b b b b 8 6 6 6 6 
        . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
        . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
        . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
        . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
        . 8 f f f f 8 8 8 8 f f f 8 8 8 
        . . f f f f f 8 8 f f f f f 8 . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, 85, 0)
    projectile.y = randint(85, 76)
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 2 2 . . 
        . . . . . 2 c 2 2 2 2 2 2 4 2 . 
        . . . . 2 c c 2 2 2 2 2 2 4 c 2 
        . . d 2 4 c c 2 4 4 4 4 4 4 c c 
        . d 2 2 4 c b e e e e e e e 2 c 
        . 2 2 2 4 b e e b b b e b b e 2 
        . 2 2 2 2 2 e b b b b e b b b e 
        . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
        . 2 d d 2 e f e e e f e e e e e 
        . d d 2 e e e f e e f e e e e e 
        . e e e e e e e f f f e e e e e 
        . e e e e f f f e e e e f f f f 
        . . . e f f f f f e e f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `, -60, 0)
    projectile.y = randint(80, 78)
    pojectile_2 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 1 4 4 4 4 4 4 f 4 . . . 
        . . 4 f 1 4 4 4 4 4 4 f f 4 . . 
        . 4 f f 1 1 1 1 1 1 4 f f 1 4 5 
        . 4 f 4 e e e e e e e f f 1 4 4 
        . 4 4 e f f e f f f e e f 1 4 4 
        . 4 e f f f e f f f f e 4 4 4 4 
        . e e 4 4 4 e 4 4 4 4 4 e 4 4 4 
        . e e e e e e f e e e f e 4 5 5 
        . 5 e e e e e f e e f e e e 4 5 
        . 5 e e e e e f f f e e e e e e 
        . e f f f f e e e e f f f f e e 
        . . f f 4 f f e e f f 4 f f e . 
        . . . f f f . . . . f f f . . . 
        . . . . . . . . . . . . . . . . 
        `, 40, 0)
    pojectile_2.y = randint(57, 20)
    projectile_3 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 3 3 3 3 . . 
        . . . . . 3 c 3 3 3 3 3 3 d 3 . 
        . . . . 3 c c 3 3 3 3 3 3 d c 3 
        . . d 3 d c c 3 d d d d d d c c 
        . d 3 3 d c b a a a a a a a 3 c 
        . 3 3 3 d b a a b b b a b b a 3 
        . 3 3 3 3 3 a b b b b a b b b a 
        . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
        . 3 d d 3 a f a a a f a a a a a 
        . d d 3 a a a f a a f a a a a a 
        . a a a a a a a f f f a a a a a 
        . a a a a f f f a a a a f f f f 
        . . . a f f f f f a a f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `, -150, 0)
    projectile_3.y = randint(50, 10)
})
forever(function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    200,
    true
    )
})
