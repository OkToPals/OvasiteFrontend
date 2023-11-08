import { useState } from "react"
import { LoadingModal } from "./LoadingModal"
import { get_cookie } from "./helperFunctions/Cookies"
import { base_url } from "@/api_utils"
import axios_instance from "@/axiosInstance"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const CreateOrganizationModal = ({handleCancelBtn, isCreateOrganizationActive}) => {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [logoUrl, setLogoUrl] = useState('logo url')
    const [loading, setLoading] = useState(false)

     // handle error message
    const [errorMessage, setErrorMessage] = useState('');
    const [nameError, setNameError] = useState(false)
    const [addressError, setAddressError] = useState(false)
    const [logoError, setLogoError] = useState(false)

    const CreateOrganization = () => {


        if (!name) {
            setNameError(true)
            setErrorMessage("Insert organization name")
        } else if (!address) {
            setNameError(false)
            setAddressError(true)
            setErrorMessage("Insert organization address")
        // } else if (!logoUrl) {
        //     setAddressError(false)
        //     setLogoError(true)
        //     setErrorMessage("Select organization image")
        } else {
            setErrorMessage('')
            setNameError(false)
            setAddressError(false)
            // setLogoError(false)

            let user_login_details = get_cookie("ovasite_user");

            if (user_login_details) {
                setLoading(true)
                user_login_details = JSON.parse(user_login_details);
            
                let data = JSON.stringify({
                name: name,
                address: address,
                logoUrl: logoUrl
                });
                let config = {
                method: "post",
                url: `${base_url}/orgs/`,
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
                    toast.success("Organization created successfully!")
                    console.log(JSON.stringify(response));
                    setLoading(false)
                   
                })
                .catch((error) => {
                    console.log(error.response.data);
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
            ${isCreateOrganizationActive ? 'opacity-100' : 'opacity-0'}
            `}>
            <div className="bg-white border w-[96%] md:w-[50%] pb-8 mx-auto my-8 flex flex-col h-[90vh] overflow-y-scroll ">
                {/* header */}
                <div className="fixed flex flex-row justify-between md:px-8 bg-ova_white h-16 w-[96%] md:w-[50%] border-b">
                    <p className="text-center my-4 px-8 font-semibold text-[1em] md:text-[1.25em]" >Create Organization</p>
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
                    <div className="flex flex-col mt-4">
                        <label htmlFor="projectName" className="text-[1em] mb-2">Name <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Organization name"  id="projectName"
                            className={`border-[1px] text-[1em] ${nameError ? 'border-red-500' : 'border-ova_grey_border' } border-ova_grey_border p-[1rem] rounded-md`}
                            onChange={(e) => setName(e.target.value.trim())}
                        />
                    </div>

                    {/* project name */}
                    <div className="flex flex-col mt-4">
                        <label htmlFor="address" className="text-[1em] mb-2 ">Address <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Organization address"  id="address"
                            className={`border-[1px] text-[1em] ${addressError ? 'border-red-500' : 'border-ova_grey_border' } border-ova_grey_border p-[1rem] rounded-md`}
                            onChange={(e) => setAddress(e.target.value.trim())}
                        />
                    </div>

                    {/* sector and country select options */}
                    <div className="flex flex-col md:flex-row justify-between gap-2 mt-4">
                        <div className="flex flex-col flex-grow">
                            <label htmlFor="add-employee" className="text-[1em] mb-2 ">Select image <span className="text-red-500"></span></label>
                            <input type="file" accept="image/jpeg, image/png" onChange={(e) => setLogoUrl(e.target.value)} className="text-[1em]"/>
                        </div>
                        
                    </div>
                
                    {/* button */}
                    <div className="flex flex-row justify-end mt-6">
                        <button 
                            className="w-[96%] md:w-[30%] px-4 py-2 my-8 bg-peach_primary rounded-md text-white text-[1em] " 
                            onClick={CreateOrganization}>Create Org.
                        </button>
                    </div>

                </div>
            </div>

            {loading ? <LoadingModal/> : null}
        <ToastContainer/>

        </div>
  
    )
  }