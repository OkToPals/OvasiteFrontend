import { generate_invite_link_url } from "@/api_utils";
import { useState } from "react";
import { get_cookie } from "./helperFunctions/Cookies";
import axios_instance from "@/axiosInstance";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const SendInviteModal = ({
  handleCancelBtn,
  handleSendInviteBtn,
  isInviteModalActive,
  orgId
}) => {
  const [inviteEmail, setinviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("");

  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState(false)
  const [roleError, setRoleError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSendInviteButton = () => {
    if (!orgId || orgId === undefined || orgId === '') {
     setErrorMessage("No organization created")
    }
    else if (!inviteEmail) {
        setEmailError(true)
        setErrorMessage("Invite mail is required")
    } else if (!inviteRole) {
      setEmailError(false)
      setRoleError(true)
      setErrorMessage("Employee role is required")
    } else {
        setErrorMessage('')
        setEmailError(false)
        setRoleError(false)
      let user_login_details = get_cookie("ovasite_user");

      if (user_login_details) {
        setLoading(true);
        user_login_details = JSON.parse(user_login_details);

        let data = JSON.stringify({
          email: inviteEmail,
          role: inviteRole,
        });
        let config = {
          method: "post",
          url: generate_invite_link_url + `${orgId}/generate-invite-link`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user_login_details.jwt}`,
          },
          data: data,
        };

        axios_instance
          .request(config)
          .then((response) => {
            setLoading(false);
            console.log(JSON.stringify(response.data));
            toast.success("Invite sent successfully!");
            setTimeout(() => {
              window.location.reload();
            }, 5000);
          })
          .catch((error) => {
            console.log(error.response.data);
            setLoading(false);
            toast.error(`${error.response.data.error}`);
          });
      }
    }
  };

  return (
    <div
      role="modal"
      aria-label="Create project"
      className={`fixed inset-0 top-0 bottom-0 left-0 right-0 rounded-md max-h-screen z-50 
        transition-all duration-500 ease-in-out bg-ova_grey
        ${isInviteModalActive ? "opacity-100" : "opacity-0"}
        `}
    >
      <div className="mx-auto h-fit w-[80%] md:w-[50%] bg-white border pb-8  my-8 flex flex-col overflow-y-scroll ">
        {/* header */}
        <div className="h-16 w-[80%] md:w-[50%]  mx-auto fixed flex flex-row justify-between px-[0.5rem] bg-ova_white border-b">
          <p className="text-center my-4 font-semibold text-[1em]">
            Send Invite: Invite details
          </p>
          <button className="" onClick={handleCancelBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M1 17L17 1M1 1L17 17"
                stroke="red"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* body */}
        <div className="flex flex-col px-[2rem] mt-20">
            {/* set error message */}
        {errorMessage ? <p className="text-red-500 p-4 md:p-8 text-center italic text-[1em]">{errorMessage}</p> : null }
          {/* invitee email */}
          <div className="flex flex-col">
            <label htmlFor="userEmail" className="text-[1em] mb-1">
              Email <span className="text-red-500 mb-3">*</span>
            </label>
            <input
              type="email"
              placeholder="email"
              id="userEmail"
              className={`border-[1px] ${emailError ? 'border-red-500' : 'border-ova_grey_border' } p-[1rem] rounded-md`}
              onChange={(e) => setinviteEmail(e.target.value)}
            />
          </div>

          {/* invitee role */}
          <div className="flex flex-col mt-[1rem]">
            <label htmlFor="sector" className="text-[1em] mb-1">
              Role <span className="text-red-500 ">*</span>
            </label>
            <select
              name="sector"
              id="sector"
              className={`border-[1px] ${roleError ? 'border-red-500' : 'border-ova_grey_border' } p-[1rem] rounded-md`}
              onChange={(e) => setInviteRole(e.target.value)}
            >
              <option value="">-Select Role-</option>
              <option value="MANAGER">MANAGER</option>
              <option value="SUPERVISOR">SUPERVISOR</option>
              <option value="FIELD_AGENT">FIELD AGENT</option>
              <option value="GUEST">GUEST</option>
            </select>
          </div>
          {/* send invite button */}
          <div className=" flex flex-row justify-center md:justify-end">
            <button
              className="md:w-[40%] w-[80%] px-4 py-2 my-8 bg-peach_primary rounded-md text-white"
              onClick={handleSendInviteButton}
            >
              Send Invite
            </button>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};
