import PropTypes from "prop-types";
//import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
//import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UserUpdateModal from "../../Modal/UserUpdateModal";

const UserTableRows = ({ user, index }) => {
  //const { user: loggedInUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  //const axiosSecure = useAxiosSecure();

  //modal handler
  const roleModalHandler = async (selected) => {
    console.log("User Role Update", selected);
  };
  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {index + 1}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {user?.email}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <span
          className={`px-5 py-1 rounded-full font-medium text-xs 
      ${
        user?.role === "admin"
          ? "bg-red-100 text-red-600"
          : user?.role === "surveyor"
          ? "bg-blue-100 text-blue-600"
          : "bg-green-100 text-green-600"
      }`}
        >
          {user?.role}
        </span>
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 
                                                2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 
                                                4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 
                                                2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 
                                                015.25 6H10"
              />
            </svg>
          </button>
          {/* Update User Role Modal */}
          <UserUpdateModal
            user={user}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            roleModalHandler={roleModalHandler}
          />
        </div>
      </td>
    </tr>
  );
};

UserTableRows.propTypes = {
  user: PropTypes.object,
  index: PropTypes.number,
};

export default UserTableRows;
