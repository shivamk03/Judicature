import { Link, useNavigate } from "react-router-dom";
import About from "./About";
import Card from "./Card";
const Home = () => {
  const navigate = useNavigate();

  const handleStart = (e)=>{
    e.preventDefault();
    if(!localStorage.getItem('token')){
      navigate('/SignIn');
    }
    else{
      if(localStorage.getItem('usertype')==="Client"){
        navigate('/Dashboard_client');
      }
      else{
        navigate('/Dashboard_lawyer');
      }
    }
  }
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-background px-6 pt-16 shadow-md sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 m-10">

        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Welcome to Judicature!
            <br />
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary">
            Your one stop solution to all legal needs.
            <br />
            You no longer need to go to the court to find the perfect lawyer or to
            file a case!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start ">
            <Link
              to="/SignIn"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white "
              onClick={handleStart}
            >
              Get Started <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 rounded-lg">
          <img
            src="/home.png"
            alt="Landing page image"
            className="w-full h-auto pt-16 pb-16"
          />
        </div>
      </div>
      <About/>
      <Card/>
    </div>
  );
};

export default Home;
