'use client'

import { delete_employee_url } from "@/api_utils"
import { EditEmployeeModal } from "./EditEmployeeModal"
import { useState } from "react"
import { ConfirmActionModal } from "./ConfirmActionModal"

const NoDataCard = ({title, description }) => { 

  return (
    <>
    {/* <article className=" w-1/4 relative h-[27.7rem] p-4 border-[#ddd] border rounded-lg bg-ova_white"> */}
    <article className="w-[100%] mini:w-[48%] md:w-[48%] lg:w-[32%] md:h-[25.7rem] h-[18rem] shadow-sm p-4 border-[#ddd] bg-white border rounded-lg flex flex-col justify-center items-center">
        {/* profile pics */}
        <div role="img" aria-label="Profile picture of Jane Doe" 
            className='mx-auto md:w-[12.5rem] md:h-[12.5rem] w-[6.25rem] h-[6.25rem]  
            rounded-full bg-[#cac0b3]'
            >
        </div>
        <h2 className="max-w-[80%] mx-auto mt-1 overflow-hidden 
            whitespace-nowrap text-ellipsis font-bold text-[1em] md:text-[1.5em] text-center">
                {title}
        </h2>
        <h2 className="text-[0.8em] md:text-[1em] text-center">{description}</h2>

    </article>
    
      </>
  )
}

export default NoDataCard