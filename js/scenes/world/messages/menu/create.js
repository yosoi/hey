import hide from './hide.js'
import sayMessage from '../say_message.js'
import send from '../../multiplayer/send.js'

export default function(scene) {
  const menuSpriteKeys = [
    "brb",
    "bye",
    "heart",
    "hey",
    "poop",
    "um"
  ];
  scene.menuButtons = [];
  menuSpriteKeys.forEach((key, i) => {
    const button = scene.add.image(0, 0, key);
    button.setScale(3);
    button.setInteractive().on("pointerdown", function(pointer, localX, localY, event) {
      hide(scene);
      sayMessage(scene.me, key, scene);
      send(
        scene.connection,
        "speak",
        {
          message: key
        }
      );
    });
    scene.menuButtons.push(button);
  });
  hide(scene)
}
