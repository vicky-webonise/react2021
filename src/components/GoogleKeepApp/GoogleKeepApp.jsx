import {useState } from 'react';
import CreateNote from './CreateNote';
import ListNote from './ListNote';

const GoogleKeepApp = () => {

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  }

  const onDelete = (id) => {
    setAddItem((oldDataNwe) => oldDataNwe.filter ((curItem, index) => {
      return index !== id;
    })

    );
  };

  return (
    <>
      <h1>Google Keep App</h1>
      <CreateNote passNote={addNote} />
      <h1>List Note</h1>
      <div className="row">
        {addItem.map((item, index) => {
          return (
            <ListNote
              id={index}
              key={index}
              title={item.title}
              content={item.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
    </>
  );
}

export default GoogleKeepApp;
