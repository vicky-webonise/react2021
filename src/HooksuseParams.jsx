import { useParams } from "react-router-dom";

const useParamsHooks = () => {
  const {fname, lname} = useParams();
  return (
    <>
      <h2>
        useParams Hooks {fname} {lname}
      </h2>
    </>
  );
}


// before hooks - old way
/* const useParamsHooks = ({ match }) => {
  return (
    <>
      <h2>useParams Hooks {match.params.fname}</h2>
    </>
  );
};
 */
export default useParamsHooks;
