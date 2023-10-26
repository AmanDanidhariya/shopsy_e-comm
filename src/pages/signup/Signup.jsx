import { useState } from "react";
import Joi from "joi";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";

//make schema for validation
const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(4).required(),
  image: Joi.string().uri().required(),
});

const Signup = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch();
  const defaultValue = {
    name: "",
    password: "",
    image: "",
  };
  const [values, setValues] = useState(defaultValue);
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    //update form values onChange
    setValues({ ...values, [name]: value.trim() });
  };

  const handleSignup = () => {
    // Validate the form data
    const { error } = schema.validate(values);

    if (error) {
      // Handle validation errors
      const validationErrors = {};
      error.details.forEach((detail) => {
        validationErrors[detail.path[0]] = detail.message;
      });
      // Update the state with validation errors
      setErrors(validationErrors);
    } else {
      // Validation passed, proceed with form submission
      const user = values;
      //store userData in localStorage
      localStorage.setItem("user", JSON.stringify(user));
      // Dispatch the setUser action to store the user in Redux state
      if (user) {
        dispatch(setUser(user));
      }
      navigate("/")
      // Clear previous validation errors
      setErrors({});
    }
  };

  return (
    <>
      <div className="text-center text-4xl font-bold mt-4">SignUp</div>
      <div className=" flex justify-center mt-10">
        <form className=" bg-blue-200 w-[500px] py-10  rounded-lg">
          {/* name field start */}
          <div className="flex mb-6">
            <div className="md:w-1/4 ">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1  md:mb-0 pr-4"
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
                value={values.name}
                onChange={onChange}
              />
              {errors.name && <span className="text-red-500 font-bold ">{errors.name}</span>}
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
                value={values.password}
                onChange={onChange}
              />
              {errors.password && <span className="text-red-500 font-bold">{errors.password}</span>}
            </div>
          </div>
          {/* password field end */}
          {/* image field start*/}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/4">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="image"
              >
                Image
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="image"
                type="text"
                placeholder="Image_url"
                name="image"
                value={values.image}
                onChange={onChange}
              />
            </div>
            {errors.image && <span className="text-red-500 font-bold">{errors.image}</span>}
          </div>
          {/* image field end*/}
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-green-900 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
