import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import {
  Dialog,
  Listbox,
  Transition,
  TransitionChild,
  DialogTitle,
  DialogPanel,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
const status = ["publish", "unpublish"];

const UpdateStatusModal = ({
  survey,
  isModalOpen,
  setIsModalOpen,
  statusModalHandler,
  feedback,
  setFeedback
}) => {
  const [selected, setSelected] = useState(survey?.status);
  

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsModalOpen(false)}
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
              <DialogPanel className="w-full h-80 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-rose-700/50"
                >
                  User Role Update
                </DialogTitle>
                <div className="mt-4 w-full">
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                      <ListboxButton className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selected}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <AiOutlineDown
                            className="h-4 w-4 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </ListboxButton>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <ListboxOptions
                          className="absolute mt-1 max-h-70 w-full overflow-auto 
                            rounded-md bg-white py-1 text-base shadow-md ring-1 ring-black/5 
                            focus:outline-none sm:text-sm"
                        >
                          {status.map((status, roleIdx) => (
                            <ListboxOption
                              key={roleIdx}
                              className="relative cursor-default select-none py-2 pl-10 pr-4 
                                  text-rose-400 data-[focus]:bg-blue-100  data-[focus]:text-amber-900"
                              value={status}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {status}
                                  </span>
                                  {selected ? (
                                    <span
                                      className="absolute inset-y-0 left-0 flex items-center pl-3
                                         text-blue-300"
                                    >
                                      <BsCheckLg
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </ListboxOption>
                          ))}
                        </ListboxOptions>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <hr className="mt-10 text-amber-100" />
                <div className="flex mt-3 justify-center gap-5">
                  <textarea
                    name="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="w-full border border-rose-300 rounded-md p-3 text-sm"
                    rows="4"
                    placeholder="Please provide a reason for unpulishing..."
                  ></textarea>
                </div>

                <div className="flex mt-3 justify-center gap-5">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-200 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    onClick={() => statusModalHandler(selected)}
                  >
                    <span className="flex items-center gap-2">
                      <AiFillEdit className="text-lg" />
                      Update
                    </span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <span className="flex items-center gap-2 ">
                      <MdOutlineCancel className="text-lg" />
                      Cancel
                    </span>
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

UpdateStatusModal.propTypes = {
  survey: PropTypes.object,
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
  statusModalHandler: PropTypes.func,
  feedback: PropTypes.string,
  setFeedback: PropTypes.func,
};

export default UpdateStatusModal;
