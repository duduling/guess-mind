import { handleNewUser, handleDisconnected } from './notification'

let socket = null

const getSocket = () => socket

const updateSocket = aSocket => {
    socket = aSocket
}

const initSocket = aSocket => {
    const { events } = window

    updateSocket(aSocket)
    aSocket.on(events.newUser, handleNewUser)
    aSocket.on(events.disconnected, handleDisconnected)
}

export {
    getSocket,
    updateSocket,
    initSocket,
}