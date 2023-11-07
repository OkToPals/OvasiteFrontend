import { update_employee_url } from "@/api_utils"
import { useState } from "react"

export const AttachEmployeeModal = ({handleCancelBtn, isAttachEmployeeModalActive, id}) => {

    const [role, setRole] = useState('')    
    const [employees, setEmployees] = useState([])
    const [selectedEmployee, setSelectedEmployee] = useState('')
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

    const handleAttachEmployeeButton = () => {

        if (!selectedEmployee) {
            
            
        } else if (!role) {
           
        } else {
            
            // orgs/:orgId/projectusers/:projectId
            
            setLoading(false)
        }

    }
    

    return (
      <div role="modal" aria-label="Create project" 
        className={`fixed inset-0 top-0 bottom-0 left-0 right-0 rounded-md max-h-screen z-50 
        transition-all duration-500 ease-in-out bg-ova_grey
        ${isAttachEmployeeModalActive ? 'opacity-100' : 'opacity-0'}
        `}>
        <div className="bg-white border w-[96%] md:w-[50%] pb-8 mx-auto my-8 flex flex-col h-fit overflow-y-scroll ">
            {/* header */}
            <div className="fixed flex flex-row justify-between px-[0.5rem] bg-ova_white h-16 w-[96%] md:w-[50%] border-b">
                <p className="text-center my-4 font-semibold text-[1.5em]" >Edit: User details</p>
                <button className="" onClick={handleCancelBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M1 17L17 1M1 1L17 17" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            {/* body */}
            <div className="flex flex-col px-[2rem] mt-20">

                {/* select employee */}
                <div className="flex flex-col">
                    <label htmlFor="select_employee" className="text-[1.25rem]">Select Employee <span className="text-red-500">*</span></label>
                    <select name="select_employee" id="select_employee" 
                        className="border-[1px] border-ova_grey_border p-[1rem] rounded-md"
                        onChange={(e) => setRole(e.target.value)}
                        >
                        <option value="">-Select Employee-</option>
                        {
                            employees.length > 0 ? employees.map((item, index) => {
                                return (
                                    <option key={index} value={`${item.id}`}>{item.id}</option>
                                )
                            })
                            :  <option value="">No employee to select</option>
                        }
                    </select>
                        
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
                        onClick={handleUpdateEmployeeButton}>{loading ? "Loading..." : "Update"}
                    </button>
                </div>

            </div>
        </div>
  
      </div>
  
    )
  }