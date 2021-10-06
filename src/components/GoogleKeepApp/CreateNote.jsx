import { useState } from "react";
import { GoPlus } from "react-icons/go";

const CreateNote = ({ passNote }) => {
  const [show, setShow] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    passNote(note);
    setNote({
      title: "",
      content: "",
    });
    setShow(false);
  };

  const showIt = () => {
    setShow(true);
  };

  return (
    <>
      <h4>Add Note</h4>
      <div className="row">
        <div className="col-4 offset-4">
          {/* <form> */}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              name="title"
              onChange={inputEvent}
              value={note.title}
              onClick={showIt}
            />
          </div>
          {show && (
            <>
              <div className="form-group">
                <textarea
                  placeholder="Write a note"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="content"
                  onChange={inputEvent}
                  value={note.content}
                ></textarea>
              </div>
              <button
                onClick={addEvent}
                type="submit"
                className="btn btn-primary"
              >
                <GoPlus />
              </button>
            </>
          )}
          {/* </form> */}
        </div>
      </div>
    </>
  );
};

export default CreateNote;
