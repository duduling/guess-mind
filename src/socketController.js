import events from './events'

const socketController = socket => {
    const broadcast = (event, data) => socket.broadcast.emit(evnet, data)

    socket.on(events.setNickname, ({ nickname }) => {
        // eslint-disable-next-line no-param-reassign
        socket.nickname = nickname
        broadcast(events.newUser, { nickname })
    })

    socket.on(events.disconnect, () => {
        broadcast(events.disconnected, { nickname: socket.nickname })
    })
}

export default socketController
