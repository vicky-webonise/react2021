const LiveSearchResults = ({ name }) => {
  const imgSrc = `https://source.unsplash.com//1600x900/?${name}`;

  return (
    <>
      <h3>Live Search Results</h3>
      {/* <img src={imgSrc} alt={name} /> */}
      {name ? <img src={imgSrc} alt={name} /> : 'Please share'}
    </>
  );
};

export default LiveSearchResults;
