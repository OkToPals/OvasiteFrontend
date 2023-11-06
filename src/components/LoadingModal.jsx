import { delete_organization_url, update_employee_url } from "@/api_utils"
import { useState } from "react"

export const LoadingModal = ({title, description}) => {
   

    return (
      <div role="modal" aria-label="Create project" 
        className={`fixed inset-0 top-0 bottom-0 left-0 right-0 rounded-md max-h-screen z-50 
        transition-all duration-500 ease-in-out bg-ova_grey
        'opacity-100'}
        `}>
        <div className="bg-white border w-[96%] md:w-[50%] pb-8 mx-auto my-8 flex flex-col h-fit justify-center items-center overflow-y-scroll p-4 md:p-8 ">
            {/* header */}
            <img src="" alt="company-logo" />
            <h1 className="text-[1em] font-bold md:text-[1.5em] my-4 md:my-8">{title}</h1>
            {/* body */}
            <p className="text-[0.8em] font-bold md:text-[1em] ">{description}</p>
            {/* loading animation */}
            <div className=" flex flex-row justify-center items-center my-8">
                <div className=" bg-pink-300 animate-pulse mr-2 w-2 h-2 md:w-4 md:h-4 rounded-full delay-0"></div>
                <div className=" bg-pink-400 animate-pulse mr-2 w-2 h-2 md:w-4 md:h-4 rounded-full delay-75"></div>
                <div className=" bg-pink-500 animate-pulse mr-2 w-2 h-2 md:w-4 md:h-4 rounded-full delay-100"></div>
                <div className=" bg-pink-600 animate-pulse mr-2 w-2 h-2 md:w-4 md:h-4 rounded-full delay-150"></div>
                <div className=" bg-pink-700 animate-pulse w-2 h-2 md:w-4 md:h-4 rounded-full delay-200"></div>
            </div>

        </div>
        </div>
  
    )
  }