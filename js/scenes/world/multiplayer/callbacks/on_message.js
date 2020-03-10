import createOther from '../../player/create_other.js'
import createPlayer from '../../player/create.js'
import findPlayer from '../../player/find.js'
import movePlayer from '../../player/move.js'
import sayMessage from '../../messages/say_message.js'

export default function(e, scene) {
  const message = JSON.parse(e.data);
  const action = message.action;
  const player = findPlayer(message.connectionId, scene);
  console.log(message);
  if (action === "exit") {
    delete scene.otherPlayers[message.connectionId];
    player.destroy();
  } else if (action === "join") {
    createOther(message.connectionId, scene, 0, 0);
  } else if (action === "move") {
    movePlayer(
      player,
      message.data.x,
      message.data.y,
      scene
    );
  } else if (action === "poke") {
    sayMessage(
      player,
      "poke",
      scene
    );
  } else if (action === "speak") {
    sayMessage(
      player,
      message.data.message,
      scene
    );
  } else {
    console.log("something has gone horribly wrong");
  }
}
