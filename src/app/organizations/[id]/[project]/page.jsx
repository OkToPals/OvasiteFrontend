'use client'

import Barchart from "@/components/BarCharts";
import Piechart from "@/components/PieChart";
import Ringchart from "@/components/RingChart";
import { SidebarNav } from "@/components/SidebarNav";
import { get_cookie } from "@/components/helperFunctions/Cookies";
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";


const ProjectDetailsDashboard = () => {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const data = [
    {
        color: "bg-[#FEDEF3]",
        name: "Data 1",
        value: 1
    },
    {
        color: "bg-[#DEEFFF]",
        name: "Data 2",
        value: 2
    },
    {
        color: "bg-[#FEDEBC]",
        name: "Data 3",
        value: 3
    },
    {
        color: "bg-[#E6C6FF]",
        name: "Data 4",
        value: 4
    },
    {
        color: "bg-[#C3F7DE]",
        name: "Data 5",
        value: 5
    },
    {
        color: "bg-[#FCEBB0]",
        name: "Data 6",
        value: 6
    }
  ]
  useEffect(() => {
    const url = pathname
      console.log(url)

      let user_login_details  = get_cookie('ovasite_user')
      if (!user_login_details && url =='/projects') {
        router.replace('/')
      } 

      if (user_login_details) {
        user_login_details = JSON.parse(user_login_details) ;
        const jwt = user_login_details.jwt
        console.log(jwt);
        
    }
  },[router,  pathname, searchParams])

  return (
    <main className="flex flex-col md:flex-row">
      <SidebarNav activeLink={"projects"} pagetitle={"Projects"}/>

      <section className=" bg-mobile-bg md:ml-[25vw]  md:w-[75vw]">

        {/* main header - header I */}
        <header className="h-[6rem] hidden flex-row items-center justify-between py-[1.6rem] border-b border-ova_grey_border bg-ova_white md:fixed md:flex md:w-[75vw] z-50">
          <h1 className="text-[2em] font-bold pl-[1.2rem]">Projects</h1>
          <div className="flex flex-row items-center justify-between pr-[1.2rem]">
            {/* search and input text field */}
            <div className="border rounded-md p-[0.75rem] md:w-[31rem] mr-[1rem]">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <input
                type="text"
                className="hidden md:static"
                placeholder="Search"
              />
            </div>
            {/* notification icon */}
            <button className="hidden md:block h-[2.5rem] w-[2.5rem] bg-ova_grey rounded-full p-[0.75rem] items-center mr-[1rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8.00008 14.6667C8.73341 14.6667 9.33341 14.0667 9.33341 13.3333H6.66675C6.66675 14.0667 7.26675 14.6667 8.00008 14.6667ZM12.0001 10.6667V7.33334C12.0001 5.28667 10.9134 3.57334 9.00008 3.12001V2.66667C9.00008 2.11334 8.55341 1.66667 8.00008 1.66667C7.44675 1.66667 7.00008 2.11334 7.00008 2.66667V3.12001C5.09341 3.57334 4.00008 5.28001 4.00008 7.33334V10.6667L2.66675 12V12.6667H13.3334V12L12.0001 10.6667ZM10.6667 11.3333H5.33341V7.33334C5.33341 5.68001 6.34008 4.33334 8.00008 4.33334C9.66008 4.33334 10.6667 5.68001 10.6667 7.33334V11.3333Z"
                  fill="#0C1116"
                />
              </svg>
            </button>

            {/* profile icon and caret down button */}
            <div className="flex flex-row justify-between items-center">
              <div className="h-[2.5rem] w-[2.5rem] bg-ova_grey rounded-full p-[0.75rem] items-center">
                <img src="" alt="" />
              </div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29303 7.29301C5.48056 7.10553 5.73487 7.00022 6.00003 7.00022C6.26519 7.00022 6.5195 7.10553 6.70703 7.29301L10 10.586L13.293 7.29301C13.3853 7.19749 13.4956 7.12131 13.6176 7.0689C13.7396 7.01649 13.8709 6.98891 14.0036 6.98775C14.1364 6.9866 14.2681 7.0119 14.391 7.06218C14.5139 7.11246 14.6255 7.18672 14.7194 7.28061C14.8133 7.3745 14.8876 7.48615 14.9379 7.60905C14.9881 7.73195 15.0134 7.86363 15.0123 7.99641C15.0111 8.12919 14.9835 8.26041 14.9311 8.38241C14.8787 8.50441 14.8025 8.61476 14.707 8.707L10.707 12.707C10.5195 12.8945 10.2652 12.9998 10 12.9998C9.73487 12.9998 9.48056 12.8945 9.29303 12.707L5.29303 8.707C5.10556 8.51948 5.00024 8.26517 5.00024 8C5.00024 7.73484 5.10556 7.48053 5.29303 7.29301Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* header II */}
        <div className="max-w-full flex flex-row justify-between items-center px-[1.2rem] pb-4 md:py-[1.5rem] mt-[6.5rem]">
            {/* div left - back arrow and back label */}
            <div className="md:flex flex-row hidden gap-2">
                {/* back button */}
                <Link href={'/projects'} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5313 26.7314C15.2313 27.0313 14.8244 27.1998 14.4001 27.1998C13.9758 27.1998 13.5689 27.0313 13.2689 26.7314L3.6689 17.1314C3.36894 16.8313 3.20044 16.4244 3.20044 16.0002C3.20044 15.5759 3.36894 15.169 3.6689 14.869L13.2689 5.26896C13.5707 4.97751 13.9748 4.81624 14.3943 4.81988C14.8139 4.82353 15.2152 4.9918 15.5118 5.28845C15.8085 5.58511 15.9767 5.98641 15.9804 6.40592C15.984 6.82544 15.8228 7.2296 15.5313 7.53136L8.6625 14.4002H27.2001C27.6244 14.4002 28.0314 14.5687 28.3315 14.8688C28.6315 15.1689 28.8001 15.5758 28.8001 16.0002C28.8001 16.4245 28.6315 16.8315 28.3315 17.1315C28.0314 17.4316 27.6244 17.6002 27.2001 17.6002H8.6625L15.5313 24.469C15.8313 24.769 15.9998 25.1759 15.9998 25.6002C15.9998 26.0244 15.8313 26.4313 15.5313 26.7314Z" fill="black"/>
                    </svg>
                    
                </Link>
                <h1 className=" text-[1.25em] font-extrabold text-center w-full mx-auto ">Back</h1>
            </div>
            {/* displays only on mobile screen */}
            <h1 className="md:hidden text-[1.25em] font-extrabold text-left w-full mx-auto ">Subscription</h1>
           
           {/* div right - filter and select button */}
            <div className="flex flex-row justify-center items-center gap-2">
               {/* filter by date */}
                <button
                    aria-label="Filter by date"
                    className="flex flex-row items-center py-[1rem] px-[1.25rem] border-[0.0625rem] border-ova_grey_border rounded-[0.5rem] gap-2"
                >
                    <span className="hidden md:block">Filter by date</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clip-path="url(#clip0_204_10189)">
                            <path d="M15.9031 4.8206V13.1323C15.9032 13.8357 15.6358 14.5128 15.155 15.0263C14.6742 15.5398 14.0162 15.8512 13.3143 15.8973L13.1325 15.9028H3.1585C2.45509 15.903 1.77797 15.6355 1.2645 15.1548C0.751017 14.674 0.439624 14.0159 0.393481 13.314L0.387939 13.1323V4.8206H15.9031ZM9.82558 6.18815C9.23822 6.18815 8.76945 6.34551 8.42368 6.66025C8.07681 6.97499 7.90392 7.40054 7.90392 7.93692C7.90392 8.24723 7.98261 8.52096 8.13997 8.76255C8.29734 9.00304 8.51123 9.19254 8.78274 9.33107C8.45914 9.47514 8.20868 9.68238 8.02915 9.95057C7.85014 10.2195 7.75665 10.5363 7.76096 10.8593C7.76096 11.4112 7.94936 11.849 8.32616 12.1759C8.70295 12.5017 9.20387 12.6646 9.83002 12.6646C10.4539 12.6646 10.9526 12.5028 11.3283 12.177C11.7029 11.8534 11.8913 11.4134 11.8913 10.8593C11.8913 10.5246 11.8027 10.2243 11.6253 9.95944C11.4354 9.68323 11.1721 9.4656 10.8651 9.33107C11.1281 9.20249 11.3523 9.00628 11.5145 8.76255C11.673 8.52096 11.7528 8.24612 11.7528 7.93692C11.7528 7.40054 11.5788 6.97499 11.2319 6.66025C10.8862 6.34551 10.4174 6.18815 9.82558 6.18815ZM6.47874 6.25353H6.34465L3.8855 7.15784V8.04553L5.43147 7.51802V12.5782H6.47874V6.25353ZM9.82115 9.76439C10.1281 9.76439 10.373 9.8597 10.5592 10.0525C10.7454 10.2442 10.8385 10.4958 10.8385 10.8072C10.8385 11.1286 10.7498 11.378 10.5725 11.5564C10.3952 11.7359 10.1481 11.8246 9.83002 11.8246C9.51307 11.8246 9.26482 11.7326 9.08418 11.5475C8.90354 11.3636 8.81267 11.1164 8.81267 10.8072C8.81267 10.4925 8.90465 10.2409 9.08751 10.0503C9.27147 9.8597 9.51528 9.76439 9.82115 9.76439ZM9.82558 7.03261C9.94549 7.02729 10.0651 7.04835 10.176 7.09431C10.2868 7.14027 10.3863 7.21 10.4672 7.29859C10.6257 7.4759 10.7044 7.70198 10.7044 7.97682C10.7044 8.26496 10.6268 8.49436 10.4695 8.66392C10.3121 8.83459 10.0982 8.91992 9.83002 8.91992C9.56183 8.91992 9.34905 8.83459 9.19168 8.66503C9.03431 8.49436 8.95563 8.26607 8.95563 7.97682C8.95563 7.68536 9.0332 7.45485 9.18946 7.2864C9.34461 7.11684 9.55739 7.03261 9.82558 7.03261ZM13.1325 0.387695C13.8359 0.387587 14.5131 0.655035 15.0265 1.13579C15.54 1.61655 15.8514 2.27461 15.8976 2.97651L15.9031 3.15826V3.71237H0.387939V3.15826C0.387831 2.45485 0.65528 1.77773 1.13604 1.26425C1.61679 0.750773 2.27486 0.43938 2.97675 0.393237L3.1585 0.387695H13.1325Z" fill="#2F2F2F"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_204_10189">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                {/* export data type- mobile view*/}
                <button className=" bg-peach_primary py-[1rem] px-[1.25rem] rounded-[0.5rem] md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4.95228 7.99984H8.7618M4.95228 9.52365H10.2856M4.95228 11.0475H7.23799M12.5713 11.8094V6.47603L8.7618 2.6665H4.95228C4.54814 2.6665 4.16055 2.82705 3.87478 3.11282C3.58901 3.39859 3.42847 3.78617 3.42847 4.19031V11.8094C3.42847 12.2135 3.58901 12.6011 3.87478 12.8869C4.16055 13.1726 4.54814 13.3332 4.95228 13.3332H11.0475C11.4517 13.3332 11.8392 13.1726 12.125 12.8869C12.4108 12.6011 12.5713 12.2135 12.5713 11.8094Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.76172 2.6665V4.95222C8.76172 5.35636 8.92226 5.74394 9.20803 6.02971C9.4938 6.31548 9.88139 6.47603 10.2855 6.47603H12.5712" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                {/* export data type- desktop view*/}
                <select name="export_data" id="export_data" className="bg-peach_primary py-[1rem] px-[1.25rem] rounded-[0.5rem] text-ova_white hidden md:block">
                    <option value="html" className="text-[1rem] bg-ova_white text-ova_dark_primary">Export Data as HTML</option>
                    <option value="html" className="text-[1rem] bg-ova_white text-ova_dark_primary">Export Data as HTML</option>
                    <option value="html" className="text-[1rem] bg-ova_white text-ova_dark_primary">Export Data as HTML</option>
                    <option value="html" className="text-[1rem] bg-ova_white text-ova_dark_primary">Export Data as HTML</option>
                    <option value="html" className="text-[1rem] bg-ova_white text-ova_dark_primary">Export Data as HTML</option>
                    <option value="html" className="text-[1rem] bg-ova_white text-ova_dark_primary">Export Data as HTML</option>
                </select>
               
            </div>
        </div>

        {/* project content desktop view*/}
        <div className="px-[1.2rem] ">

          {/* first div */}
          <div className="flex flex-col md:flex-wrap md:flex-row gap-2 justify-between items-center">
            
            {/* left article */}
            <article 
              className="w-full relative h-fit bg-ova_white border-ova_grey_border
              rounded-[0.5rem] p-[1rem] mt-[1rem] lg:w-[60%] md:h-[16.25rem]  lg:flex-row flex-col flex-grow"
            >
                {/* article header */}
                <div className="flex flex-row justify-between mb-6">
                    <h2 className="text-[1.5em] font-semibold">Project Insight</h2>
                    <h2 className="rounded-[1.875rem] text-ova_white bg-peach_primary px-[1.5rem] 
                        py-[0.8rem] flex flex-row gap-2 justify-between items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                            <circle cx="5.5" cy="5" r="5" fill="white"/>
                        </svg>
                        <span> Offline</span>
                    </h2>
                </div>
                
                {/* body */}
                <div className="flex flex-col md:flex-row mb-4">
                    <div className="w-[100%] md:w-[32%] h-[8rem] border-b md:border-r md:border-b-0 border-ova_grey_border p-[1rem]">
                        <h4>Active Users</h4>
                        <h1 className="lg:mt-[1rem] text-[2em] font-bold ">100</h1>
                    </div>
                    <div className="w-[100%] md:w-[32%] h-[8rem] border-b md:border-b-0 md:border-r border-ova_grey_border p-[1rem]">
                        <h4>Responses</h4>
                        <h1 className="lg:mt-[1rem] text-[2em] font-bold">105</h1>
                    </div>
                    <div className="w-[100%] md:w-[32%] h-[8rem] p-[1rem]">
                        <h4>Duration</h4>
                        <h1 className="lg:mt-[1rem] text-[2em] font-bold">1 week</h1>
                    </div>
                </div>

                <Link href={'/'} className="absolute bottom-4 right-4 underline text-peach_primary">Edit Form</Link>
            </article>

            {/* right article */}
            <figure className=" relative w-[100%] md:[50%] lg:w-[32%] h-[16.25rem]  lg:flex-grow
              bg-ova_white border-ova_grey_border rounded-[0.5rem] py-[1rem] px-[1rem] lg:px-[0.5rem] mt-[1rem]">
                <h1 className="text-[1.5rem] font-semibold mb-4">Data Title</h1>
                {/* <div className="relative w-[100%] h-[100%] mt-6 md:flex flex-row justify-between items-center"> */}
                  <Piechart/>
                  <div className="absolute lg:bottom-2 lg:right-2 md:bottom-10 md:right-10 bottom-4 right-4">
                
                      {
                          data.map((item, index) =>
                          <div className=" flex flex-row justify-center items-center gap-2" key={index}>  
                              <div className={`h-[1rem] w-[1.5rem] ${item.color}`}></div>
                              <h1>{item.name}</h1>                          
                          </div>
                          )
                      }
                  </div>
                {/* </div> */}
            </figure>
          </div>

            {/* second div */}
          <div className="flex flex-col md:flex-wrap md:flex-row gap-2 justify-between items-center flex-wrap my-8">
            
            {/* left article */}
            <figure className=" relative w-[100%] md:[50%] lg:w-[40%] h-[16.25rem]  lg:flex-grow
                bg-ova_white border-ova_grey_border rounded-[0.5rem] py-[1rem] px-[1rem] lg:px-[0.5rem] mt-[1rem]">
                  <h1 className="text-[1.5rem] font-semibold mb-4">Data Title</h1>
                  {/* <div className="relative w-[100%] h-[100%] mt-6 md:flex flex-row justify-between items-center"> */}
                    <Barchart/>
                  {/* </div> */}
            </figure>

            {/* midle article */}
            <figure className=" w-[100%] md:[50%] lg:w-[28%] h-[16.25rem]  lg:flex-grow flex-col justify-center items-center
                bg-ova_white border-ova_grey_border rounded-[0.5rem] py-[1rem] px-[1rem] lg:px-[0.5rem] mt-[1rem]">
                  <h1 className="text-[1.5rem] font-semibold mb-4 text-center">Data Title</h1>
                  {/* <div className="relative w-[100%] h-[100%] mt-6 md:flex flex-row justify-between items-center"> */}
                  <div className="flex flex-row gap-1 flex-wrap justify-center items-center">
                      {
                          data.map((item, index) =>
                          <div className=" flex flex-row justify-center items-center gap-1" key={index}>  
                              <div className={`h-[1rem] w-[1.5rem] ${item.color}`}></div>
                              <h1 className="text-[0.65rem]">{item.name}</h1>                          
                          </div>
                          )
                      }
                  </div>
                  <div className="flex flex-row justify-center mx-auto h-[12rem]">
                    <Ringchart/>
                  </div>
                  
                  {/* </div> */}
            </figure>

            {/* right article */}
            <figure className=" w-[100%] md:[50%] lg:w-[28%] h-[16.25rem]  lg:flex-grow flex-col justify-center items-center
                bg-ova_white border-ova_grey_border rounded-[0.5rem] py-[1rem] px-[1rem] lg:px-[0.5rem] mt-[1rem]">
                  <h1 className="text-[1.5rem] font-semibold mb-4 text-center">Data Title</h1>
                  {/* <div className="relative w-[100%] h-[100%] mt-6 md:flex flex-row justify-between items-center"> */}
                  <div className="flex flex-row gap-1 flex-wrap justify-center">
                      {
                          data.map((item, index) =>
                          <div className=" flex flex-row justify-center items-center gap-1" key={index}>  
                              <div className={`h-[1rem] w-[1.5rem] ${item.color}`}></div>
                              <h1 className="text-[0.65rem]">{item.name}</h1>                          
                          </div>
                          )
                      }
                  </div>
                  <div className="flex flex-row justify-center mx-auto h-[12rem]">
                    <Ringchart/>
                  </div>
                   
                  {/* </div> */}
            </figure>

          </div>

        </div>
      </section>
    </main>
  );
};

export default ProjectDetailsDashboard;
