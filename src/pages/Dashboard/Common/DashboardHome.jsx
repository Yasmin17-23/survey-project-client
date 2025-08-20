import { Helmet } from "react-helmet";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";

const DashboardHome = () => {
  const { user } = useAuth();
  const [role] = useRole();

  return (
    <>
      <Helmet>
        <title>SurveyBangle || Dashboard</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center my-8">
        <div className="flex flex-col  justify-center items-center mb-8">
          <h2 className="md:text-3xl font-arvo  font-bold text-gray-400">
            Welcome , {user?.displayName}
          </h2>
          <div className=" max-w-full">
            <div className="my-6 p-4 rounded-2xl ">
              <div
                className="w-full bg-center bg-cover h-[20rem] rounded-2xl overflow-hidden "
                style={{
                  backgroundImage:
                    "url(https://i.postimg.cc/9fR4SmX5/dashboard-banner-img.jpg)",
                }}
              >
                <div className="flex items-center justify-center w-full h-full opacity-70 bg-gray-100/80">
                  <div className="text-center p-6">
                    <h1 className="md:text-2xl text-rose-800 font-bold">
                      {role === "user" &&
                        "Explore Our Surveys & Join Our Community!"}
                      {role === "pro-user" &&
                        "Purchase Our Membership & Feedback Our Survey"}
                      {role === "surveyor" &&
                        "Manage Your Created Surveys & Track Responses"}
                      {role === "admin" &&
                        "Monitor All System Activity && Manage Users"}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="stats shadow bg-rose-100">
          <div className="stat">
            <div className="stat-title font-bold">Survey Documentation</div>
            <div className="stat-value">895</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div className="stats shadow bg-rose-100">
          <div className="stat">
            <div className="stat-title font-bold">All User View</div>
            <div className="stat-value">300 </div>
            <div className="stat-desc">71% more than last month</div>
          </div>
        </div>
        <div className="stats shadow bg-rose-100">
          <div className="stat">
            <div className="stat-title font-bold">Purchase Membership</div>
            <div className="stat-value">$59</div>
            <div className="stat-desc">55% more than last month</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
