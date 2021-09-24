import Greeting from "./Greeting";

const Home = () => {
  const fname = "Vicky";
  const lname = "Shinde";

  const styleObj = {
    color: "blue",
    textTransform: "uppercase",
    fontWeight: "bold",
  };

  return (
    <>
        <Greeting />
        <p contentEditable="true">
          My name is {fname} {lname}
        </p>
        <p style={{ color: "red", textTransform: "uppercase" }}>
          My name is {fname + " " + lname}{" "}
        </p>
        <p style={styleObj}>My name is {`${fname} ${lname}`} </p>
    </>
  );
};

export default Home;
