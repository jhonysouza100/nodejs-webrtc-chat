export default function Messages({messages}) {

  return (
    <ul>
      {
        messages && messages.map( el => (
          <li key={crypto.randomUUID()}>
            {el.from}: {el.body}</li>
        ))
      }
    </ul>
  );
}