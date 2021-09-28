import { useParams, useLocation } from "react-router-dom";
const HooksuseLocation = () => {
  const {fname, lname} = useParams();
  const location = useLocation();

  console.log("location");
  console.log(location);

  return (
    <>
      <h2>
        useLocation Hooks {fname} {lname}
      </h2>
      <p>
        Current location is <br />
        {location.pathname}
      </p>
      {location.pathname === `/hooksuseLocation/vicky/shinde` ?
      (<button onClick={() => {
        alert('Hi');
      }}>Got It</button>) : `flase`}
    </>
  );
}

export default HooksuseLocation;
