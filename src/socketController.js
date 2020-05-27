import events from './events'

const socketController = socket => {
    socket.on(events.setNickname, ({ nickname }) => {
        // eslint-disable-next-line no-param-reassign
        socket.nickname = nickname
        socket.broadcast.emit(events.newUser, { nickname })
    })
}

export default socketController
