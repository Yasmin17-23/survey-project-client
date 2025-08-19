import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";

const Profile = () => {
  const { user } = useAuth();
  const [role] = useRole();

  return (
    <div className="flex flex-col justify-center items-center md:my-18 flex-wrap">
      <div className="flex flex-col justify-center max-w-md p-6 shadow-md rounded-xl 
      sm:px-12 bg-gray-300 dark:text-gray-800">
        <img
          src={user?.photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square border-2 border-rose-300"
        />
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="md:text-2xl font-bold text-gray-700">
              <span className="text-amber-700">Name: </span>
                {user?.displayName}
              </h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600 font-semibold py-2">
              <span className="text-amber-700">Role: </span>
              {role.replace(/(^\w|-\w)/g, char => char.toUpperCase())}
            </p>
          </div>
          <div className="flex justify-center pt-2 space-x-4 align-center">
             <p className="px-5 text-xs sm:text-base dark:text-gray-600 font-semibold py-2">
              <span className="text-amber-700">Email: </span>
              {user?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
