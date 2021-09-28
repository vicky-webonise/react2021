import { useState } from "react/cjs/react.development";
import LiveSearchResults from "./LiveSearchResults";

const LiveSearchFilter = () => {
  const [img, setImg] = useState('');

  const inputEvent = (event) => {
    const inputText = event.target.value;

    console.log(inputText);

    setImg(inputText);
  }

  return (
    <>
      <h3>Live Search Filter</h3>
      <div className="form-group">
        <label>Search</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          onChange={inputEvent}
          value={img}
        />
      </div>
      {/* {img ? <LiveSearchResults name={img} /> : "Please share"} */}
      <LiveSearchResults name={img} />
    </>
  );
}

export default LiveSearchFilter;
