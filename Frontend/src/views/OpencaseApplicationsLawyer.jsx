import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DetailCard from "./DetailCard";
import CaseContext from "../Context/caseContext";

export default function OpenCaseApplications(){
    const {fetchAllCasesLawyer,state} = useContext(CaseContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if (!localStorage.getItem("token")) {
            const timeout = setTimeout(() => navigate("/login"),0);
            return () => clearTimeout(timeout);
          }
          fetchAllCasesLawyer();
    },[]);
    return(<div>
        <h1 className="text-center text-xl font-bold tracking-tight text-primary sm:text-4xl">
        OPENED APPLICATIONS FOR LAWYERS
      </h1>
        <div className="grid grid-cols-2 gap-4 m-10 h-100">
            {state.cases.map((ele)=>{
                return (<DetailCard  category = {ele.category} description = {ele.description} contactway= {ele.contactway} contact = {ele.contact} key ={ele._id}/>);
            })}
        </div>
    </div>);
}