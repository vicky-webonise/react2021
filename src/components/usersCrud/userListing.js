import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Loading from "../shared/Loading";
import { getUsers, deleteUser } from "../../config/api-endpoints";
import SubmitButtonWrapped from "../shared/SubmitButton";

const UserListing = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
    setLoading(false);
  }

  useEffect(() => {
    getAllUsers();
    // alert('hi')
  }, []);

  const handleDelete =  async (id) => {
    if (window.confirm("Are you wanted to delete the User")) {
      await deleteUser(id);
      getAllUsers();
    }
  }

  return (
    <>
      <h2>User Listing</h2>
      {loading ? (
        <Loading />
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td>{item.password}</td>
                  <td>
                    <SubmitButtonWrapped
                      // disabled={!isDisabled}
                      title="Edit"
                      clsName="btn btn-danger ml-1"
                      onClick={() => {
                        history.push(`/user-edit/${item.id}`);
                      }}
                    />
                    <SubmitButtonWrapped
                      // disabled={!isDisabled}
                      title="X"
                      clsName="btn btn-danger ml-1"
                      onClick={() => handleDelete(item.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default UserListing;
