// eslint-disable-next-line no-undef
const socket = io('/')

const sendMessage = message => {
    socket.emit('newMessage', { message })
    console.log(`You: ${message}`)
}

const setNickname = nickname => {
    socket.emit('setNickname', { nickname })
}

const handleMessageNotif = data => {
    const { message, nicknam } = data

    console.log(`${nicknam}: ${message}`)
}

socket.on('messageNotif', handleMessageNotif)