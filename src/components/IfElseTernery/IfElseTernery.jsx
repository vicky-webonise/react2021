const IfElseTernery = () => {
  const TernaryComponent1 = function () {
    return <h1>If</h1>;
  };
  const TernaryComponent2 = function () {
    return <h1>else</h1>;
  };

  return (
    <>
      <h3>If Else Statement</h3>
      <h3>React Conditional Rendering | Ternary Operator </h3>
      {true ? "Agreed" : "Disagreed"}
      {false ? <TernaryComponent1 /> : <TernaryComponent2 />}
      {true && <div>true</div>}
      {true && <TernaryComponent1 />}
    </>
  );
}

export default IfElseTernery;
