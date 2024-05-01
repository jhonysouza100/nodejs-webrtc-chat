export default function Input(props) {
  return (
    <form onSubmit={props.handleSubmit} className="flex flex-col items-end justify-between pb-2">
      <div className="flex flex-row items-center">
        <input
          className="border-2 border-zinc-500 p-2 w-full text-black mr-2"
          type="text"
          placeholder="Write your message..."
          onChange={(e) => props.setMessage(e.target.value)}
        />
        <button className="bg-cyan-700 my-2 p-1 rounded-sm hover:bg-cyan-800">Send</button>
      </div>
    </form>
  );
}
