import { useState, useEffect } from "react";

export default function Form({socket}) {

  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    
    e.preventDefault()

    socket.emit('message', message)

  }

  useEffect(() => {

    socket.on('message', data => {
      
      console.log(data)
      
    })

  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Write your message..."
        onChange={ e => setMessage(e.target.value) } />
      <button>Send</button>
    </form>
  );
}