import { useReducer } from "react";

const initialState = 0;

const countReducer = (countState, payload) => {
  console.log(countState, payload);
  switch (payload.type) {
    case "INCREMENT":
      return countState + 1;
      break;
    case "DECREMENT":
      console.log(0 >= countState);
      if(0 >= countState) {
        return 0
      } else {
        return countState - 1;
      }
      break;
    default :
    return countState;
  }
};
const HooksUseReducer = () => {

  const [countState, dispatch] = useReducer(countReducer, initialState)

  // const incCount = () => {
  //   setCount(count + 1);
  // };

  return (
    <div>
      <h3>Hooks useReducer</h3>
      <h5>{countState}</h5>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button> {' '}
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
    </div>
  );
};

export default HooksUseReducer;
