import { getSocket } from './sockets'

const messages = document.getElementById('jsMessages')
const sendMsg = document.getElementById('jsSendMsg')

const appendMsg = (text, nickname) => {
    const li = document.createElement('li')
    li.innerHTML = `
        <span class="author ${nickname ? 'out' : 'self'}">${
        nickname || 'You'
        }:</span> ${text}
    `
    messages.appendChild(li)
}

const handleSendMsg = event => {
    event.preventDefault()
    const input = sendMsg.querySelector('input')
    const { value } = input
    getSocket().emit(window.events.sendMsg, { message: value })
    input.value = ''
    appendMsg(value)
}

const handleNewMessage = ({ message, nickname }) => appendMsg(message, nickname)

if (sendMsg) {
    sendMsg.addEventListener('submit', handleSendMsg)
}

const disableChat = () => {
    sendMsg.style.display = 'none'
}
const enableChat = () => {
    sendMsg.style.display = 'flex'
}


export {
    handleNewMessage,
    disableChat,
    enableChat,
}
