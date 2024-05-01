import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'
import { config } from './config'
import { webRTC } from './utils/webRTC'

// server initialize
const app = express()
app.set('port', config.PORT)
app.use(express.json())

const server = createServer(app)

const io = new Server( server, {
  cors: {
    origin: '*',
  }
})

io.on('connection', (socket => {

  console.log(`Client connected: ${socket.connected}, id: ${socket.id}`)
  
  webRTC(socket)
  
  socket.on('disconnect', () => {
    
    console.log(`Client connected: ${socket.connected}, id: ${socket.id}`)
    
  })

}))


server.listen(app.get('port'), () => { console.log(`Server listen on PORT: ${app.get('port')}`)})