namespace SpriteKind {
    export const Player2 = SpriteKind.create()
}
function objectOverlapP2 () {
    text_list = ["oh yea!", "so excited!", "amaze balls!"]
    player2.sayText(text_list._pickRandom())
    info.player2.changeScoreBy(1)
}
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    objectOverlapP2()
})
function objectOverlapP1 () {
    text_list = ["yay!", "woohoo!", "awesome!"]
    player1.sayText(text_list._pickRandom())
    info.player1.changeScoreBy(1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    objectOverlapP1()
})
let text_list: string[] = []
let player2: Sprite = null
let player1: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
player1 = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
player1.setPosition(800, 800)
player2 = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player2)
player2.setPosition(820, 800)
game.splash("Player one turn!!")
scene.cameraFollowSprite(player1)
controller.moveSprite(player1)
info.startCountdown(180)
