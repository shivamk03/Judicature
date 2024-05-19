import {useState} from 'react';
import { Link,useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const [state, setState]= useState({firstname:"", lastname:"", email:"", password:"",confirmpassword:"", usertype:""});

  const handleChange = (event)=>{
    const value = event.target.value;
    setState({...state, [event.target.name]:value});
  }

  const handleSubmit = async(event)=>{
    event.preventDefault();
    state.usertype = document.getElementById('usertype').value;
    if(state.password!==state.confirmpassword){
      alert("Passwords don't match!");
    }
    else{
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: state.firstname,
        lastname: state.lastname,
        email: state.email,
        password: state.password,
        usertype:state.usertype
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.jwtToken);
      localStorage.setItem("usertype",json.usertype);
      if(localStorage.getItem('usertype')=="Client"){
        navigate("/Dashboard_client");
      }
      else{
        navigate("/Dashboard_lawyer")
      }
    } else if(!json.success){
      alert("Email already exists, Please Sign In");
      navigate("/Signin");
    }
    else{
      alert("Some error Occurred at Server, Please try again")
    }
    }
  }
  return (
    <div className="m-10">
      <h1 className="text-center text-xl font-bold tracking-tight text-primary sm:text-4xl">
        SIGN UP
      </h1>
      <form className="mt-10">
        <div className="space-y-12">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Type
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Please select whether you are a client/lawyer/admin
              </p>
            </div>
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div className="sm:col-span-3">
                <label
                  htmlFor="usertype"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  User Type
                </label>
                <div className="mt-2">
                  <select
                    id="usertype"
                    name="usertype"
                    autoComplete="user-type"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  >
                    <option value="Client">Client</option>
                    <option value="Lawyer">Lawyer</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div className="sm:col-span-3">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="confirmpassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    type="confirmpassword"
                    name="confirmpassword"
                    id="confirmpassword"
                    autoComplete="confirm-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link to="/">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          </Link>

          <Link to="/Dashboard_client"> 
          <button
            type="submit"
            onClick={handleSubmit}
            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Save
          </button>
          </Link>
          
        </div>
      </form>
    </div>
  );
};

export default Registration;
