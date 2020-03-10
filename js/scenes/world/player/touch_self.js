import send from '../multiplayer/send.js'
import showMenu from '../messages/menu/show.js'

export default function(player, scene) {
  send(
    scene.connection,
    "speak",
    {
      message: "think"
    }
  )
  showMenu(scene);
}
