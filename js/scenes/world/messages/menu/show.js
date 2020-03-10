export default function(scene) {
  const circle = new Phaser.Geom.Circle(scene.me.x, scene.me.y, 128);
  Phaser.Actions.PlaceOnCircle(scene.menuButtons, circle);
  scene.menuButtons.forEach((button, i) => {
    button.visible = true;
  });
}
