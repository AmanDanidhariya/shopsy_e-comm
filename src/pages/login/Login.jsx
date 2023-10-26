import { useState } from "react";
import Joi from "joi";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(4).required(),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const defaultValue = {
    name: "",
    password: "",
  };
  //get Field values
  const [credentials, setCredentials] = useState(defaultValue);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorList, setErrorList] = useState("");
  // const [errors, setErrors] = useState({});

  //update form values onChange
  const onChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value.trim() });
  };

  const handleLogin = () => {
    const { error } = schema.validate(credentials);
    const existUser = JSON.parse(localStorage.getItem("user"));

    if (error) {
      // Handle validation errors
      const validationErrors = {};
      error.details.forEach((detail) => {
        validationErrors[detail.path[0]] = detail.message;
      });
      // Update the state with validation errors
      setErrorList(validationErrors);
    } else {
      if (
        existUser.email === credentials.email &&
        existUser.password === credentials.password
      ) {
        navigate("home");
        dispatch(setUser(existUser));
      } else {
        setIsLoggedIn(false);
        setErrorList("userDoes not exist");
      }
    }
  };

  return (
    <>
      <div className="text-center text-4xl font-bold mt-4">Login</div>
      <div className="  flex justify-center mt-10">
        <form className=" bg-blue-200 max-w-sm w-3/4 py-8 pr-8 rounded-lg">
          {/* name field start */}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/4">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="fullName"
              >
                Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="fullName"
                type="text"
                name="name"
                value={credentials.name}
                onChange={onChange}
              />
              {errorList.name && (
                <span className="text-red-500 font-bold ">
                  {errorList.name}
                </span>
              )}
            </div>
          </div>
          {/* name field end */}
          {/* password field start */}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/4">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="password"
                type="password"
                placeholder="******"
                name="password"
                value={credentials.password}
                onChange={onChange}
              />
              {errorList.password && (
                <span className="text-red-500 font-bold ">
                  {errorList.password}
                </span>
              )}
            </div>
          </div>
          {/* password field end */}
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-green-900 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
          <p className="text-center mt-3">
            if you are not Registered.{" "}
            <span>
              <Link
                to="signup"
                className="text-indigo-600 text-lg hover:text-blue-900"
              >
                Signup
              </Link>
            </span>
          </p>
        </form>
      </div>
      <div className="text-center mt-4 text-black">
        {isLoggedIn ? errorList : ""}
      </div>
    </>
  );
};

export default Login;
