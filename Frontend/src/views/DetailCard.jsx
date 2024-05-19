import React from 'react'
import ProjectsCardView from "../components/ProjectsCard/new";
import { CheckCircleIcon, ClipboardDocumentCheckIcon, FolderOpenIcon } from "@heroicons/react/24/outline";


export default function DetailCard(props){
    return(<ProjectsCardView
          title={props.category}
        >
          
          <div className="my-6 flex justify-start items-center gap-4">
            <span className=" flex items-center justify-center rounded-full h-6 w-6 bg-teal-50">
              <span className=" flex items-center justify-center rounded-full h-6 w-6 bg-teal-50">
                <CheckCircleIcon className="h-5 w-5 text-primary" />
              </span>
            </span>

            <div className="flex flex-col">
              <span className="text-md font-normal text-gray-600 ml-2">
                Description: {props.description}<br></br>
                Contact Way : {props.contactway}<br></br>
                Contact : {props.contact}<br></br>
                {(props.casestatus)?`Case Status :${props.casestatus}<br></br>`:""}
              </span>
            </div>
          </div>
        </ProjectsCardView>);
}