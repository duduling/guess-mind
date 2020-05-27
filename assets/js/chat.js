const messages = document.getElementById('jsMessges')
const sendMsg = document.getElementById('jsSendMsg')

const appendMsg = (text, nickname) => {
    const li = document.createElement('li')

    li.innerHTML = `
        <span class='author ${nickname ? 'out' : 'self'}'>${
        nickname || 'You'
        }:</span> ${text}
    `
    messages.appendChild(li)
}

const handleSendMsg = event => {
    event.preventDefault()

    const input = sendMsg.querySelector('input')
    const { value } = input
    input.value = ''
    appendMsg(value)
}

if (sendMsg) {
    sendMsg.addEventListener('submit', handleSendMsg)
}