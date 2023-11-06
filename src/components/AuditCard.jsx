import { useState } from "react";

export const AuditCard = ({ id, userEmail, ip_address, org_id, type, table_name, date, old_values, new_values, row_id, deleteAudit }) => {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <article className="w-[100%] relative h-[16rem] shadow-sm p-4 bg-mobile-card-bg border-[#ddd] border rounded-lg mb-4">
      <div className="relative">
        <button
          className="absolute right-0 top-0 font-bold p-2"
          aria-label="Open context menu"
          aria-haspopup="true"
          aria-expanded={isDropdown}
          onClick={() => setIsDropdown(!isDropdown)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3.25C8.41421 3.25 8.75 2.91421 8.75 2.5C8.75 2.08579 8.41421 1.75 8 1.75C7.58579 1.75 7.25 2.08579 7.25 2.5C7.25 2.91421 7.58579 3.25 8 3.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 8.75C8.41421 8.75 8.75 8.41421 8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 14.25C8.41421 14.25 8.75 13.9142 8.75 13.5C8.75 13.0858 8.41421 12.75 8 12.75C7.58579 12.75 7.25 13.0858 7.25 13.5C7.25 13.9142 7.58579 14.25 8 14.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {isDropdown && (
          <div
            className="absolute w-32 bg-white p-4 rounded-sm transition-all 
          duration-300 ease-in shadow right-0 top-4 list-none"
            role="menu"
          >
            {/* delete button */}
            <li className="py-1">
              <button
                aria-label="Delete button "
                className="flex flex-row items-center outline-none  border-none"
                onClick={deleteAudit}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                >
                  <g clipPath="url(#clip0_124_9141)">
                    <path
                      d="M26.674 6.66666C27.0276 6.66666 27.3668 6.80713 27.6168 7.05718C27.8668 7.30723 28.0073 7.64637 28.0073 7.99999C28.0073 8.35361 27.8668 8.69275 27.6168 8.9428C27.3668 9.19285 27.0276 9.33332 26.674 9.33332H25.3407L25.3367 9.42799L24.0927 26.856C24.0448 27.5288 23.7437 28.1584 23.2501 28.6181C22.7566 29.0778 22.1071 29.3333 21.4327 29.3333H10.5807C9.90618 29.3333 9.25675 29.0778 8.76317 28.6181C8.2696 28.1584 7.96855 27.5288 7.92066 26.856L6.67666 9.42932C6.67464 9.39736 6.67375 9.36534 6.67399 9.33332H5.34066C4.98704 9.33332 4.6479 9.19285 4.39785 8.9428C4.1478 8.69275 4.00732 8.35361 4.00732 7.99999C4.00732 7.64637 4.1478 7.30723 4.39785 7.05718C4.6479 6.80713 4.98704 6.66666 5.34066 6.66666H26.674ZM22.67 9.33332H9.34466L10.582 26.6667H21.4327L22.67 9.33332ZM18.674 2.66666C19.0276 2.66666 19.3668 2.80713 19.6168 3.05718C19.8668 3.30723 20.0073 3.64637 20.0073 3.99999C20.0073 4.35361 19.8668 4.69275 19.6168 4.9428C19.3668 5.19285 19.0276 5.33332 18.674 5.33332H13.3407C12.987 5.33332 12.6479 5.19285 12.3978 4.9428C12.1478 4.69275 12.0073 4.35361 12.0073 3.99999C12.0073 3.64637 12.1478 3.30723 12.3978 3.05718C12.6479 2.80713 12.987 2.66666 13.3407 2.66666H18.674Z"
                      fill="#FF595A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_124_9141">
                      <rect
                        width="32"
                        height="32"
                        fill="white"
                        transform="translate(0.00732422)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span> Delete</span>
              </button>
            </li>
          </div>
        )}
      </div>
      id, userEmail, ip_address, org_id, type, table_name, date, old_values, new_values, row_id
      <p className="max-w-[80%] line-clamp-3 text-left my-[0.5rem] overflow-hidden whitespace-normal  text-[0.75em]">
        <span className=" text-card-span-text">Action by: </span>{userEmail}
      </p>
      <p className="max-w-[80%] line-clamp-3 text-left my-[0.5rem] overflow-hidden whitespace-normal  text-[0.75em]">
        <span className=" text-card-span-text">Type: </span>{ip_address}
      </p>
      <p className="max-w-[80%] line-clamp-3 text-left my-[0.5rem] overflow-hidden whitespace-normal  text-[0.75em]">
        <span className=" text-card-span-text">Affected entity: </span>{org_id}
      </p>
      <p className="max-w-[80%] line-clamp-3 text-left my-[0.5rem] overflow-hidden whitespace-normal  text-[0.75em]">
        <span className=" text-card-span-text">Record id: </span>{type}
      </p>
      <p className="max-w-[80%] line-clamp-3 text-left my-[0.5rem] overflow-hidden whitespace-normal  text-[0.75em]">
        <span className=" text-card-span-text">Record id: </span>{table_name}
      </p>
      <p className="max-w-[80%] line-clamp-3 text-left my-[0.5rem] overflow-hidden whitespace-normal  text-[0.75em]">
        <span className=" text-card-span-text">Record id: </span>{date}
      </p>
      <p className="max-w-[80%] line-clamp-3 text-left my-[0.5rem] overflow-hidden whitespace-normal  text-[0.75em]">
        <span className=" text-card-span-text">Old Values: </span>{old_values}
      </p>
      <p className="max-w-[80%] line-clamp-3 text-left my-[0.5rem] overflow-hidden whitespace-normal  text-[0.75em]">
        <span className=" text-card-span-text">New values: </span>{new_values}
      </p>
      <p className="max-w-[80%] line-clamp-3 text-left my-[0.5rem] overflow-hidden whitespace-normal  text-[0.75em]">
        <span className=" text-card-span-text">Affected record: </span>{row_id}
      </p>

    </article>
  );
};
