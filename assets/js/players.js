const board = document.getElementById('jsPBoard')

const addPlayers = players => {
    board.innerHTML = ''
    players.forEach(player => {
        const playerElement = document.createElement('span')
        playerElement.innerText = `${player.nickname}: ${player.points}`
        board.appendChild(playerElement)
    })
}

const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets)

export { handlePlayerUpdate }