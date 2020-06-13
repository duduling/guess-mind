import { handleNewUser, handleDisconnected } from './notifications'
import { handleBeganPath, handleStrokedPath, handleFilled } from './paint'
import {
    handlePlayerUpdate, handleGameStarted, handleGameStarting, handleLeaderNotif, handleGameEnded,
} from './players'
import { handleNewMsg } from './chat'

let socket = null

export const getSocket = () => socket

export const initSockets = aSocket => {
    const { events } = window
    socket = aSocket
    socket.on(events.newUser, handleNewUser)
    socket.on(events.disconnected, handleDisconnected)
    socket.on(events.newMsg, handleNewMsg)
    socket.on(events.beganPath, handleBeganPath)
    socket.on(events.strokedPath, handleStrokedPath)
    socket.on(events.filled, handleFilled)
    socket.on(events.playerUpdate, handlePlayerUpdate)
    socket.on(events.gameStarted, handleGameStarted)
    socket.on(events.leaderNotif, handleLeaderNotif)
    socket.on(events.gameEnded, handleGameEnded)
    socket.on(events.gameStarting, handleGameStarting)
}
