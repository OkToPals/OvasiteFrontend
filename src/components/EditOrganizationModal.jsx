import { base_url, update_employee_url, update_organization_url } from "@/api_utils"
import { useState } from "react"
import { LoadingModal } from "./LoadingModal"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { get_cookie } from "./helperFunctions/Cookies";
import axios_instance from "@/axiosInstance";

export const EditOrganizationModal = ({handleCancelBtn, isEditOrganizationModalActive, org_id}) => {

    const [name, setName] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const [nameError, setNameError] = useState(false)  
    const [loading, setLoading] = useState(false)

    const handleEndPoint = (url, method, body) => {
        setLoading(true)
        fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: body ? JSON.stringify(body) : null
        }).then(prom => prom.json()).then(res => {
            console.log(res)
            setLoading(false)
        }).catch(err => {
            console.log(err)
            setLoading(false)
        })
    }

    const handleUpdateOrganization = () => {

        if (!name) {
            setNameError(true)
            setErrorMessage("Insert organization new name")
            
            // const url = update_employee_url + id
            // const method = "PATCH"
            // const body = {
            //     fullName: fullname
            // }
            // handleEndPoint(url, method, body)
        } else {
            setErrorMessage('')
            setNameError(false)
            let user_login_details = get_cookie("ovasite_user");
            if (user_login_details) {
                setLoading(true)
                user_login_details = JSON.parse(user_login_details);

                const patch_url = `${update_organization_url}`+ org_id
                const jwt = user_login_details.jwt
                console.log(patch_url + " => " + jwt);
            
                let config = {
                method: "patch",
                url: `${update_organization_url}${org_id}`,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user_login_details.jwt}`,
                },
                data: JSON.stringify({
                    name: name
                    }),
                };
        
                axios_instance
                .request(config)
                .then((response) => {
                   
                console.log(JSON.stringify(response.data));
                setLoading(false)
                toast.success("Organization name updated successfully!")
                console.log(JSON.stringify(response));
                setLoading(false)
                   
                })
                .catch((error) => {
                    console.log(error.response);
                    setLoading(false)
                    toast.error(`${error.response.data.error}`)
                });
            }
        }

    }

    

    return (
      <div role="modal" aria-label="Create project" 
        className={`fixed inset-0 top-0 bottom-0 left-0 right-0 rounded-md max-h-screen z-50 
        transition-all duration-500 ease-in-out bg-ova_grey
        ${isEditOrganizationModalActive ? 'opacity-100' : 'opacity-0'}
        `}>
        <div className="bg-white border w-[96%] md:w-[50%] pb-8 mx-auto my-8 flex flex-col h-fit overflow-y-scroll ">
            {/* header */}
            <div className="fixed flex flex-row justify-between px-[0.5rem] bg-ova_white h-16 w-[96%] md:w-[50%] border-b">
                <p className="text-center my-4 font-semibold text-[1em] md:text-[1.25em] px-4 md:px-8" >Edit: Organization details</p>
                <button className="" onClick={handleCancelBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            {/* body */}
            <div className="flex flex-col px-[2rem] mt-20">

            {errorMessage ? <p className="text-red-500 p-4 md:p-8 text-center italic text-[1em]">{errorMessage}</p> : null }
                {/* organization name */}
                <div className="flex flex-col">
                    <label htmlFor="org_name" className="text-[1.25rem]">New name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Organization new name"  id="org_name"
                        className={`border-[1px] ${nameError ? 'border-red-500' : 'border-ova_grey_border' } border-ova_grey_border p-[1rem] rounded-md`}
                        onChange={(e) => setName(e.target.value.trim())}
                    />
                </div>

                {/* invitee role */}
                {/* <div className="flex flex-col mt-[1rem]">
                    <label htmlFor="sector" className="text-[1.25rem]">Role <span className="text-red-500">*</span></label>
                    <select name="sector" id="sector" 
                        className="border-[1px] border-ova_grey_border p-[1rem] rounded-md"
                        onChange={(e) => setRole(e.target.value)}
                        >
                        <option value="">-Select Role-</option>
                        <option value="admin">ADMIN</option>
                        <option value="guest">GUEST</option>
                    </select>
                </div> */}

                {/* send invite button */}
                <div className="flex flex-row justify-end">
                    <button 
                        className=" mx-auto w-[96%] md:w-[30%] px-4 py-2 my-8 bg-peach_primary rounded-md text-white" 
                        onClick={handleUpdateOrganization}>{loading ? "Loading..." : "Update"}
                    </button>
                </div>

            </div>
        </div>

        {
            loading ? <LoadingModal/> : null
        }

        <ToastContainer/>

  
      </div>
  
    )
  }