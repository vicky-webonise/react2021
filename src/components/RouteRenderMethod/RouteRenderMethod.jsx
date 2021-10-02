const RouteRenderMethod = ({name, surname, age}) => {
  return (
    <>
      <h3>Hi, name, surname, age is the props from Route</h3>
      <h2>Name : {name}</h2>
      <h2>surname : {surname}</h2>
      <h2>age : {age}</h2>
    </>
  );
}

export default RouteRenderMethod;


