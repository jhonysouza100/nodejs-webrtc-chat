import Form from "./components/Form";
import { useWebConnection } from "./hooks/useWebRTC";

function App() {

  const socket = useWebConnection()
  
  return (
    <div className="bg-red-500">
      <Form socket={socket} />
    </div>
  );
}

export default App;