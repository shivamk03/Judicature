import { useState } from "react";
import CaseContext from "./caseContext";

const CaseState= (props)=>{
    const [state,setState] = useState({cases:[]}); 

    const fetchAllCases = async ()=>{
      const url =`${import.meta.env.VITE_SERVER_URL}/api/case/fetchcases`
        const response = await fetch(url, {
          method: "GET",
          headers: { 
            "Content-Type": "application/json", 
            "auth-token":localStorage.getItem('token')
          }
        });
        let data = await response.json();
        let user = state.usertype;
        setState({cases:data,usertype:user});
        return data;
    }

  
    const fetchOpenCases = async()=>{
      const url =`${import.meta.env.VITE_SERVER_URL}/api/case/fetchcases/open`
        const response = await fetch(url, {
          method: "GET",
          headers: { 
            "Content-Type": "application/json", 
            "auth-token":localStorage.getItem('token')
          }
        });
        let data = await response.json();
        console.log(data);
        let user = state.usertype;
        setState({cases:data,usertype:user});
        return data;
    }
    const fetchAllCasesLawyer = async()=>{
      const url =`${import.meta.env.VITE_SERVER_URL}/api/case/fetchcases/lawyer`
        const response = await fetch(url, {
          method: "GET",
          headers: { 
            "Content-Type": "application/json", 
            "auth-token":localStorage.getItem('token')
          }
        });
        let data = await response.json();
        let user = state.usertype;
        setState({cases:data,usertype:user});
        return data;
    }



    const createCase = async(category,contactway,contact,description) =>{
        const url =`${import.meta.env.VITE_SERVER_URL}/api/case/newcase`
        const response = await fetch(url, {
          method: "POST",
          headers: { 
            "Content-Type": "application/json", 
            "auth-token":localStorage.getItem('token')
          },
          body: JSON.stringify({category,contactway,contact,description})
        });
    }
    return(<CaseContext.Provider value={{createCase,state,fetchAllCases,fetchOpenCases,fetchAllCasesLawyer}}>
        {props.children}
    </CaseContext.Provider>);
}

export default CaseState;