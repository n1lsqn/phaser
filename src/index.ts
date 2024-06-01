import * as Phaser from 'phaser';
import { Scenes } from './assets/scene';

class MyScene extends Phaser.Scene {
  constructor() {
    super('myscene');
  }

  preload() {
    this.load.image('street', 'assets/street.png');
    this.load.image('robot', 'assets/robot.png');
  }

  create() {
    this.add.image(400, 300, 'street');
    this.add.image(400, 300, 'robot');
    this.add.text(400, 300, 'Hello World', { fontFamily:'arial', fontSize: '60px' }).setOrigin(0.5);
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-app',
  scene: Scenes,
};

new Phaser.Game(config);
