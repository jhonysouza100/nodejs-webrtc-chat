import Chat from "./components/Chat";
import { useWebConnection } from "./hooks/useWebRTC";

function App() {

  const socket = useWebConnection()
  
  return (
    <div className="h-screen bg-zinc-800 text-white flex items-center justify-center">
      <Chat socket={socket} />
    </div>
  );
}

export default App;