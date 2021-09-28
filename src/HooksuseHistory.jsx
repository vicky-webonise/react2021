import { useParams, useLocation, useHistory } from "react-router-dom";
const HooksuseHistory = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const history = useHistory();

  // console.log("location ---");
  // console.log(location);

  console.log("history ---");
  console.log(history);

  return (
    <>
      <h2>
        useLocation Hooks {fname} {lname}
      </h2>
      <p>
        Current location is <br />
        {location.pathname}
      </p>
      {location.pathname === `/hooksuseHistory/vicky/shinde` ? (
        <div>
          <button
            className="btn btn-primary"
            onClick={() => {
              history.goBack();
            }}
          >
            Go Back
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              history.push('/');
            }}
          >
            Push
          </button>
        </div>
      ) : (
        `flase`
      )}
    </>
  );
};

export default HooksuseHistory;
