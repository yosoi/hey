import movePlayer from '../player/move.js'
import send from '../multiplayer/send.js'

export default function(scene) {
  const background = scene.add.rectangle(
    0,
    0,
    800,
    600,
    0xFFFF00
  );
  background.setOrigin(0,0);
  background.setInteractive().on("pointerdown", function(pointer, localX, localY, event) {
    movePlayer(
      scene.me,
      pointer.x,
      pointer.y,
      scene
    );
    send(
      scene.connection,
      "move",
      {
        x: pointer.x,
        y: pointer.y
      }
    );
  });
}
