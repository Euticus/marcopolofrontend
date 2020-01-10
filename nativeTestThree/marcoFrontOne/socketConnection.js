import io from 'socket.io-client'

let socket = io.connect('http://8accc4d6.ngrok.io ')

console.log(socket)

export default socket