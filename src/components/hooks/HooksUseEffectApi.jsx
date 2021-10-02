import { useEffect, useState } from "react";
import Loading from '../shared/Loading';

const HooksUseEffectApi = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // const [usersWithClass, setUsersWithClass] = useState([]);
  // const clsName = ["red", "blue", "green", "yellow"];

  // const randclsName = () => { users.map((user) => {
  //   // console.log(user);
  //   clsName.forEach((cls) => {
  //     // console.log(cls);
  //     (user.newClass = cls);
  //   })
  //   return user;
  //   });
  // }
  // randclsName();

  // const newArr = users.map((user) => ({ ...user, newClass: "myClass" }));

  const getUser = async () => {
    // console.log("useEffect");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      const data = await response.json();
      console.log(data);
      setUsers(data);
      setLoading(false);

    } catch (error) {
      console.log('error - ' + error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  // if (loading) {
  //   return <div>Loading</div>
  // }

  return (
    <div>
      <h3>Github Users with Fetch API</h3>
      <div className="row">
        {loading ? (
          <Loading />
        ) : (
          <UserLoop users={users}/>
        )}
      </div>
    </div>
  );
}

export default HooksUseEffectApi;


const UserLoop = ({ users }) => {
  return (
    <>
      {users.map((user) => {
        const {
          id,
          name,
          username,
          email,
          website,
          address,
          company,
          newClass,
        } = user;
        return (
          <div className="col-4" key={id}>
            <div
              className={`card text-white bg-success mb-4 ${newClass}`}
            >
              <div className="card-header">
                {name} ({username})
              </div>
              <div className="card-body">
                <h5 className="card-title">{email}</h5>
                <p className="card-text">Website - {website}</p>
                <p className="card-text">address - {address.city}</p>
                <p className="card-text">company - {company.name}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  )
}
