import Greeting from "./components/Greeting/Greeting";

const Home = () => {
  const fName = "Jon";
  const lName = "Deo";

  return (
    <>
      <Greeting fName={fName} lName={lName} />
    </>
  );
};

export default Home;
