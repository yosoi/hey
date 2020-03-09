import sayMessage from '../messages/say_message.js'
import send from '../multiplayer/send.js'

export default function(player, scene) {
  // update server to show that you touched another player
  // show exclamation point above your head
  sayMessage(
    scene.me,
    "poke",
    scene
  )
}
