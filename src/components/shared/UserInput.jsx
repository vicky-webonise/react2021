import React from "react";
import PropTypes from "prop-types";

class UserInputErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="alert alert-danger" role="alert">
          Something went wrong in UserInput.
        </div>
      );
    }
    return this.props.children;
  }
}

const UserInputWrapped = (props) => {
  return (
    <UserInputErrorBoundary>
      <UserInput {...props} />
    </UserInputErrorBoundary>
  );
};

const UserInput = ({
  label,
  id,
  name,
  type,
  clsName,
  placeholder,
  errorMsg,
  isValid,
  onChange,
  val,
}) => {
  // useEffect(() => {
  //   throw new Error();
  // }, []);
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        className={clsName}
        id={id}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        value={val}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
      {isValid && <small className="form-text text-danger">{errorMsg}</small>}
    </div>
  );
};

UserInput.defaultProps = {
  id: "",
  name: "",
  label: "Input",
  type: "text",
  clsName: "inputClass",
  placeholder: "placeholder",
  value: "",
  onChange: () => {},
};

UserInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  clsName: PropTypes.string,
  placeholder: PropTypes.string,
  errorMsg: PropTypes.string,
  isValid: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default UserInputWrapped;
