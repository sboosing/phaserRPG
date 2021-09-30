class Player extends Entity{
    constructor(scene, x,y, textureKey) {
        super(scene, x,y,textureKey, 'Player');
        const animFrameRate = 8
        const anims = scene.anims;
        anims.create({
            key: 'player-left',
            frames: anims.generateFrameNumbers(this.textureKey, {
                // start: 3,
                // end: 5
                start: 60,
                end: 62
            }),
            frameRate: animFrameRate,
            repeat: -1
        })
        anims.create({
            key: 'player-right',
            frames: anims.generateFrameNumbers(this.textureKey, {
                // start: 6,
                // end: 8
                start: 72,
                end: 74
            }),
            frameRate: animFrameRate,
            repeat: -1
        })
        anims.create({
            key: 'player-up',
            frames: anims.generateFrameNumbers(this.textureKey, {
                // start: 9,
                // end: 11
                start: 84,
                end: 86
            }),
            frameRate: animFrameRate,
            repeat: -1
        })
        anims.create({
            key: 'player-down',
            frames:anims.generateFrameNumbers(this.textureKey, {
                // start: 0,
                // end: 2
                start: 48,
                end: 50
            }),
            frameRate: animFrameRate,
            repeat: -1
        })
        this.idleFrame = {
            down: 49,
            left: 61,
            right: 73,
            up: 85
        }
        this.setFrame(this.idleFrame.down)
    }
    update(){

    }
}