import { useEffect, useState } from "react";

const HooksUseEffect = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count >= 1) {
      document.title = `(${count}) Count`;
    } else {
      document.title = `Count`;
    }
    console.log("hi useEffect");
  }, [count]);

  useEffect(() => {
    console.log('another useEffect one time call')
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  const incCount = () => {
    setCount(count + 1);
  }

  const actualWidth = () => {
    setWindowWidth(window.innerWidth);
    console.log(windowWidth);
  }

  // cleanup function
  useEffect(() => {
    console.log('add event')
    window.addEventListener("resize", actualWidth);
    return () => {
      console.log('remove event')
      window.removeEventListener("resize", actualWidth);
    }
  }, []);

  console.log("hi outside");

  return (
    <div>
      <h2>Use Effect</h2>
      <h3>{count}</h3>
      <button onClick={incCount} className="btn btn-primary">
        Plus
      </button>
      <h2>window width</h2>
      <p style={{maxWidth: windowWidth }}  data-width={windowWidth}>resize {windowWidth}</p>
    </div>
  );
}

export default HooksUseEffect;
