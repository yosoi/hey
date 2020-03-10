import createPlayer from './create.js'
import touchOther from './touch_other.js'

export default function(connectionId, scene, x, y) {
  scene.otherPlayers[connectionId] = createPlayer(
    (pointer, localX, localY, event, player, s) => {
      touchOther(connectionId, scene);
    },
    scene,
    x,
    y
  );
}
