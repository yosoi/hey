import sayMessage from '../messages/say_message.js'
import send from '../multiplayer/send.js'

export default function(connectionId, scene) {
  // update server to show that you touched another player
  send(
    scene.connection,
    "poke",
    {
      id: connectionId
    }
  )
  // show exclamation point above your head
  sayMessage(
    scene.me,
    "poke",
    scene
  )
}
