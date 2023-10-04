'use client'
import { ProjectCard } from "@/components/ProjectCard";
import { SidebarNav } from "@/components/SidebarNav";
import { useEffect, useState } from "react";
import { audit_trail_dummy_data } from "./dummyData";
import { AuditCard } from "@/components/AuditCard";

const Audit = () => {

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
    setData(audit_trail_dummy_data)
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
      <SidebarNav activeLink={"audit"} pagetitle={'Audit'} />

      <section className=" bg-mobile-bg md:bg-ova_white md:ml-[25vw]  md:w-[75vw]">
        {/* main header - header I */}
        <header className="h-[6rem] hidden flex-row items-center justify-between py-[1.6rem] border-b border-ova_grey_border bg-ova_white md:fixed md:flex md:w-[75vw] z-50">
          <h1 className="text-[2em] font-bold pl-[1.2rem]">Audit</h1>
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
        <h1 className="md:hidden text-[1.25em] font-extrabold text-center mt-[4rem] p-4">Audit</h1>
        {/* project content desktop view*/}
        <div className="px-[1.2rem] ">
          <table className="w-[100%] mx-auto hidden md:block">
            <thead className="text-left">
              <tr>
                <th className={`${th_style}`}>S/N</th>
                <th className={`${th_style}`}>Action By</th>
                <th className={`${th_style}`}>Type</th>
                <th className={`${th_style}`}>Affected Entity</th>
                <th className={`${th_style}`}>Record ID</th>
                <th className={`${th_style}`}>Old vzalues</th>
                <th className={`${th_style}`}>New Values</th>
                <th className={`${th_style}`}>Time</th>
                <th className={`${th_style}`}>Affected Record</th>
              </tr>
            </thead>
            <tbody>
              {current_data.map((item, index) => (
                <tr key={index}>
                  <td className={`${td_style}`}>{item.id}</td>
                  <td className={`${td_style}`}>{item.action_by}</td>
                  <td className={`${td_style}`}>{item.type}</td>
                  <td className={`${td_style}`}>{item.affected_entity}</td>
                  <td className={`${td_style}`}>{item.record_id}</td>
                  <td className={`${td_style}`}>{item.old_values}</td>
                  <td className={`${td_style}`}>{item.new_values}</td>
                  <td className={`${td_style}`}>{''}</td>
                  <td className={`${td_style}`}>{item.affected_record}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* mobile viwq */}
          <div className=" flex flex-col justify-center items-center md:hidden">
            {
                current_data.map((item, index) => 
                <AuditCard key={index} 
                action_by = {item.action_by} 
                type = {item.action_by} 
                affected_entity = {item.affected_entity}  
                record_id = {item.record_id}  
                old_values = {item.old_values} 
                new_values = {item.new_values} 
                time = {item.time} 
                affected_record = {item.affected_record} 
                />)
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

export default Audit;
