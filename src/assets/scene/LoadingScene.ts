export class LoadingScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LoadingScene' });
  }

  preload() {
    this.load.image('logo', 'assets/logo.png');
  }

  create() {
    const { width, height } = this.game.canvas;
    this.add.image(width / 2, height / 2, 'logo');
    this.add.text(width / 2, height / 2 + 100, 'Loading...', { fontFamily: 'Arial', fontSize: '40px' }).setOrigin(0.5);
    this.load.image('street', 'assets/street.png');
    this.load.image('robot', 'assets/robot.png');
    this.load.on('complete', () => {
      this.scene.start('TitleScene');
    });
    this.load.start();
  }
}