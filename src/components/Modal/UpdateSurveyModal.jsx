import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogTitle,
  DialogPanel,
} from "@headlessui/react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import UpdateSurveyForm from "../Form/UpdateSurveyForm";

const UpdateSurveyModal = ({
  survey,
  isUpdateModalOpen,
  setIsUpdateModalOpen,
  refetch,
}) => {
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const [surveyData, setSurveyData] = useState(survey);
  const [isLoading, setIsLoading] = useState(false);

  
  const handleUpdateSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const updatedSurveyData = Object.assign({}, surveyData)
    delete updatedSurveyData._id;
    console.log(updatedSurveyData)

    //update survey request to server
    try{
       const { data } = await axiosSecure.put(`/survey/update/${survey?._id}`,
         updatedSurveyData
       )
       console.log(data);
       refetch();
       setIsLoading(false)
       setIsUpdateModalOpen(false)
       toast.success('Survey Data Updated!!')
    } catch (err) {
        console.log(err)
        setIsLoading(false)
        toast.error(err.message)
    }
     
  };

  return (
    <Transition appear show={isUpdateModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsUpdateModalOpen(false)}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0  bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Update Survey
                </DialogTitle>
                <div className="mt-2 w-full">
                  {/* Update room form */}
                  <UpdateSurveyForm
                    survey={survey}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    handleUpdateSubmit={handleUpdateSubmit}
                    isLoading={isLoading}
                    surveyData={surveyData}
                    setSurveyData={setSurveyData}
                  />
                </div>
                <hr className="mt-3 text-amber-200" />
                <div className="mt-3">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={() => setIsUpdateModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

UpdateSurveyModal.propTypes = {
   survey: PropTypes.object,
   isUpdateModalOpen: PropTypes.bool,
   setIsUpdateModalOpen: PropTypes.func,
   refetch: PropTypes.func,
}
export default UpdateSurveyModal;
