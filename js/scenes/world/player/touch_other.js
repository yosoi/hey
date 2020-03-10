import sayMessage from '../messages/say_message.js'
import send from '../multiplayer/send.js'

export default function(connectionId, scene) {
  send(
    scene.connection,
    "poke",
    {
      id: connectionId
    }
  )
  sayMessage(scene.me, "poke", scene)
}
