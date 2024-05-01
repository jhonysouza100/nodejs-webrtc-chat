export default function  Output({messages}) {

  return (
    <ul className="bg-zinc-700 p-2 rounded-sm overflow-auto max-h-80 min-h-80">
      {
        messages && messages.map( el => (
          <li key={crypto.randomUUID()}
          className={`my-2 p-2 table text-sm rounded-md ${el.from === 'Me'
            ? 'bg-cyan-700 ml-auto' : 'bg-teal-700'}`}>
              <span className="">{el.from}: </span>{el.body}</li>
        ))
      }
    </ul>
  );
}