import { CheckCircleIcon, ClipboardDocumentCheckIcon, FolderOpenIcon } from "@heroicons/react/24/outline";
import ProjectsCard from "../components/ProjectsCard";

const Dashboard_client = () => {
    
  return (
    <div>
        <div className="grid grid-cols-2 gap-4 m-10">
        <ProjectsCard
          title={"Case Application"}
          open={`/CaseApplication`}
        >
          <div className="my-6 flex justify-start items-center gap-4">
            <span className=" flex items-center justify-center rounded-full h-6 w-6 bg-teal-50">
              <span className=" flex items-center justify-center rounded-full h-6 w-6 bg-teal-50">
                <FolderOpenIcon className="h-5 w-5 text-primary" />
              </span>
            </span>

            <div className="flex flex-col">
              <span className="text-md font-normal text-gray-600 ml-2">
                Open new case applications.
              </span>
            </div>
          </div>
        </ProjectsCard>
        <ProjectsCard
          title={"Case Status"}
          open={`/case_status`}
        >
          <div className="my-6 flex justify-start items-center gap-4">
            <span className=" flex items-center justify-center rounded-full h-6 w-6 bg-teal-50">
              <span className=" flex items-center justify-center rounded-full h-6 w-6 bg-teal-50">
              <FolderOpenIcon className="h-5 w-5 text-primary" />
              </span>
            </span>

            <div className="flex flex-col">
              <span className="text-md font-normal text-gray-600 ml-2">
                Check Case status
              </span>
            </div>
          </div>
        </ProjectsCard>
        <ProjectsCard
          title={"Opened Case Applications"}
          open={`/open_applications`}
        >
          
          <div className="my-6 flex justify-start items-center gap-4">
            <span className=" flex items-center justify-center rounded-full h-6 w-6 bg-teal-50">
              <span className=" flex items-center justify-center rounded-full h-6 w-6 bg-teal-50">
                <CheckCircleIcon className="h-5 w-5 text-primary" />
              </span>
            </span>

            <div className="flex flex-col">
              <span className="text-md font-normal text-gray-600 ml-2">
                Check Opened Case Applications
              </span>
            </div>
          </div>
        </ProjectsCard>
        <ProjectsCard
          title={"Chatroom"}
          open={`/`}
        >
          
          <div className="my-6 flex justify-start items-center gap-4">
            <span className=" flex items-center justify-center rounded-full h-6 w-6 bg-teal-50">
              <span className=" flex items-center justify-center rounded-full h-6 w-6 bg-teal-50">
                <ClipboardDocumentCheckIcon className="h-5 w-5 text-primary" />
              </span>
            </span>

            <div className="flex flex-col">
              <span className="text-md font-normal text-gray-600 ml-2">
                Check Messages
              </span>
            </div>
          </div>
        </ProjectsCard>
      </div>
    </div>
  )
}

export default Dashboard_client