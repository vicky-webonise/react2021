import { useParams } from "react-router-dom";

const useParamsHooksTwo = () => {
  const {fname, lname} = useParams();
  return (
    <>
      <h2>
        useParams Hooks {fname} {lname}
      </h2>
    </>
  );
}

export default useParamsHooksTwo;
