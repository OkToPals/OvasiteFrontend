import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { AttachEmployeeModal } from "./AttachEmployeeModal";
import { ConfirmActionModal } from "./ConfirmActionModal";
import { EditProjectModal } from "./EditProjectModal";
import ExportProjectModal from "./ExportProjectModal";

export const ProjectCard = ({ id, title, description, AttachAnEmployee, status, startDate, endDate, index, goToProject }) => {
  
  const [isDropdown, setIsDropdown] = useState(false);
  const [toggleAttachEmployee, setToggleAttachEmployee] = useState(false);
  const [toggleDeleteProject, setToggleDeleteProject] = useState(false)
  const [toggleEditProject, setToggleEditProject] = useState(false)
  const [toggleExportProject, setToggleExportProject] = useState(false)

  const ToggleAttachEmployee = () => {
    setToggleAttachEmployee(!toggleAttachEmployee)
  }

  const ToggleDeleteProject = () => {
    setToggleDeleteProject(!toggleDeleteProject)
  }

  const ToggleEditProject = () => {
    setToggleEditProject(!toggleEditProject)
  }
  const ToggleExportProject = () => {
    setToggleExportProject(!toggleExportProject)
  }

  const ToggleDropDown = () => {
    setIsDropdown(!isDropdown)
  }

  return (
    <article className="w-[100%] relative h-[13rem] shadow-sm p-4 bg-mobile-card-bg border-[#ddd] border rounded-lg mb-4"
      onClick={goToProject}
    >
      {/* options button */}
      <div className="relative">
        <button
          className="absolute right-0 top-0 font-bold p-2"
          aria-label="Open context menu"
          aria-haspopup="true"
          aria-expanded={isDropdown}
          onClick={ToggleDropDown}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3.25C8.41421 3.25 8.75 2.91421 8.75 2.5C8.75 2.08579 8.41421 1.75 8 1.75C7.58579 1.75 7.25 2.08579 7.25 2.5C7.25 2.91421 7.58579 3.25 8 3.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 8.75C8.41421 8.75 8.75 8.41421 8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 14.25C8.41421 14.25 8.75 13.9142 8.75 13.5C8.75 13.0858 8.41421 12.75 8 12.75C7.58579 12.75 7.25 13.0858 7.25 13.5C7.25 13.9142 7.58579 14.25 8 14.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {isDropdown && (
          <div
            className="absolute w-44 bg-white p-4 rounded-sm transition-all 
          duration-300 ease-in shadow right-0 top-4 list-none"
            role="menu"
          >
            <div className="relative">

              <button className="absolute top-0 right-0 w-6 h-6 font-semibold " onClick={ToggleDropDown}>
                
              </button>

                {/* attach an employee/team member */}
                <li className="py-1">
                  <button
                    aria-label="Edit button"
                    className="flex flex-row items-center outline-none text-[1em]  border-none"
                    onClick={ToggleAttachEmployee}
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 448 512"
                      >
                        <path d="M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z" 
                          stroke="gray"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    
                    <span>Attach Employee</span>
                  </button>
                </li>

                {/* edit button */}
                <li className="py-1">
                  <button
                    aria-label="Edit button"
                    className="flex flex-row items-center outline-none text-[1em]  border-none"
                    onClick={ToggleEditProject}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <path
                        d="M14.6739 6.66666H8.00724C7.3 6.66666 6.62172 6.94761 6.12162 7.44771C5.62153 7.9478 5.34058 8.62608 5.34058 9.33333V24C5.34058 24.7072 5.62153 25.3855 6.12162 25.8856C6.62172 26.3857 7.3 26.6667 8.00724 26.6667H22.6739C23.3812 26.6667 24.0594 26.3857 24.5595 25.8856C25.0596 25.3855 25.3406 24.7072 25.3406 24V17.3333M23.4552 4.78133C23.7012 4.52663 23.9955 4.32348 24.3208 4.18372C24.6462 4.04396 24.9961 3.9704 25.3502 3.96732C25.7043 3.96425 26.0554 4.03172 26.3831 4.1658C26.7108 4.29988 27.0086 4.49789 27.259 4.74827C27.5093 4.99865 27.7074 5.29639 27.8414 5.62412C27.9755 5.95184 28.043 6.30298 28.0399 6.65706C28.0368 7.01114 27.9633 7.36106 27.8235 7.6864C27.6838 8.01175 27.4806 8.306 27.2259 8.55199L15.7779 20H12.0072V16.2293L23.4552 4.78133Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Edit</span>
                  </button>
                </li>

                {/* delete button */}
                <li className="py-1">
                  <button
                    aria-label="Delete button "
                    className="flex flex-row items-center outline-none text-[1em]  border-none"
                    onClick={ToggleDeleteProject}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_124_9141)">
                        <path
                          d="M26.674 6.66666C27.0276 6.66666 27.3668 6.80713 27.6168 7.05718C27.8668 7.30723 28.0073 7.64637 28.0073 7.99999C28.0073 8.35361 27.8668 8.69275 27.6168 8.9428C27.3668 9.19285 27.0276 9.33332 26.674 9.33332H25.3407L25.3367 9.42799L24.0927 26.856C24.0448 27.5288 23.7437 28.1584 23.2501 28.6181C22.7566 29.0778 22.1071 29.3333 21.4327 29.3333H10.5807C9.90618 29.3333 9.25675 29.0778 8.76317 28.6181C8.2696 28.1584 7.96855 27.5288 7.92066 26.856L6.67666 9.42932C6.67464 9.39736 6.67375 9.36534 6.67399 9.33332H5.34066C4.98704 9.33332 4.6479 9.19285 4.39785 8.9428C4.1478 8.69275 4.00732 8.35361 4.00732 7.99999C4.00732 7.64637 4.1478 7.30723 4.39785 7.05718C4.6479 6.80713 4.98704 6.66666 5.34066 6.66666H26.674ZM22.67 9.33332H9.34466L10.582 26.6667H21.4327L22.67 9.33332ZM18.674 2.66666C19.0276 2.66666 19.3668 2.80713 19.6168 3.05718C19.8668 3.30723 20.0073 3.64637 20.0073 3.99999C20.0073 4.35361 19.8668 4.69275 19.6168 4.9428C19.3668 5.19285 19.0276 5.33332 18.674 5.33332H13.3407C12.987 5.33332 12.6479 5.19285 12.3978 4.9428C12.1478 4.69275 12.0073 4.35361 12.0073 3.99999C12.0073 3.64637 12.1478 3.30723 12.3978 3.05718C12.6479 2.80713 12.987 2.66666 13.3407 2.66666H18.674Z"
                          fill="#FF595A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_124_9141">
                          <rect
                            width="32"
                            height="32"
                            fill="white"
                            transform="translate(0.00732422)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span> Delete</span>
                  </button>
                </li>

                {/* share button*/}
                <li className="py-1">
                <button
                  aria-label="Share button"
                  className="flex flex-row items-center outline-none text-[1em] border-none"
                  onClick={ToggleExportProject}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <path
                      d="M18.674 6.66666V12C9.34066 13.3333 5.34066 20 4.00732 26.6667C7.34066 22 12.0073 19.8667 18.674 19.8667V25.3333L28.0073 16L18.674 6.66666ZM21.3407 13.1067L24.234 16L21.3407 18.8933V17.2H18.674C15.914 17.2 13.434 17.7067 11.1273 18.4667C12.994 16.6133 15.394 15.16 19.0473 14.6667L21.3407 14.3067V13.1067Z"
                      fill="#2626F1"
                    />
                  </svg>
                  <span>Share</span> 
                </button>
                </li>
              </div>
          </div>
        )}
      </div>
      <h2 className="max-w-[80%] text-left mt-1 overflow-hidden whitespace-nowrap text-ellipsis font-bold my-[0.5rem] text-[0.75em]">
        {index} <span className=" text-card-span-text">Project Name: </span> {title}
      </h2>
      <p className="max-w-[80%] line-clamp-3 text-left my-[0.5rem] overflow-hidden whitespace-normal  text-[0.75em]">
        <span className=" text-card-span-text">Description: </span>{description}
      </p>

      {/*  project status*/}
      <div role="status" aria-label="Project Status" className="">
        {/* date div */}
        <div className="flex flex-col justify-between">
          <p className="text-[0.75em] my-[0.5rem]"><span className=" text-card-span-text">Start Date: </span>{startDate}</p>
          <p className="text-[0.75em] my-[0.5rem]"><span className=" text-card-span-text">Due Date: </span>{endDate}</p>
        </div>
        {/* progress */}
        <div className="flex flex-col-reverse">
          {/* progress bar */}
          <div>
             <span className=" text-card-span-text text-[0.75em] my-[0.5rem]">Status: {status}</span> 
            {/* <progress
              id="poject_progress_percentage"
              value="32"
              max="100"
              className=" h-3 rounded-full text-[0.75em] bg-progress-bar" 
            >
              32%
            </progress> */}
          </div>
          {/* progress status */}
          {/* <p className="text-[12px]">Status: <span className="text-orange-600" >In Progress</span></p> */}
        </div>
      </div>

      {
        toggleAttachEmployee ? <AttachEmployeeModal /> : null
      }
      
      {
        toggleDeleteProject ? <ConfirmActionModal /> : null
      }
      
      {
        toggleEditProject ? <EditProjectModal /> : null
      }

      {
        toggleExportProject ? <ExportProjectModal /> : null
      }

    </article>
  );
};
