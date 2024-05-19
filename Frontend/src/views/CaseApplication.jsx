import { useState,useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CaseContext from "../Context/caseContext";


const CaseApplication = () => {
  const context = useContext(CaseContext);
  const {createCase} = context;
  const navigate = useNavigate();
  const [state,setState] = useState({category :"", contactway:"", contact:"", description :""});
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(!localStorage.getItem('token')){
      alert("Please Login!");
      navigate('/Signin')
    }
    var ele = document.getElementsByName('category-selection');
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].checked)
        var value = ele[i].id;
        break;
    }
    if(value=='case-category-civil'){
      state.category= "Civil";
    }
    else if(value == 'case-category-criminal'){
      state.category = "Criminal"
    }
    else{
      state.category = "Corporate";
    }

    ele =  document.getElementsByName('contact-selection');
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].checked)
        value = ele[i].id;
        break;
    }
    if(value =='contact-phone-contact'){
      state.contactway = "Phone"; 
    }
    else{
      state.contactway= "Email";
    }
    state.description = document.getElementById('message').value;
    state.contact =  document.getElementById('contact').value;
    createCase(state.category,state.contactway,state.contact,state.description);
    alert("Case registered successfully");
    navigate('/Dashboard_client');
  }

  return (
    <div>
      <div className="m-10">
        <h1 className="text-center text-xl font-bold tracking-tight text-primary sm:text-4xl">
          Case Application
        </h1>
        <form className="mt-10">
          <div className="space-y-12">
              <>
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                  <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Case Details
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Kindly provide the necessary details required for
                      generating the application
                    </p>
                  </div>
                  <div className="max-w-2xl space-y-10 md:col-span-2">
                    <fieldset>
                      <legend className="text-sm font-semibold leading-6 text-gray-900">
                        Case Category
                      </legend>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        Please select a category as per your case:
                      </p>
                      <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                          <input
                            id="case-category-civil"
                            name="category-selection"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                          />
                          <label
                            htmlFor="case-category-civil"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Civil
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="case-category-criminal"
                            name="category-selection"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                          />
                          <label
                            htmlFor="case-category-criminal"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Criminal
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="case-category-corporate"
                            name="category-selection"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                          />
                          <label
                            htmlFor="case-category-corporate"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Corporate
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                  <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Contact Details
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Lawyers will find you from these contacts
                    </p>
                  </div>
                  <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                    <div className="col-span-6">
                    <div className="max-w-2xl space-y-10 md:col-span-2">
                    <fieldset>
                      <legend className="text-sm font-semibold leading-6 text-gray-900">
                        Contact Type
                      </legend>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        Please select a category as per your preference:
                      </p>
                      <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                          <input
                            id="contact-phone-contact"
                            name="contact-selection"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                          />
                          <label
                            htmlFor="contact-phone-contact"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Phone Contact
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="contact-email"
                            name="contact-selection"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                          />
                          <label
                            htmlFor="contact-email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Email
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <label
                          htmlFor="contact"
                          className="leading-7 text-sm text-primary font-bold"
                        >
                          Contact Information
                        </label>
                        <input
                          id="contact"
                          name="contact"
                          className="w-full bg-secondary bg-opacity-40 rounded border focus:bg-gray-200 focus:ring-2 focus:ring-primary text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        ></input>
                    </fieldset>
                  </div>
                    </div>
                    
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                  <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Case Description
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Describe your case
                    </p>
                  </div>
                  <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                    <div className="col-span-6">
                      <div className="relative">
                        <label
                          htmlFor="message"
                          className="leading-7 text-sm text-primary font-bold"
                        >
                          Case Description
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="w-full bg-secondary bg-opacity-40 rounded border focus:bg-gray-200 focus:ring-2 focus:ring-primary text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        ></textarea>
                        
                      </div>
                      
                    </div>
                    <div className=" w-full">
                        <Link to="/Dashboard_client">
                        <button type="submit" onClick={handleSubmit}
                        className="flex mx-auto text-amber-100 font-bold bg-secondary border-0 py-2 px-8 focus:outline-none hover:bg-gray-500 rounded text-lg"
                      >
                        Submit
                      </button>
                        </Link>
                      
                    </div>
                  </div>
                </div>
              </>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CaseApplication;
