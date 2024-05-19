import PropTypes from 'prop-types';



const ProjectsCardView = ({ open, children, title }) => {
    ProjectsCardView.propTypes = {
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

      </div>
    );
  };

export default ProjectsCardView