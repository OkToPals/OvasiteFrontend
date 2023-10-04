'use client'

import { PaymentMethod, payment_data } from "@/components/PaymentMethod";
import { SidebarNav } from "@/components/SidebarNav";

const SubscriptionDashboard = () => {

  const active_plan = "basic"
  const payment_method = "paypal"

  const checkSvg = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 43.2001C29.0922 43.2001 33.9758 41.1772 37.5765 37.5765C41.1772 33.9758 43.2001 29.0922 43.2001 24C43.2001 18.9079 41.1772 14.0243 37.5765 10.4236C33.9758 6.8229 29.0922 4.80005 24 4.80005C18.9079 4.80005 14.0243 6.8229 10.4236 10.4236C6.8229 14.0243 4.80005 18.9079 4.80005 24C4.80005 29.0922 6.8229 33.9758 10.4236 37.5765C14.0243 41.1772 18.9079 43.2001 24 43.2001ZM32.8968 20.8968C33.334 20.4442 33.5759 19.838 33.5705 19.2087C33.565 18.5794 33.3126 17.9775 32.8676 17.5325C32.4226 17.0875 31.8207 16.8351 31.1914 16.8296C30.5621 16.8242 29.9559 17.0661 29.5033 17.5033L21.6 25.4065L18.4968 22.3032C18.0442 21.8661 17.438 21.6242 16.8087 21.6296C16.1794 21.6351 15.5775 21.8875 15.1325 22.3325C14.6875 22.7775 14.4351 23.3794 14.4296 24.0087C14.4242 24.638 14.6661 25.2442 15.1032 25.6968L19.9032 30.4968C20.3533 30.9468 20.9637 31.1995 21.6 31.1995C22.2364 31.1995 22.8468 30.9468 23.2968 30.4968L32.8968 20.8968Z" fill="#FF595A"/>
      </svg>
    )
  } 

  return (
    <main className="flex flex-col md:flex-row">
      <SidebarNav activeLink={"subscription"} pagetitle={"Subscription"}/>
      <section className=" bg-mobile-bg md:ml-[25vw]  md:w-[75vw]">
        {/* main header - header I */}
        <header className="h-[6rem] hidden flex-row items-center justify-between py-[1.6rem] border-b border-ova_grey_border bg-ova_white md:fixed md:flex md:w-[75vw] z-50">
          <h1 className="text-[2em] font-bold pl-[1.2rem]">Subscription</h1>
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
        <div className="max-w-full flex flex-row px-[1.2rem] pb-4 md:py-[1.5rem] mt-[6.5rem]">
            <h1 className="md:hidden text-[1.25em] font-extrabold text-center w-full mx-auto ">Subscription</h1>
        </div>


        {/* project content desktop view*/}
        <div className="px-[1.2rem] ">
          
          {/* billing */}
          <div className="flex flex-col">
            <h2 className="text-[1.5em]">Billing</h2>
            <article 
              className="flex flex-col md:flex-row bg-ova_white border-ova_grey_border rounded-[0.5rem] p-[1rem] mt-[1rem]">
              
              <div className="w-[100%] md:w-[32%] h-[8rem] border-b md:border-r md:border-b-0 border-ova_grey_border p-[1rem]">
                <h4>Next Billing date</h4>
                <h1 className="lg:mt-[1rem] text-[2em] font-bold ">Sept 30 2023</h1>
              </div>
              <div className="w-[100%] md:w-[32%] h-[8rem] border-b md:border-b-0 md:border-r border-ova_grey_border p-[1rem]">
                <h4>Bill total</h4>
                <h1 className="lg:mt-[1rem] text-[2em] font-bold">$40</h1>
              </div>
              <div className="w-[100%] md:w-[32%] h-[8rem] p-[1rem]">
                <h4>Number of projects</h4>
                <h1 className="lg:mt-[1rem] text-[2em] font-bold">60</h1>
              </div>
            </article>
          </div>
          {/* ends billing div */}

          {/* plans */}
          <div className="flex flex-col mt-[1rem] ">
            <h2 className="text-[1.5em] mt-[1.25rem]">Plans</h2>
            <article 
              className="flex flex-col md:flex-row flex-wrap gap-4 border-ova_grey_border mt-[1rem]">
              
              {/* basic plan */}
              <div 
                className={`relative w-[100%] md:w-[32%] h-[8rem] border
                 p-[1rem] rounded-[0.5rem] flex flex-row flex-grow justify-between
                 ${active_plan == "basic" ? 'bg-peach_secondary border-peach_primary' : 'bg-ova_white border-ova_grey_border'} `}
              >
                {
                  active_plan == "basic" ?
                  
                  <div className="absolute -top-5 -right-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24 43.2001C29.0922 43.2001 33.9758 41.1772 37.5765 37.5765C41.1772 33.9758 43.2001 29.0922 43.2001 24C43.2001 18.9079 41.1772 14.0243 37.5765 10.4236C33.9758 6.8229 29.0922 4.80005 24 4.80005C18.9079 4.80005 14.0243 6.8229 10.4236 10.4236C6.8229 14.0243 4.80005 18.9079 4.80005 24C4.80005 29.0922 6.8229 33.9758 10.4236 37.5765C14.0243 41.1772 18.9079 43.2001 24 43.2001ZM32.8968 20.8968C33.334 20.4442 33.5759 19.838 33.5705 19.2087C33.565 18.5794 33.3126 17.9775 32.8676 17.5325C32.4226 17.0875 31.8207 16.8351 31.1914 16.8296C30.5621 16.8242 29.9559 17.0661 29.5033 17.5033L21.6 25.4065L18.4968 22.3032C18.0442 21.8661 17.438 21.6242 16.8087 21.6296C16.1794 21.6351 15.5775 21.8875 15.1325 22.3325C14.6875 22.7775 14.4351 23.3794 14.4296 24.0087C14.4242 24.638 14.6661 25.2442 15.1032 25.6968L19.9032 30.4968C20.3533 30.9468 20.9637 31.1995 21.6 31.1995C22.2364 31.1995 22.8468 30.9468 23.2968 30.4968L32.8968 20.8968Z" fill="#FF595A"/>
                    </svg>
                  </div> : null
                }

                {/* left div */}
                <div>
                  <h4 className="font-bold text-[1.25em] text-ova_black">Basic Plan</h4>
                  <h1 className="text-[1em] text-ova_dark_secondary mb-[1rem]">Our most popular plan for small teams</h1>
                </div>
                {/* right div */}
                <div>
                  <h1 className="text-[2em] font-bold">$48</h1>
                  <h4 className="text-[0.8em] text-ova_dark_secondary">per month</h4>
                </div>
              </div>
             
             {/* premium */}
             <div 
                className={`relative w-[100%] md:w-[32%] h-[8rem] border
                 p-[1rem] rounded-[0.5rem] flex flex-row flex-grow justify-between
                 ${active_plan == "premium" ? 'bg-peach_secondary border-peach_primary' : 'bg-ova_white border-ova_grey_border'} `}
              >
                {/* check icon */}
                {
                  active_plan == "premium" ?
                  
                  <div className="absolute -top-5 -right-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24 43.2001C29.0922 43.2001 33.9758 41.1772 37.5765 37.5765C41.1772 33.9758 43.2001 29.0922 43.2001 24C43.2001 18.9079 41.1772 14.0243 37.5765 10.4236C33.9758 6.8229 29.0922 4.80005 24 4.80005C18.9079 4.80005 14.0243 6.8229 10.4236 10.4236C6.8229 14.0243 4.80005 18.9079 4.80005 24C4.80005 29.0922 6.8229 33.9758 10.4236 37.5765C14.0243 41.1772 18.9079 43.2001 24 43.2001ZM32.8968 20.8968C33.334 20.4442 33.5759 19.838 33.5705 19.2087C33.565 18.5794 33.3126 17.9775 32.8676 17.5325C32.4226 17.0875 31.8207 16.8351 31.1914 16.8296C30.5621 16.8242 29.9559 17.0661 29.5033 17.5033L21.6 25.4065L18.4968 22.3032C18.0442 21.8661 17.438 21.6242 16.8087 21.6296C16.1794 21.6351 15.5775 21.8875 15.1325 22.3325C14.6875 22.7775 14.4351 23.3794 14.4296 24.0087C14.4242 24.638 14.6661 25.2442 15.1032 25.6968L19.9032 30.4968C20.3533 30.9468 20.9637 31.1995 21.6 31.1995C22.2364 31.1995 22.8468 30.9468 23.2968 30.4968L32.8968 20.8968Z" fill="#FF595A"/>
                    </svg>
                  </div> : null
                }
                {/* left div */}
                <div>
                  <h4 className="font-bold text-[1.25em] text-ova_black">Premium</h4>
                  <h1 className="text-[1em] text-ova_dark_secondary mb-[1rem]">Our most popular plan for small teams</h1>
                </div>
                {/* right div */}
                <div>
                  <h1 className="text-[2em] font-bold">$60</h1>
                  <h4 className="text-[0.8em] text-ova_dark_secondary">per month</h4>
                </div>
              </div>


              {/* enterprise */}
             <div 
                className={`relative w-[100%] md:w-[32%] h-[8rem] border
                 p-[1rem] rounded-[0.5rem] flex flex-row flex-grow justify-between
                 ${active_plan == "enterprise" ? 'bg-peach_secondary border-peach_primary' : 'bg-ova_white border-ova_grey_border'} `}
              >
                {/* check icon */}
                {
                  active_plan == "enterprise" ?
                  
                  <div className="absolute -top-5 -right-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24 43.2001C29.0922 43.2001 33.9758 41.1772 37.5765 37.5765C41.1772 33.9758 43.2001 29.0922 43.2001 24C43.2001 18.9079 41.1772 14.0243 37.5765 10.4236C33.9758 6.8229 29.0922 4.80005 24 4.80005C18.9079 4.80005 14.0243 6.8229 10.4236 10.4236C6.8229 14.0243 4.80005 18.9079 4.80005 24C4.80005 29.0922 6.8229 33.9758 10.4236 37.5765C14.0243 41.1772 18.9079 43.2001 24 43.2001ZM32.8968 20.8968C33.334 20.4442 33.5759 19.838 33.5705 19.2087C33.565 18.5794 33.3126 17.9775 32.8676 17.5325C32.4226 17.0875 31.8207 16.8351 31.1914 16.8296C30.5621 16.8242 29.9559 17.0661 29.5033 17.5033L21.6 25.4065L18.4968 22.3032C18.0442 21.8661 17.438 21.6242 16.8087 21.6296C16.1794 21.6351 15.5775 21.8875 15.1325 22.3325C14.6875 22.7775 14.4351 23.3794 14.4296 24.0087C14.4242 24.638 14.6661 25.2442 15.1032 25.6968L19.9032 30.4968C20.3533 30.9468 20.9637 31.1995 21.6 31.1995C22.2364 31.1995 22.8468 30.9468 23.2968 30.4968L32.8968 20.8968Z" fill="#FF595A"/>
                    </svg>
                  </div> : null
                }
                {/* left div */}
                <div>
                  <h4 className="font-bold text-[1.25em] text-ova_black">Enterprise</h4>
                  <h1 className="text-[1em] text-ova_dark_secondary mb-[1rem]">Our most popular plan for Organizations</h1>
                </div>
                {/* right div */}
                <div>
                  <h1 className="text-[2em] font-bold">$100</h1>
                  <h4 className="text-[0.8em] text-ova_dark_secondary">per month</h4>
                </div>
              </div>

            </article>
             {/* subscription action button */}
             <div className="w-full flex flex-row justify-end  md:justify-start mt-[2rem]">
                <button className="bg-peach_primary rounded-md text-ova_white py-[1rem] px-[1.25rem]">
                  Change or cancel subscription
                </button>
            </div>
          </div>  
          {/* ends plans div */}


          {/* payment method */}
          <div className="flex flex-col mt-[1rem] pb-[4rem]">
            <h2 className="text-[1.5em] mt-[1.25rem]">Payment Method</h2>
            <article 
            className="flex flex-col md:flex-row gap-4 border-ova_grey_border mt-[1rem]">

            {
              payment_data.map((item, index) => 
              <PaymentMethod key={index} name={item.name} active_method={item.active_method} remove_method={() => null}
                svg_or_icon={item.icon} account_no={item.account_no}
                />
              )
            }

             {/* add new method */}
             <button 
                className={`relative w-[100%] md:w-[32%] h-[8rem] border
                 p-[1rem] rounded-[0.5rem] flex flex-col justify-center items-center
                bg-ova_white  border-dashed `}
              >
        
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <g clip-path="url(#clip0_190_266)">
                    <path d="M27.5 22.5V12.5H22.5V22.5H12.5V27.5H22.5V37.5H27.5V27.5H37.5V22.5H27.5ZM25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50Z" fill="#C3C3C3"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_190_266">
                      <rect width="50" height="50" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </button>

          </article>
          </div> 



        </div>
      </section>
    </main>
  );
};

export default SubscriptionDashboard;
