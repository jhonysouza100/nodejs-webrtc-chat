import { Socket } from "socket.io";

let count = 0

export const webRTC = (socket: Socket) => {
  
  socket.on('message', (data) => {
    
    console.log(data)
    
    socket.broadcast.emit('message', {
      body: data,
      from: socket.id.slice(6)
    })
    
  })

  socket.on('update-count', () => {
  
    count++

    socket.broadcast.emit('count-updated', count)
    
  })
  
}