import {
    disableCanvas,
    hideControls,
    enableCanvas,
    showControls,
    resetCanvas,
} from './paint'
import { disableChat, enableChat } from './chat'

const board = document.getElementById('jsPBoard')
const notifs = document.getElementById('jsNotifs')

const addPlayers = players => {
    board.innerHTML = ''
    players.forEach(player => {
        const playerElement = document.createElement('span')
        playerElement.innerText = `${player.nickname}: ${player.points}`
        board.appendChild(playerElement)
    })
}

const setNotifs = text => {
    notifs.innerText = ''
    notifs.innerText = text
}

const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets)
const handleGameStarted = () => {
    setNotifs('')
    disableCanvas()
    hideControls()
    enableChat()
}
const handleLeaderNotif = ({ word }) => {
    enableCanvas()
    showControls()
    disableChat()
    notifs.innerText = `You are the leader, paint: ${word}`
}
const handleGameEnded = () => {
    setNotifs('Game ended.')
    disableCanvas()
    hideControls()
    resetCanvas()
}
const handleGameStarting = () => setNotifs('Game will start soon')

export {
    handlePlayerUpdate,
    handleGameStarted,
    handleLeaderNotif,
    handleGameEnded,
    handleGameStarting,
}
