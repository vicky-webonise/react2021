
import { useEffect, useState } from "react";
import { useDocTitle } from "./useCustomHooks";

const CustomHooks = () => {

  const [count, setCount] = useState(0)

  useDocTitle(count);

  useEffect(() => {
    console.log('another useEffect one time call')
  }, []);

  console.log("hi outside");

  const incCount = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h2>Use Effect</h2>
      <h3>{count}</h3>
      <button onClick={incCount} className="btn btn-primary">
        Plus
      </button>
    </div>
  );
}

export default CustomHooks;
