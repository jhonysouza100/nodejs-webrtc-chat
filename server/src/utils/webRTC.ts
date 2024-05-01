import { Socket } from "socket.io";

export const webRTC = (socket: Socket) => {
  
  socket.on('message', (data) => {
    
    console.log(data)

    // store message in database
    
    // send message to all clients
    socket.broadcast.emit('message', {
      body: data,
      from: socket.id.slice(16)
    })
    
  })
  
}