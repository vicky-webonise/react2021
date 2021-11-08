import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { editUser, getUsers } from "../../config/api-endpoints";
import SubmitButtonWrapped from "../shared/SubmitButton";
import UserInputWrapped from "../shared/UserInput";

const initialValues = {
  name: "",
  email: "",
  contact: "",
  password: "",
};

const UserEdit = () => {
  const history = useHistory();

  const { id } = useParams();

  const [userObj, setUserObj] = useState(initialValues);

  const { name, email, contact, password } = userObj;

  const [isInputValid, setIsInputValid] = useState({
    isNameValid: false,
    isEmailValid: false,
    isContactValid: false,
    isPasswordValid: false,
  });

  const { isNameValid, isEmailValid, isContactValid, isPasswordValid } =
  isInputValid;

  const [isDisabled, setIsDisabled] = useState(false);


  useEffect(() => {
    const loadUserData = async () => {
      const response = await getUsers(id);
      setUserObj(response.data);
    };
    loadUserData();
  }, [id]);

  const onNameChange = (name) => {
    if (name.length < 4) {
      setIsInputValid({
        ...isInputValid,
        isNameValid: true,
      });
      setIsDisabled(false);
    } else {
      setIsInputValid({
        ...isInputValid,
        isNameValid: false,
      });
      setIsDisabled(
        isNameValid && isEmailValid && isContactValid && isPasswordValid
      );
    }
    setUserObj({
      ...userObj,
      name: name,
    });
  };

  const onContactChange = (contact) => {
    if (contact.length < 10) {
      setIsInputValid({
        ...isInputValid,
        isContactValid: true,
      });
      setIsDisabled(false);
    } else {
      setIsInputValid({
        ...isInputValid,
        isContactValid: false,
      });
      setIsDisabled(
        isNameValid && isEmailValid && isContactValid && isPasswordValid
      );
    }
    setUserObj({
      ...userObj,
      contact: contact,
    });
  };

  const onEmailChange = (email) => {
    // console.log(email);
    let validEmail = new RegExp(
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g
    ).test(email);

    // email is typing
    if (email) {
      setIsInputValid({
        ...isInputValid,
        isEmailValid: true,
      });
      setIsDisabled(false);
    }

    // check email format
    if (validEmail) {
      setIsInputValid({
        ...isInputValid,
        isEmailValid: false,
      });
      setIsDisabled(
        isNameValid && isEmailValid && isContactValid && isPasswordValid
      );
    }
    setUserObj({
      ...userObj,
      email: email,
    });
  };
  const onPasswordChange = (password) => {
    var validPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password);
    if (validPass) {
      setIsInputValid({
        ...isInputValid,
        isPasswordValid: false,
      });
      setIsDisabled(
        !setIsDisabled(
          isNameValid && isEmailValid && isContactValid && isPasswordValid
        )
      );
    } else {
      setIsInputValid({
        ...isInputValid,
        isPasswordValid: true,
      });
      setIsDisabled(false);
    }
    setUserObj({
      ...userObj,
      password: password,
    });
  };

  const editUserDetails = async () => {
    await editUser(id, userObj);
  };

  const onSubmitClick = (e) => {
    e.preventDefault();
    editUserDetails(userObj);
    console.log(userObj);
    history.push("/user-listing");
  };
  return (
    <>
      <h2>Edit Add</h2>
      <form onSubmit={onSubmitClick}>
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <UserInputWrapped
              label="Name"
              id="name"
              name="name"
              type="text"
              clsName="form-control"
              placeholder="Enter name"
              errorMsg={"Please enter name min 4 character"}
              isValid={isNameValid}
              onChange={onNameChange}
              val={name}
            />
            <UserInputWrapped
              label="Email address"
              id="email"
              name="email"
              type="email"
              clsName="form-control"
              placeholder="Enter email"
              errorMsg={"Please enter valid email id"}
              isValid={isEmailValid}
              onChange={onEmailChange}
              val={email}
            />
            <UserInputWrapped
              label="Contact"
              id="contact"
              name="contact"
              type="number"
              clsName="form-control"
              placeholder="Enter contact no"
              errorMsg={"Please enter valid contact no"}
              isValid={isContactValid}
              onChange={onContactChange}
              val={contact}
            />
            <UserInputWrapped
              label="Password"
              id="password"
              name="password"
              type="password"
              clsName="form-control"
              placeholder="Enter password"
              errorMsg={
                "Please enter min 8 character, least one digit, one lowercase, one uppercase"
              }
              isValid={isPasswordValid}
              onChange={onPasswordChange}
              val={password}
            />
            <SubmitButtonWrapped
              disabled={!isDisabled}
              title="Submit"
              clsName="btn btn-primary mb-4 mr-4"
            />
            <SubmitButtonWrapped
              title="< Back"
              clsName="btn btn-primary mb-4"
              onClick={() => {
                history.push("/user-listing");
              }}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default UserEdit;
