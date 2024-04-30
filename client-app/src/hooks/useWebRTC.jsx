import io from 'socket.io-client'
import { config } from '../config'


export const useWebConnection = () => {
  
  const socket = io(`${config.SOCKET}`)

  return socket
  
}