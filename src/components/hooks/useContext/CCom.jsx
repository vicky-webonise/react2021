
import { useContext } from 'react';
import { BioData, ObjData } from "./HooksUseContext";

const CCom = () => {
  const name = useContext(BioData);
  const userObj = useContext(ObjData);
  console.log(name);
  console.log(userObj);
  return (
    <div>
      <h1>CCom</h1>
      <h1>from Main component to CCom = {name}</h1>
      <h1>from Main component to CCom object = </h1>
      <h5>
        {userObj.fname}, {userObj.lname}, {userObj.gender}
      </h5>
    </div>
  );
};

export default CCom;
