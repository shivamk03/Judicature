import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
    const navigate= useNavigate();
    const [state,setState] = useState({email:" ", password:""});
    const handleSelectChange = (event) => {
      const value = event.target.value;
      setState({...state, [event.target.name]:value});
    };

    const handleSubmit = async(event)=>{
      event.preventDefault();
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: state.email, password: state.password }),
    });

    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.jwtToken);
      localStorage.setItem('usertype',json.usertype);
      if(json.usertype=="Client"){
        navigate("/Dashboard_client");
      }
      else{
        navigate("/Dashboard_lawyer")
      }
    } else {
      alert("Enter the correct credentials");
    }
    };
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              style={{height:"150px"}}
              src="/logo.png"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Log in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={handleSelectChange}
                    className="w-full bg-secondary bg-opacity-40 rounded border focus:bg-gray-200 focus:ring-2 focus:ring-primary text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-primary">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleSelectChange}
                    autoComplete="current-password"
                    required
                    className="w-full bg-secondary bg-opacity-40 rounded border focus:bg-gray-200 focus:ring-2 focus:ring-primary text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-amber-100 shadow-sm  hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link to="/Registration" className="font-semibold leading-6 text-primary hover:text-amber-300">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }
  