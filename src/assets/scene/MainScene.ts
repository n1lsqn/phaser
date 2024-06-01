export class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }
    create() {
        const { width, height } = this.game.canvas;
        
        this.add.image(width / 2, height / 2, 'street');
        this.add.text(width / 2, height / 2, 'クリックでエンディング', { fontFamily: 'arial', fontSize: '60px' }).setOrigin(0.5);

        const zone = this.add.zone(width / 2, height / 2, width, height);
        zone.setInteractive({
            useHandCursor: true
        });
        zone.on('pointerdown', () => {
            this.scene.start('EndingScene');
        });
    }
}
