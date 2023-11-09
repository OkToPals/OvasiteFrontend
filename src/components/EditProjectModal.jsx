import { update_employee_url, update_project_url } from "@/api_utils"
import axios_instance from "@/axiosInstance"
import { useState } from "react"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { LoadingModal } from "./LoadingModal";

export const EditProjectModal = ({handleCancelBtn, isEditProjectModalActive, org_id, id}) => {

    const [fullname, setFullname] = useState('')
    const [role, setRole] = useState('')    
    const [loading, setLoading] = useState(false)

   const handleUpdateProjectBtn = async () => {
    setLoading(true)
        try {
            const response = await axios_instance.post(update_project_url +`${org_id}/update/project/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
            },
            });
            console.log(response);
            setData(response.data);
            setLoadingDeleteProject(false)
            ToggleDeleteProject()
            toast.success(response.data.message)
        } catch (error) {
            console.log(error.response.data.error);
            setLoadingDeleteProject(false)
            toast.error(error.response.data.error)
        }
   } 
    

    return (
      <div role="modal" aria-label="Create project" 
        className={`fixed inset-0 top-0 bottom-0 left-0 right-0 rounded-md max-h-screen z-50 
        transition-all duration-500 ease-in-out bg-ova_grey
        ${isEditProjectModalActive ? 'opacity-100' : 'opacity-0'}
        `}>
        <div className="bg-white border w-[96%] md:w-[50%] pb-8 mx-auto my-8 flex flex-col h-fit overflow-y-scroll ">
            {/* header */}
            <div className="fixed flex flex-row justify-between px-[1rem] bg-ova_white h-16 w-[96%] md:w-[50%] border-b">
                <p className="text-center my-4 font-semibold text-[1em] md:text-[1.25em]" >Edit: Project details</p>
                <button className="" onClick={handleCancelBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M1 17L17 1M1 1L17 17" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            {/* body */}
            <div className="flex flex-col px-[1rem] mt-20">
                    {/* invitee email */}
                <div className="flex flex-col">
                    <label htmlFor="userFullname" className="text-[1.25rem]">Fullname <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Full name"  id="userFullname"
                        className="border-[1px] border-ova_grey_border p-[1rem] rounded-md"
                        onChange={(e) => setFullname(e.target.value)}
                    />
                </div>

                {/* invitee role */}
                <div className="flex flex-col mt-[1rem]">
                    <label htmlFor="sector" className="text-[1.25rem]">Role <span className="text-red-500">*</span></label>
                    <select name="sector" id="sector" 
                        className="border-[1px] border-ova_grey_border p-[1rem] rounded-md"
                        onChange={(e) => setRole(e.target.value)}
                        >
                        <option value="">-Select Role-</option>
                        <option value="admin">ADMIN</option>
                        <option value="guest">GUEST</option>
                    </select>
                </div>
                {/* send invite button */}
                <div className="flex flex-row justify-end">
                    <button 
                        className="w-[96%] md:w-[30%] px-4 py-2 my-8 bg-peach_primary rounded-md text-white" 
                        onClick={handleUpdateProjectBtn}>Update
                    </button>
                </div>

            </div>
        </div>
        {loading ? <LoadingModal/> : null}
        <ToastContainer/>
      </div>
  
    )
  }