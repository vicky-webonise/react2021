import { add, sub, mult, div } from "./calc";

const SimpleCalc = () => {
  return (
    <>
      <h3>Simple calc</h3>
      <ul>
        <li>Sum = {add(10, 20)}</li>
        <li>sub = {sub(10, 20)}</li>
        <li>mult = {mult(10, 20)}</li>
        <li>div = {div(10, 3)}</li>
      </ul>
    </>
  );
};
export default SimpleCalc;
