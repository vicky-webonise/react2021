import { useState } from "react";

const Form = () => {

  const [name, setName] = useState('');
  const [onSubmitName, setOnSubmitName] = useState('');

  const inputEvent = (event) => {
    console.log('Event :');
    console.log(event);
    console.log('target :');
    console.log(event.target);
    console.log('value : ' + event.target.value);
    setName(event.target.value);
  };

  const showName = () => {
    setOnSubmitName(name);
  };

  return (
    <div>
      <h3>Form</h3>
      <h2>Hello {name} </h2>
      <h2>Hello {onSubmitName} </h2>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" placeholder="Name" onChange={inputEvent} value={name} />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <button type="submit" onClick={showName} className="btn btn-primary">
        Submit
      </button>
    </div>
  );
}

export default Form;
