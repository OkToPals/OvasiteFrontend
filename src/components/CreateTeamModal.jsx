import { base_url } from '@/api_utils';
import axios_instance from '@/axiosInstance';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { LoadingModal } from './LoadingModal';
import { useState } from 'react';
import { get_cookie } from './helperFunctions/Cookies';

export const CreateTeamModal = ({handleCancelBtn, handleCreateBtn, isCreateTeamActive, orgId}) => {

    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [nameError, setNameError] = useState(false)

    const CreateTeam = () => {

        console.log(orgId);

        if (!name) {
            setNameError(true)
            setErrorMessage("Insert team name")
        } else {
            setErrorMessage('')
            setNameError(false)

            let user_login_details = get_cookie("ovasite_user");

            if (user_login_details) {
                setLoading(true)
                user_login_details = JSON.parse(user_login_details);
            
                let data = JSON.stringify({
                name: name
                });
                let config = {
                method: "post",
                url: `${base_url}/orgs/${orgId}/teams`,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user_login_details.jwt}`,
                },
                data: data,
                };
        
                axios_instance
                .request(config)
                .then((response) => {
                    setLoading(false)
                    console.log(JSON.stringify(response.data));
                    toast.success("Organization created successfully!")
                    setTimeout(() => {
                        window.location.reload();
                      }, 5000);

                })
                .catch((error) => {
                    console.log(error.response);
                    setLoading(false)
                    toast.error(`${error.response.data.message}`)
                });
            }
        }
    }

    return (
      <div role="modal" aria-label="Create project" 
        className={`fixed inset-0 top-0 bottom-0 left-0 right-0 rounded-md max-h-screen z-50 
        transition-all duration-500 ease-in-out bg-ova_grey
        ${isCreateTeamActive ? 'opacity-100' : 'opacity-0'}
        `}>
        <div className="bg-white border w-[96%] md:w-[50%] pb-8 mx-auto my-8 flex flex-col h-[90vh] overflow-y-scroll ">
            {/* header */}
            <div className="fixed flex flex-row justify-between px-[0.5rem] bg-ova_white h-16 w-[96%] md:w-[50%] border-b">
                <p className="text-center my-4 px-8 font-semibold text-[1.5em]" >Create Team</p>
                <button className="" onClick={handleCancelBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            {/* body */}
            <div className="flex flex-col px-[2rem] mt-20">

            {errorMessage ? <p className="text-red-500 p-4 md:p-8 text-center italic text-[1em]">{errorMessage}</p> : null }
                    {/* project name */}
                <div className="flex flex-col">
                    <label htmlFor="TeamName" className="text-[1.25rem]">Team Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter team name"  id="TeamName"
                        className="border-[1px] ${nameError ? 'border-red-500' : 'border-ova_grey_border' } border-ova_grey_border p-[1rem] rounded-md"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* project description */}
                {/* <div className="flex flex-col mt-[1rem]">
                    <label htmlFor="projectDescription" className="text-[1.25rem]">Project Description <span className="text-red-500">*</span></label>
                    <textarea name="projectDescription" id="projectDescription" cols="30" rows="5" 
                    placeholder="Enter a short decription about the project"
                    className="border-[1px] border-ova_grey_border p-[1rem] rounded-md"
                    >

                    </textarea>
                </div> */}

                {/* sector and country select options */}
                {/* <div className="flex flex-col md:flex-row justify-between gap-2 mt-[1rem]">
                    <div className="flex flex-col flex-grow">
                        <label htmlFor="add-employee" className="text-[1.25rem]">Add Employee <span className="text-red-500"></span></label>
                        <select name="add-employee" id="add-employee" className="border-[1px] border-ova_grey_border p-[1rem] rounded-md">
                            <option value="">-Select Employee-</option>
                        </select>
                    </div>
                    
                </div> */}

            
                <div className="flex flex-row justify-end">
                    <button 
                        className="w-[96%] md:w-[40%] px-4 py-2 my-8 bg-peach_primary rounded-md text-white" 
                        onClick={CreateTeam}>Create Team
                    </button>
                </div>

            </div>
        </div>

        {loading ? <LoadingModal/> : null}
        <ToastContainer/>
  
      </div>
  
    )
  }