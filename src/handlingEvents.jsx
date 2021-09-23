import { useState } from "react";

const HandlingEvents = () => {

  const blue = 'blue';

  const [bg, setBg] = useState(blue);
  const [name, setName] = useState('Click me')

  const bgChange = () => {
    const green = 'green';
    setBg(green);
    setName("Double click me");
    // alert('hi');
  }

  const bgBack = () => {
    setBg(blue);
    setName("Click me");
  }

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <h3>Handling Events</h3>
        <h4>onClick and onDoubleClick</h4>
        <button onClick={bgChange} onDoubleClick={bgBack}>
          {name}
        </button>
        </div>
        <hr />
      <div style={{ backgroundColor: bg }}>
        <h4>onMouseEnter and onMouseLeave</h4>
        <button onMouseEnter={bgChange} onMouseLeave={bgBack}>
          {name}
        </button>
      </div>
    </>
  );
}

export default HandlingEvents;
