import send from '../multiplayer/send.js'
import sayMessage from '../messages/say_message.js'

export default function(player, scene) {
  send(
    scene.connection,
    "speak",
    {
      message: "think"
    }
  )
  sayMessage(player, "think", scene);
}
