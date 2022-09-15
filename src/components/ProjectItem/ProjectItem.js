import React from 'react';
import { Link } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';

const ProjectItem = ({ project_img_num, project_subtitle, project_title }) => {
   return (
      <>
         <div className="col-lg-4 col-md-6">
            <div className="tp-project z-index mb-30">
               <div className="tp-project-img">
                  <img src={`assets/img/project/project-tab-${project_img_num}.jpg`} className="img-fluid" alt="img not found" />
               </div>
            </div>
         </div>
      </>
   );
};

export default ProjectItem;