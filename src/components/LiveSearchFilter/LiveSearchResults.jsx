const LiveSearchResults = ({ name }) => {
  const imgSrc = `https://source.unsplash.com/800x450/?${name}`;

  return (
    <>
      <h3>Image Results</h3>
      {/* <img src={imgSrc} alt={name} /> */}
      {name ? <img src={imgSrc} alt={name} width="600" height="400"/> : 'Please search keyword (like - water, computer)'}
    </>
  );
};

export default LiveSearchResults;
