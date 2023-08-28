/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Fragment, useState, useEffect } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { PhotoIcon, TrashIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Image } from "cloudinary-react";
import Modal from "react-modal";
const projects = [
  { id: 1, name: "Workflow Inc. / Website Redesign", url: "#" },
];

export default function PostCreate({ isOpen, onClose }) {
  const [open, setOpen] = useState(true);
  const [file, setFile] = useState(null);
  const [previewImg, setPreviewImg] = useState();
  const [imageURL, setImageURL] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];

    console.log("local img ne", selectedFile);
    selectedFile.preview = URL.createObjectURL(selectedFile);
    setPreviewImg(selectedFile);
    setFile(selectedFile);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "vnwxgacv");
    setUploading(true);
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dfdkflzjs/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    setImageURL(data.secure_url);
    setUploading(false);
  };

  useEffect(() => {
    return () => {
      previewImg && URL.revokeObjectURL(previewImg.preview);
    };
  }, [previewImg]);
  useEffect(() => {
    console.log("Link anh ne: ", imageURL);
  }, [imageURL]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-300 hover:text-gray-800 z-50 font-bold"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>
      <img
        src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <Transition.Root show={open} as={Fragment} appear>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <Combobox onChange={(item) => (window.location = item.url)}>
                  <div>
                    <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                      <div className="px-4 py-6 sm:p-8">
                        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div className="col-span-full">
                            <label
                              htmlFor="website"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Title
                            </label>
                            <div className="mt-2">
                              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                                <input
                                  type="text"
                                  name="website"
                                  id="website"
                                  className="w-full block flex-1 border-0 bg-transparent py-1.5 px-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  placeholder="Your post's title..."
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-span-full">
                            <label
                              htmlFor="content"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Content
                            </label>
                            <div className="mt-2">
                              <textarea
                                id="content"
                                name="content"
                                rows={3}
                                placeholder="Your post's content..."
                                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={""}
                              />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">
                              Write an awesome post!
                            </p>
                          </div>

                          <div className="col-span-full">
                            <label
                              htmlFor="cover-photo"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Cover photo
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                              {uploading ? (
                                <>
                                  <svg
                                    aria-hidden="true"
                                    className="w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                      fill="currentFill"
                                    />
                                  </svg>
                                </>
                              ) : (
                                <>
                                  {" "}
                                  <div className="text-center">
                                    {previewImg ? (
                                      <>
                                        <img
                                          src={previewImg.preview}
                                          className=""
                                        />
                                        <button
                                          type="button"
                                          className="inline py-1.5 px-1.5 ring-1 rounded my-4"
                                          onClick={() => {
                                            URL.revokeObjectURL(
                                              previewImg.preview
                                            );
                                            setPreviewImg(null);
                                          }}
                                        >
                                          {" "}
                                          <TrashIcon className="inline h-6 w-6 top-3 right-3 text-gray-500 hover:text-gray-800 z-50 font-bold cursor-pointer" />
                                          <span className="text-sm leading-6 text-gray-600">
                                            Remove image
                                          </span>
                                        </button>
                                      </>
                                    ) : (
                                      <>
                                        {" "}
                                        <PhotoIcon
                                          className="mx-auto h-12 w-12 text-gray-300"
                                          aria-hidden="true"
                                        />
                                      </>
                                    )}

                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                      <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                      >
                                        <span>Upload a file</span>
                                        <input
                                          id="file-upload"
                                          name="file-upload"
                                          type="file"
                                          className="sr-only"
                                          onChange={handleFileChange}
                                        />
                                      </label>
                                      <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">
                                      PNG, JPG, GIF up to 10MB
                                    </p>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                        <button
                          type="button"
                          className="text-sm font-semibold leading-6 text-gray-900"
                          onClick={() => {
                            onClose();
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Create
                        </button>
                      </div>
                    </form>
                  </div>
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </Modal>
  );
}
