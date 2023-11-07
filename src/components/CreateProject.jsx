import { create_project_url } from "@/api_utils";
import axios_instance from "@/axiosInstance";
import { useRef, useState } from "react";
import { LoadingModal } from "./LoadingModal";
import { get_cookie } from "./helperFunctions/Cookies";

export const CreateProject = ({
    handleCancelBtn,
    handleCreateBtn,
    isCreateProjectActive,
    }) => {
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [status, setStatus] = useState("");
    const [duration, setDuration] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [loading, setLoading] = useState(false);

    // handle error message
    const [errorMessage, setErrorMessage] = useState('');
    const [projectNameError, setProjectNameError] = useState(false)
    const [projectDescriptionError, setProjectDescriptionError] = useState(false)
    const [statusError, setStatusError] = useState(false)
    const [durationError, setDurationError] = useState(false)
    const [startDateError, setStartDateError] = useState(false)
    const [endDateError, setEndDateError] = useState(false)


  const CreateProject = () => {
    let user_login_details = get_cookie("ovasite_user");
    if (!projectName) {
        setProjectNameError(true)
        setErrorMessage("Input project name")
    } else if (!projectDescription) {
        setProjectNameError(false)
        setProjectDescriptionError(true)
        setErrorMessage("Input project description")
    } else if (!status) {
        setProjectDescriptionError(false)
        setStatusError(true)
        setErrorMessage("Select project status")
    } else if (!duration) {
        setStatusError(false)
        setDurationError(true)
        setErrorMessage("Input project duration")
    } else if (!startDate) {
        setDurationError(false)
        setStartDateError(true)
        setErrorMessage("Set start date")
    } else if (!endDate) {
        setStartDateError(false)
        setEndDateError(true)
        setErrorMessage("Set end date")
    } else {
        setErrorMessage('')
        setProjectNameError(false)
        setProjectDescriptionError(false)
        setStatusError(false)
        setDurationError(false)
        setStartDateError(false)
        setEndDateError(false)

        if (user_login_details) {
          setLoading(true)
          user_login_details = JSON.parse(user_login_details);
        
          let data = JSON.stringify({
          name: projectName,
          description: projectDescription,
          status: status,
          duration: duration,
          startdate: startDate,
          endDate: endDate,
          });
          let config = {
          method: "post",
          url: create_project_url,
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user_login_details.jwt}`,
          },
          data: data,
          };

          axios_instance
          .request(config)
          .then((response) => {
              console.log(JSON.stringify(response.data));
              setLoading(false)
          })
          .catch((error) => {
              console.log(error);
              setLoading(false)
          });
        }
    }
  };

  return (
    <>
    <div
      role="modal"
      aria-label="Create project"
      className={`fixed inset-0 top-0 bottom-0 left-0 right-0 rounded-md max-h-screen z-50 
        transition-all duration-500 ease-in-out bg-ova_grey
        ${isCreateProjectActive ? "opacity-100" : "opacity-0"}
        `}
    >
      <div className="bg-white border w-[96%] md:w-[50%] pb-8 mx-auto my-8 flex flex-col h-[90vh] overflow-y-scroll ">
        {/* header */}
        <div className="fixed flex flex-row justify-between px-[0.5rem] bg-ova_white h-16 w-[96%] md:w-[50%] border-b">
          <p className="text-center my-4 font-semibold text-[1em] md:text-[1.5em]">
            Create Project: Project details
          </p>
          <button className="" onClick={handleCancelBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M1 17L17 1M1 1L17 17"
                stroke="red"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* body */}
        <div className="flex flex-col px-[2rem] mt-20">
            <p className="text-red-500 p-4 md:p-8 text-center italic text-[1em] md:text[1.2em]">{errorMessage}</p>
          {/* project name */}
          <div className="flex flex-col">
            <label htmlFor="projectName" className=" text-[1em] md:text-[1.25rem]">
              Project Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter project name"
              id="projectName"
              className={`border-[1px] ${projectNameError ? 'border-red-500' : 'border-ova_grey_border' } p-[1rem] rounded-md`}
              onChange={(e) => setProjectName(e.target.value.trim())}
            />
          </div>

          {/* project description */}
          <div className="flex flex-col mt-[1rem]">
            <label htmlFor="projectDescription" className=" text-[1em] md:text-[1.25rem]">
              Project Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="projectDescription"
              id="projectDescription"
              cols="30"
              rows="5"
              placeholder="Enter a short decription about the project"
              className={`border-[1px] ${projectDescriptionError ? 'border-red-500' : 'border-ova_grey_border' } p-[1rem] rounded-md`}
              onChange={(e) => setProjectDescription(e.target.value.trim())}
            ></textarea>
          </div>

          {/* status and duration select options */}
          <div className="flex flex-col md:flex-row justify-between gap-2 mt-[1rem]">
            <div className="flex flex-col flex-grow">
              <label htmlFor="status" className=" text-[1em] md:text-[1.25rem]">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                name="status"
                id="status"
                className={`border-[1px] ${statusError ? 'border-red-500' : 'border-ova_grey_border' } p-[1rem] rounded-md`}
                onChange={(e) => setStatus(e.target.value.trim())}
              >
                <option value="">-Select status-</option>
                <option value="Success">Success</option>
                <option value="Failed">Failed</option>
                <option value="In Progress">In Progress</option>
              </select>
            </div>
            <div className="flex flex-col flex-grow">
              <label htmlFor="duration" className=" text-[1em] md:text-[1.25rem]">
                Expected duration <span className="text-red-500">*</span>
              </label>
              <input
                name="duration"
                id="duration"
                type="text"
                placeholder="Duration (e.g 2 weeks, 3 years)"
                className={`border-[1px] ${durationError ? 'border-red-500' : 'border-ova_grey_border' } p-[1rem] rounded-md md:text-[1.25em]::placeholder text-[1em]::placeholder`}
                onChange={(e) => setDuration(e.target.value.trim())}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-2 mt-[1rem]">
            <div className="flex flex-col flex-grow">
              <label htmlFor="startDate" className=" text-[1em] md:text-[1.25rem]">
                Start Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                placeholder="-Select Start Date-"
                className={`border-[1px] ${startDateError ? 'border-red-500' : 'border-ova_grey_border' } p-[1rem] rounded-md`}
                onChange={(e) => setStartDate(e.target.value.trim())}
              />
            </div>
            <div className="flex flex-col flex-grow">
              <label htmlFor="endDate" className=" text-[1em] md:text-[1.25rem]">
                End Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                placeholder="-Select End Date"
                className={`border-[1px] ${endDateError ? 'border-red-500' : 'border-ova_grey_border' } p-[1rem] rounded-md`}
                onChange={(e) => setEndDate(e.target.value.trim())}
              />
            </div>
          </div>

          <div className="flex flex-row justify-end">
            <button
              className="w-[96%] md:w-[30%] px-4 py-2 my-8 bg-peach_primary rounded-md text-white"
              onClick={CreateProject}
            >
              Create Project
            </button>
          </div>
        </div>
      </div>
    </div>

    {
        loading ? <LoadingModal title={"Creating Project"} description={"Please wait while your project is being setup"}/> : null
    }
    </>
  );
};
