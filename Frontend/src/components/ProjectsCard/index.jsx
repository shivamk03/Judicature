import { Link } from "react-router-dom";
import PropTypes from 'prop-types';



const ProjectsCard = ({ open, children, title }) => {
    ProjectsCard.propTypes = {
        open: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
        title: PropTypes.string.isRequired,
      };
    return (
      <div className="shadow-md bg-white rounded-xl w-z mr-2  ">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex  border-b w-full items-center">
              <h1 className="text-xl mb-4 font-medium leading-[1]">{title}</h1>
            </div>
            <div className="text-end"></div>
          </div>

          {children}
        </div>
        <hr></hr>

        <div className="flex justify-end p-4 font-semibold">
          {/* NEED TO FIX THIS ID */}
          <Link
            to={open ? open : "#"}
            className="text-primary font-semibold text-sm"
          >
            Open
          </Link>
        </div>
      </div>
    );
  };

export default ProjectsCard