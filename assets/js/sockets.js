import { handleNewUser } from './notification'

let socket = null

const getSocket = () => socket

const updateSocket = aSocket => {
    socket = aSocket
}

const initSocket = aSocket => {
    const { events } = window

    updateSocket(aSocket)
    aSocket.on(events.newUser, handleNewUser)
}

export {
    getSocket,
    updateSocket,
    initSocket,
}