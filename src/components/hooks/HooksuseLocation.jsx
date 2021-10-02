import { useParams, useLocation } from "react-router-dom";
const HooksuseLocation = () => {
  const {fname, lname} = useParams();
  const location = useLocation();

  console.log("location");
  console.log(location);

  return (
    <div>
      <h2>
        useLocation Hooks {fname} {lname}
      </h2>
      <p>
        Current location is <br />
        {location.pathname}
      </p>
      <p>
        Current location is <br />
        {location.pathname.replace("/", " ")}
      </p>
      {location.pathname === `/hooksuseLocation/vicky/shinde` ? (
        <button
          className="btn btn-warning"
          onClick={() => {
            alert("Hi");
          }}
        >
          Got It
        </button>
      ) : (
        `flase`
      )}
    </div>
  );
}

export default HooksuseLocation;
