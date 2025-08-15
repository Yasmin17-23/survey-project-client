import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner/LoadingSpinner";
import UserTableRows from "../../../components/Dashboard/TableDataRows/UserTableRows";
import { useEffect, useState } from "react";


const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [filter, setFilter] = useState('');
  const [displayedUsers, setDisplayedUsers] = useState([])

  //fetch all users
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users`);
       return data
    },
  });

  useEffect(() => {
    setDisplayedUsers(users)
  }, [users])
    
  const handleFilterRole = e => {
    const filterRole = e.target.value;
    setFilter(filterRole)

    if(!filterRole){
       setDisplayedUsers(users)
    }
    else {
       setDisplayedUsers(users.filter((user) => user.role === filterRole))
    }

  }
 
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <Helmet>
        <title>SurveyBangla || Manage Users</title>
      </Helmet>

      <div className="flex flex-col justify-center items-center my-8">
        <div className="flex flex-col justify-center items-center mb-8">
          <h2 className="md:text-3xl font-arvo  font-bold text-gray-400">
            Manage Users Panel
          </h2>
          <p className="font-semibold text-gray-600">
            All user and their role show here!
          </p>
        </div>
        <div className="flex justify-end">
           <div>
            <select
              name='role'
              id='role'
              className='border p-3 rounded-md border-rose-200 text-gray-500 text-sm outline-none'
              value={filter}
              onChange={handleFilterRole}
            >
              <option value='' className="text-gray-500 text-sm ">All Role</option>
              <option value='user' className="text-gray-500 text-sm">User</option>
              <option value='pro-user' className="text-gray-500 text-sm">Pro-User</option>
              <option value='surveyor' className="text-gray-500 text-sm">Surveyor</option>
              <option value='admin' className="text-gray-500 text-sm">Admin</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col mt-6 min-w-full">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left 
                                rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        No.
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Email
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {/* User row */}
                    {displayedUsers.map((user, index) => (
                      <UserTableRows
                        key={user._id}
                        user={user}
                        index={index}
                        refetch={refetch}
                      />
                    ))} 
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
