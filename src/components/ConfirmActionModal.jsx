import { delete_organization_url, update_employee_url } from "@/api_utils"
import { useState } from "react"
import { LoadingModal } from "./LoadingModal"

export const ConfirmActionModal = ({handleCancelBtn, title, description, isConfirmModalActive, url, id, handleConfirmBtn, loading}) => {

    // const [fullname, setFullname] = useState('')
    // const [role, setRole] = useState('')    
    // const [loading, setLoading] = useState(false)

    // const handleEndPoint = (url, method, body) => {
    //     setLoading(true)
    //     fetch(url, {
    //         method: method,
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: body ? JSON.stringify(body) : null
    //     }).then(prom => prom.json()).then(res => {
    //         console.log(res)
    //         setLoading(false)
    //     }).catch(err => {
    //         console.log(err)
    //         setLoading(false)
    //     })
    // }

    // hanle delete organization
    // const DeleteOrganization = () => {
    //     handleEndPoint(delete_organization_url + id, "DELETE")
    // }

    return (
      <div role="modal" aria-label="Create project" 
        className={`fixed inset-0 top-0 bottom-0 left-0 right-0 rounded-md max-h-screen z-50 
        transition-all duration-500 ease-in-out bg-ova_grey
        ${isConfirmModalActive ? 'opacity-100' : 'opacity-0'}
        `}>
        <div className="bg-white border w-[96%] md:w-[50%] p-4 md:p-8 p mx-auto my-8 flex flex-col h-fit justify-center items-center overflow-y-scroll ">
            {/* header */}
            <h1 className="text-[1em] font-bold md:text-[1.5em] py-4 md:py-8">{title}</h1>
            {/* body */}
            <p className="text-[0.8em] font-bold md:text-[1em] text-[#575757] ">{description}</p>
            {/* buttons */}
            <div className="flex flex-row justify-center items-center my-8 gap-2 md:gap-4">
                <button onClick={handleCancelBtn} 
                    className=" w-24 h-12 md:w-24 md:h-14 font-semibold bg-[#C2BACA] px-5 py-3 text-[0.8em] rounded-md md:text-[1em] md:px-6 md:py-4 text-white">
                    Cancel
                </button>
                <button 
                    className=" w-24 h-12 md:w-24 md:h-14 bg-peach_primary rounded-md font-semibold px-5 py-3 text-[0.8em] md:text-[1em] md:px-6 md:py-4 text-white" 
                    onClick={handleConfirmBtn}>{loading ? "Loading..." : "Yes"}
                </button>
            </div>

        </div>
        
        {loading ? LoadingModal : null}
        </div>
  
    )
  }