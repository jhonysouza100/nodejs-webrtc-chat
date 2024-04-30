import { Socket } from "socket.io";

export const webRTC = (socket: Socket) => {

  socket.on('message', (data) => {
    
    console.log(data)

    socket.broadcast.emit('message', data)
    
  })

}