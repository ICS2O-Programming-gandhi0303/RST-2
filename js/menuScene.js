/*global Phaser*/
class MenuScene extends Phaser.Scene {
    constructor() {
      super({ key: "menuScene" })
      this.menuSceneBackgroundImage = null
      this.startButton = null
    }
  
    init() {
      this.cameras.main.setBackgroundColor("#ffffff")
    }
    preload() {
      console.log("Menu Scene")
      this.load.image("menuSceneBackground", "./assets/aliens_screen_image2.jpg")
      this.load.image("startButton", "./assets/start.png")
    }
    create() {
      this.menuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground")
      this.menuSceneBackgroundImage.setOrigin(0.5, 0.5)
      this.menuSceneBackgroundImage.x = 1920 / 2
      this.menuSceneBackgroundImage.y = 1080 / 2
      this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, "startButton")
      this.startButton.setOrigin(0.5, 0.5)
      this.startButton.setInteractive({ useHandCursor: true })
      this.startButton.on('pointerdown', () => this.clickButton())
      
    }
    update() {
    }
    clickButton(){
      this.scene.start("gameScene")
    }
  }
  
  export default MenuScene