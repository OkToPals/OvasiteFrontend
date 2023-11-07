export const CreateOrganizationModal = ({handleCancelBtn, isCreateOrganizationActive}) => {

    const CreateOrganization = () => {

    }

    return (
      <div role="modal" aria-label="Create project" 
        className={`fixed inset-0 top-0 bottom-0 left-0 right-0 rounded-md max-h-screen z-50 
        transition-all duration-500 ease-in-out bg-ova_grey
        ${isCreateOrganizationActive ? 'opacity-100' : 'opacity-0'}
        `}>
        <div className="bg-white border w-[96%] md:w-[50%] pb-8 mx-auto my-8 flex flex-col h-[90vh] overflow-y-scroll ">
            {/* header */}
            <div className="fixed flex flex-row justify-between px-[0.5rem] bg-ova_white h-16 w-[96%] md:w-[50%] border-b">
                <p className="text-center my-4 px-8 font-semibold text-[1.5em]" >Create Organization</p>
                <button className="" onClick={handleCancelBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            {/* body */}
            <div className="flex flex-col px-[2rem] mt-20">
                    {/* project name */}
                <div className="flex flex-col">
                    <label htmlFor="projectName" className="text-[1.25rem]">Project Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter project name"  id="projectName"
                        className="border-[1px] border-ova_grey_border p-[1rem] rounded-md"
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
                <div className="flex flex-col md:flex-row justify-between gap-2 mt-[1rem]">
                    <div className="flex flex-col flex-grow">
                        <label htmlFor="add-employee" className="text-[1.25rem]">Add Employee <span className="text-red-500"></span></label>
                        <select name="add-employee" id="add-employee" className="border-[1px] border-ova_grey_border p-[1rem] rounded-md">
                            <option value="">-Select Employee-</option>
                        </select>
                    </div>
                    
                </div>

            
                <div className="flex flex-row justify-end">
                    <button 
                        className="w-[96%] md:w-[30%] px-4 py-2 my-8 bg-peach_primary rounded-md text-white" 
                        onClick={CreateOrganization}>Create Org.
                    </button>
                </div>

            </div>
        </div>
  
      </div>
  
    )
  }