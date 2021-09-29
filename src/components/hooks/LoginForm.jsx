import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const formSubmit = (event) => {
    event.preventDefault();

    if(email && pass) {
      const newEntry = {
        id: new Date().getTime().toString(),
        email: email,
        pass: pass,
      };

      setAllEntry([...allEntry, newEntry]);
      setEmail('');
      setPass('');

      console.log(allEntry);
    } else {
      alert("Plz fill the data");
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={formSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(event) => {
              setPass(event.target.value);
            }}
            value={pass}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div>{allEntry.map((item) => {
        const {id, email, pass} = item;
        return <p key={id}>Email - {email}, Password - {pass}</p>
      })}</div>
    </div>
  );
};

export default LoginForm;
