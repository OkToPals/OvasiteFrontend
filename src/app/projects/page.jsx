'use client'
import { ProjectCard } from "@/components/ProjectCard";
import { SidebarNav } from "@/components/SidebarNav";
import { useEffect, useState } from "react";

const ProjectsDashboard = () => {

  // pagination variables
  const [data, setData] = useState([]);
  const [current_page, set_current_page] = useState(1);
  const [items_per_page, set_items_per_page] = useState(10);
  const index_of_last_item = current_page * items_per_page;
  const index_of_first_item = index_of_last_item - items_per_page;
  const current_data = data.slice(index_of_first_item, index_of_last_item);
  const total_page_no = Math.ceil(data.length / items_per_page);

  const [page_no_limit, set_page_no_limit] = useState(3);
  const [max_page_no_limit, set_max_page_no_limit] = useState(3);
  const [min_page_no_limit, set_min_page_no_limit] = useState(0);
  const [togglemenu, setToggleMenu] = useState(false)

  const array_of_pages = [...Array(total_page_no).keys()].map((i) => i + 1);

  const th_style = "p-2 border-b text-[1.125rem] text-ova_dark_secondary";
  const td_style = "p-2 border-b text-[1rem] text-ova_black align-top";

  const ToggleMenu = () => {
    setToggleMenu(!togglemenu)
    // alert("menu clicked")
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json)
        setData(json);
        // console.log(data);
      });
  }, []);

  // handle next button
  const nextButton = () => {
    if (current_page + 1 <= total_page_no) {
      set_current_page(current_page + 1);
    }

    if (current_page + 1 > max_page_no_limit) {
      set_max_page_no_limit(max_page_no_limit + page_no_limit);
      set_min_page_no_limit(min_page_no_limit + page_no_limit);
    }
  };

  // handle previous button
  const previousButton = () => {
    if (current_page - 1 >= 1) {
      set_current_page(current_page - 1);
    }

    if ((current_page - 1) % page_no_limit == 0) {
      set_max_page_no_limit(max_page_no_limit - page_no_limit);
      set_min_page_no_limit(min_page_no_limit - page_no_limit);
    }
  };

  return (
    <main className="flex flex-col md:flex-row">
      <SidebarNav activeLink={"projects"} pagetitle={'Projects'} />

      <section className=" bg-mobile-bg md:bg-ova_white md:ml-[25vw]  md:w-[75vw]">
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
        <div className="max-w-full flex flex-row justify-between md:justify-end items-center px-[1.2rem] pb-4 md:py-[1.5rem] mt-[6.5rem]">
            <h1 className="md:hidden text-[1.25em] font-extrabold ">Projects</h1>
            <div className="flex flex-row justify-center items-center">
                <button
                    aria-label="Sort by"
                    className="flex flex-row items-center py-[1rem] px-[1.25rem] border-[0.0625rem] border-ova_grey_border rounded-[0.5rem] mr-[0.75rem]"
                >
                    Status
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.23447 5.83441C4.3845 5.68443 4.58794 5.60018 4.80007 5.60018C5.0122 5.60018 5.21565 5.68443 5.36567 5.83441L8.00007 8.46881L10.6345 5.83441C10.7083 5.758 10.7965 5.69706 10.8941 5.65513C10.9918 5.6132 11.0967 5.59113 11.203 5.59021C11.3092 5.58929 11.4145 5.60953 11.5128 5.64975C11.6112 5.68998 11.7005 5.74938 11.7756 5.82449C11.8507 5.89961 11.9101 5.98893 11.9503 6.08725C11.9906 6.18556 12.0108 6.29091 12.0099 6.39713C12.009 6.50335 11.9869 6.60833 11.945 6.70593C11.903 6.80354 11.8421 6.89181 11.7657 6.96561L8.56567 10.1656C8.41565 10.3156 8.2122 10.3998 8.00007 10.3998C7.78794 10.3998 7.5845 10.3156 7.43447 10.1656L4.23447 6.96561C4.0845 6.81559 4.00024 6.61214 4.00024 6.40001C4.00024 6.18788 4.0845 5.98443 4.23447 5.83441Z"
                        fill="black"
                    />
                    </svg>
                </button>
                <button
                    aria-label="Create Project"
                    className="flex flex-row items-center bg-peach_primary py-[1rem] px-[1.25rem] rounded-[0.5rem]"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    >
                    <path
                        d="M12.6666 8.66668H8.66659V12.6667H7.33325V8.66668H3.33325V7.33334H7.33325V3.33334H8.66659V7.33334H12.6666V8.66668Z"
                        fill="white"
                    />
                    </svg>
                    <span className="text-ova_white hidden md:block ml-2">
                    Create Project
                    </span>
                </button>
            </div>
        </div>
        {/* project content desktop view*/}
        <div className="px-[1.2rem] ">
          <table className="w-[100%] mx-auto hidden md:block">
            <thead className="text-left">
              <tr>
                <th className={`${th_style}`}>S/N</th>
                <th className={`${th_style}`}>Project Name</th>
                <th className={`${th_style}`}>Description</th>
                <th className={`${th_style}`}>Start Date</th>
                <th className={`${th_style}`}>End Date</th>
                <th className={`${th_style}`}>Status</th>
                <th className={`${th_style}`}>Action</th>
              </tr>
            </thead>
            <tbody>
              {current_data.map((item, index) => (
                <tr key={index}>
                  <td className={`${td_style}` }>{item.id}</td>
                  <td className={`${td_style}`}>{item.title}</td>
                  <td className={`${td_style}`}>
                    {item.body.length > 200 ? item.body.slice(0,200) +"..." : item.body}
                </td>
                  <td className={`${td_style}`}>{"29/08/2023"}</td>
                  <td className={`${td_style}`}>{"29/08/2024"}</td>
                  <td className={`${td_style}`}>
                    <progress
                      id="poject_progress_percentage"
                      value="100"
                      max="100"
                      className=" h-3 rounded-sm text-[12px]"
                      aria-label={`poject progress percentage`}
                    >
                      100%
                    </progress>
                  </td>
                  <td className={`${td_style}`}>
                    <div className="flex flex-row justify-between items-center">

                        {/* edit button */}
                        <button aria-label="Edit button" className="outline-none  border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                <path d="M14.6739 6.66666H8.00724C7.3 6.66666 6.62172 6.94761 6.12162 7.44771C5.62153 7.9478 5.34058 8.62608 5.34058 9.33333V24C5.34058 24.7072 5.62153 25.3855 6.12162 25.8856C6.62172 26.3857 7.3 26.6667 8.00724 26.6667H22.6739C23.3812 26.6667 24.0594 26.3857 24.5595 25.8856C25.0596 25.3855 25.3406 24.7072 25.3406 24V17.3333M23.4552 4.78133C23.7012 4.52663 23.9955 4.32348 24.3208 4.18372C24.6462 4.04396 24.9961 3.9704 25.3502 3.96732C25.7043 3.96425 26.0554 4.03172 26.3831 4.1658C26.7108 4.29988 27.0086 4.49789 27.259 4.74827C27.5093 4.99865 27.7074 5.29639 27.8414 5.62412C27.9755 5.95184 28.043 6.30298 28.0399 6.65706C28.0368 7.01114 27.9633 7.36106 27.8235 7.6864C27.6838 8.01175 27.4806 8.306 27.2259 8.55199L15.7779 20H12.0072V16.2293L23.4552 4.78133Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        {/* delete button */}
                        <button aria-label="Delete button " className="outline-none  border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                <g clipPath="url(#clip0_124_9141)">
                                    <path d="M26.674 6.66666C27.0276 6.66666 27.3668 6.80713 27.6168 7.05718C27.8668 7.30723 28.0073 7.64637 28.0073 7.99999C28.0073 8.35361 27.8668 8.69275 27.6168 8.9428C27.3668 9.19285 27.0276 9.33332 26.674 9.33332H25.3407L25.3367 9.42799L24.0927 26.856C24.0448 27.5288 23.7437 28.1584 23.2501 28.6181C22.7566 29.0778 22.1071 29.3333 21.4327 29.3333H10.5807C9.90618 29.3333 9.25675 29.0778 8.76317 28.6181C8.2696 28.1584 7.96855 27.5288 7.92066 26.856L6.67666 9.42932C6.67464 9.39736 6.67375 9.36534 6.67399 9.33332H5.34066C4.98704 9.33332 4.6479 9.19285 4.39785 8.9428C4.1478 8.69275 4.00732 8.35361 4.00732 7.99999C4.00732 7.64637 4.1478 7.30723 4.39785 7.05718C4.6479 6.80713 4.98704 6.66666 5.34066 6.66666H26.674ZM22.67 9.33332H9.34466L10.582 26.6667H21.4327L22.67 9.33332ZM18.674 2.66666C19.0276 2.66666 19.3668 2.80713 19.6168 3.05718C19.8668 3.30723 20.0073 3.64637 20.0073 3.99999C20.0073 4.35361 19.8668 4.69275 19.6168 4.9428C19.3668 5.19285 19.0276 5.33332 18.674 5.33332H13.3407C12.987 5.33332 12.6479 5.19285 12.3978 4.9428C12.1478 4.69275 12.0073 4.35361 12.0073 3.99999C12.0073 3.64637 12.1478 3.30723 12.3978 3.05718C12.6479 2.80713 12.987 2.66666 13.3407 2.66666H18.674Z" fill="#FF595A"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_124_9141">
                                    <rect width="32" height="32" fill="white" transform="translate(0.00732422)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        {/* share button */}
                        <button aria-label="Share button" className="outline-none border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                <path d="M18.674 6.66666V12C9.34066 13.3333 5.34066 20 4.00732 26.6667C7.34066 22 12.0073 19.8667 18.674 19.8667V25.3333L28.0073 16L18.674 6.66666ZM21.3407 13.1067L24.234 16L21.3407 18.8933V17.2H18.674C15.914 17.2 13.434 17.7067 11.1273 18.4667C12.994 16.6133 15.394 15.16 19.0473 14.6667L21.3407 14.3067V13.1067Z" fill="#2626F1"/>
                            </svg>
                        </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className=" flex flex-col justify-center items-center md:hidden">
            {
                current_data.map((item, index) => 
                <ProjectCard key={index} id={item.id} title={item.title} description={item.body}/>)
            }
          </div>

           {/* pagination */}
      <div className="w-full flex md:flex-row justify-between items-center my-4" aria-label="Pagination navigation">

            {/* 1/3 */}
            {/* <p className="mb-2 w-12 h-12 rounded-full bg-[#001233] text-white flex flex-row items-center justify-center font-bold text-[12px]"
            role="status" aria-label={`Page ${current_page} of ${total_page_no}`}>
            <span className="text-[#FF595A]">{current_page}&nbsp;</span>/&nbsp;{total_page_no}
            </p> */}

            <div className="w-full mx-auto mb-2 flex flex-row gap-2 justify-center md:justify-end items-center px-2">
                <button className="w-[2rem] h-[2rem] border-[0.00625rem] rounded-[0.5rem] border-ova_grey_border p-[0.625rem] flex justify-center items-center"
                    onClick={previousButton} disabled={current_page == 1 ? true : false}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M11.7267 12L12.6667 11.06L9.61341 8L12.6667 4.94L11.7267 4L7.72675 8L11.7267 12Z" fill="#333333"/>
                        <path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="#333333"/>
                    </svg>
                </button>

                {/* left ellipses */}
                { min_page_no_limit >= 1  ? 
                    <button className="w-[2rem] h-[2rem] flex flex-row items-center justify-center p-[0.625rem]  border-ova_grey_order font-bold text-ova_dark_primary"
                    onClick={previousButton}>...</button>
                : ""
                }

                {          
                    array_of_pages.map((item, index) => (
                    item < max_page_no_limit + 1 && item > min_page_no_limit ? (
                    <button key={index} aria-label={`Go to page ${item}`}
                        onClick={() => set_current_page(item)} aria-pressed={current_page == item ? 'true' : 'false'}
                        className={`w-[2rem] h-[2rem]  border-[0.0625rem] rounded-[0.5rem] border-ova_grey_order text-center
                        flex flex-row items-center justify-center font-bold text-[0.8125em] 
                        ${current_page === item ? 'text-ova_white bg-navy_blue' : ' text-ova_dark_primary'}
                        `}   
                        >{item}</button>  ) 
                    : ""
                    )
                    )                 
                }

            {/* right ellipse */}
                { array_of_pages.length > max_page_no_limit ?
                    <button 
                    className="w-[2rem] h-[2rem] rounded-[0.5rem] border-ova_grey_border p-[0.625rem] flex flex-row items-center justify-center font-bold text-ova_dark_primary"
                    onClick={nextButton}>...</button>
                : null
                }
                <button className="w-[2rem] h-[2rem] border-[0.00625rem] rounded-[0.5rem] border-ova_grey_border p-[0.625rem] flex justify-center items-center"
                    onClick={nextButton} disabled={current_page == total_page_no ? true : false} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4.27325 4L3.33325 4.94L6.38659 8L3.33325 11.06L4.27325 12L8.27325 8L4.27325 4Z" fill="black"/>
                        <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="black"/>
                    </svg>
                </button>
            </div>

         </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsDashboard;
