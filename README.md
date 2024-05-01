# Socket.io + Nodejs + Typescript

Aplicacion web de Chat en tiempo Real usando React y Socket.io, una biblioteca de comunicación en tiempo real que permite enviar mensajes entre múltiples aplicaciones cliente, y un servidor de Nodejs usando Expressjs, el framework backend de Nodejs.

# Server Side

## Instalacion de dependencias

```bash
npm i socket.io
```

Nota: socket.io no nesesita `@types/socket.io` para typescript

## Importacion de Modulos

```javascript
import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'
```

## Inicializacion del `Servidor`

```javascript
const app = express()
const server = createServer(app)
server.listen(3000, () => console.log(3000))
const io = new Server( server, {
  cors: {
    origin: '*',
  }
})
```

## Websocket coneccion

```javascript
io.on('connection', (socket => {

  console.log(`Client connected: ${socket.connected}, id: ${socket.id}`)
  
  myFunction(socket)
  
  socket.on('disconnect', () => {
    
    console.log(`Client connected: ${socket.connected}, id: ${socket.id}`)
    
  })

}))
```

## WebRTC (Web Real Time Comunication)

`/socket.io.ts`

```javascript
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

  socket.on('update-count', async ({count}: {count: number})) => {

    // logica de la funcion

    socket.emit('count-updated', count)
  }
  
}
```

# Clint side

## instalacion d dependencias

```bash
npm i socket.io-client
```

## Importacion de modulos

```javascript
import io  from 'socket.io-client'
```

## Inicializacion del `Cliente`

```javascript
const socket = io('http://localhost:3000')

```

## Coneccion del cliente

`/hooks/useWebRTC.jsx`

```javascript
import { config } from './config'

export const useWebConnection = () => {
  
  const socket = io(`${config.SOCKET} || http://localhost:3000`)

  return socket
  
}
```

`/App.jsx`

```javascript
import Chat from "./components/Chat";
import { useWebConnection } from "./hooks/useWebRTC";

export default function App() {

  const socket = useWebConnection()
  
  return (
    <div className="h-screen bg-zinc-800 text-white flex items-center justify-center">
      <Chat socket={socket} />
    </div>
  );
}
```

## Run App

```bash
cd server && npm i
cd client-app && npm i
```

> `/client-app` and `/server` folder

```bash
cd server && npm run dev
cd client-app && npm run dev
```

Client A:

![client-A](/image-1.jpg)

Client B:

![client-B](/image-2.jpg)
