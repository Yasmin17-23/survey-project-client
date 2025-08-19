import { Helmet } from "react-helmet";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner/LoadingSpinner";
import CommentRow from "../../../components/Dashboard/TableDataRows/CommentRow";

const UserComments = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  //Fetch survey data for comments
  const { data: comments = [], isLoading } = useQuery({
    queryKey: ["comments", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/comments-survey/${user?.email}`);
      return data;
    },
  });
  console.log(comments);
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <Helmet>
        <title>Pro-User Comments Page</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center my-8">
        <div className="flex flex-col  justify-center items-center mb-8">
          <h2 className="md:text-3xl font-arvo  font-bold text-gray-400">
            Individual Comments on Survey
          </h2>
          <p className="text-sm text-gray-400">
            Here all comments show on survey
          </p>
        </div>

        <div className="min-w-full">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-rose-100 uppercase">
                <tr>
                  <th>Title</th>
                  <th>Question</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                 {
                   comments.map(comment => (
                     <CommentRow key={comment._id} comment={comment} />
                   ))
                 }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserComments;
