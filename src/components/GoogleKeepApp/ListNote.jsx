import { GoTrashcan } from "react-icons/go";

const ListNote = ({
  id = "",
  title = "",
  content = "",
  deleteItem = () => {},
}) => {

  const deleteNote = () => {
    deleteItem(id);
  };

  return (
    <>
      <div className="col-4">
        <div className={`card text-white bg-success mb-4`}>
          <div className="card-header">
            {id} {title}
          </div>
          <div className="card-body">
            <p className="card-text">{content}</p>
            <p className="card-text">
              <button
                onClick={deleteNote}
                type="submit"
                className="btn btn-primary"
              >
                <GoTrashcan />
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListNote;
