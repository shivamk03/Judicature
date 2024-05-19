import { Link, useNavigate } from "react-router-dom"

const About = () => {
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
        navigate('/Dashboard_client');
      }
    }
  }

  return (
    <div>
        <div className="mx-auto max-w-2xl py-20 sm:py-20 lg:py-10">
        <div className="text-center">
            <h1 className="text-xl font-bold tracking-tight text-secondary sm:text-4xl">
              Empowering clients to connect with lawyers of their choice
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Judicature is a web-based platform that provides a seamless and user-friendly experience for clients to connect with lawyers. Whether you need legal advice, representation, or assistance with legal documents, CaseEase is here to help. Our platform simplifies the process of finding and hiring a lawyer, making it accessible to everyone.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/SignIn"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                onClick={handleStart}
              >
                Get started
              </Link>
              <Link to="/Features" className="text-sm font-semibold leading-6 text-secondary">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About