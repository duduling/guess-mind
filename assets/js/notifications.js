const body = document.querySelector('body')

const fireNotification = (text, color) => {
    const notification = document.createElement('div')
    notification.innerText = text
    notification.style.backgroundColor = color
    notification.className = 'notification'
    body.appendChild(notification)
}

const handleNewUser = ({ nickname }) => fireNotification(`${nickname} just joined!`, 'rgb(0, 122, 255)')

const handleDisconnected = ({ nickname }) => fireNotification(`${nickname} just left!`, 'rgb(255, 149, 0)')

export {
    handleNewUser,
    handleDisconnected,
}
