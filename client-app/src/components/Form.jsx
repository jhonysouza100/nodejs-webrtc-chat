import { useState, useEffect } from "react";
import Messages from "./Messages";

export default function Form({socket}) {

  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    
    e.preventDefault()

    const newMessage = {
      body: message,
      from: 'Me'
    }
    
    setMessages([...messages, newMessage]) // se agrega desde el elemento cliente
  
    socket.emit('message', message)

  }
  console.log('element')
  useEffect(() => {
    console.log('effect')
    
    const receiveMessage = (data) => setMessages( state => [...state, data]) // estado anterios mas estado actual
    
    socket.emit('update-count')
    socket.on('count-updated', (data) => setCount(data))

    fetch('http://localhost:3030/views')
      .then(response => response.json())
      .then(data => setCount(data.count))
      .catch(error => console.error('Error fetching count:', error));
    
    socket.on('message', receiveMessage)  // actualiza desde el backend
    
    return () => {
      socket.off('message')
      socket.off('count-updated')
    }
    
  }, [])
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Write your message..."
          onChange={ e => setMessage(e.target.value) } />
        <button>Send</button>
      </form>
      <>{count}</>
      <Messages messages={messages} />
    </>
  );
}