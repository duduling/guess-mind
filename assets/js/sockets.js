import { handleNewUser, handleDisconnected } from './notification'
import { handleNewMsg } from './chat'

let socket = null

const getSocket = () => socket

const updateSocket = aSocket => {
    socket = aSocket
}

const initSockets = aSocket => {
    const { events } = window

    updateSocket(aSocket)
    aSocket.on(events.newUser, handleNewUser)
    aSocket.on(events.newMsg, handleNewMsg)
    aSocket.on(events.disconnected, handleDisconnected)
}

export {
    getSocket,
    updateSocket,
    initSockets,
}