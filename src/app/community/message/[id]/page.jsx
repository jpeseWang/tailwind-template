"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import {
  PhoneIcon,
  VideoCameraIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { Menu } from "@headlessui/react";
import useSWR from "swr";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function PreviewMessage({ params }) {
  const [content, setContent] = useState("");
  const [upLoading, setUploading] = useState(false);
  const session = useSession();
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/message/${params}`,
    fetcher
  );
  let date = new Date().toUTCString().slice(5, 16);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      const response = await fetch(`/api/message/${params}`, {
        method: "PUT",
        body: JSON.stringify({
          senderId: session.data.id,
          senderFullname: session.data.fullname,
          senderUsername: session.data.username,
          senderAvatar: session.data.avatar,
          content,
          date,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("Rating updated successfully");
      } else {
        console.error("Failed to update rating");
      }
      mutate();
      setUploading(false);
      e.target.reset();
    } catch (error) {
      console.error("Error updating rating:", error);
      setUploading(false);
      toast.error("Error updating rating");
    }
  };

  return (
    <>
      {data && (
        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="bg-white pb-6 pt-5 shadow">
            <div className="px-4 sm:flex sm:items-baseline sm:justify-between sm:px-6 lg:px-8">
              <div className="sm:w-0 sm:flex-1">
                <a href="#" className="group block flex-shrink-0">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-9 w-9 rounded-full"
                        src={
                          data?.senderAvatar === session.data.avatar
                            ? data.receiverAvatar
                            : data.senderAvatar
                        }
                        alt=""
                      />
                    </div>
                    <div
                      className="ml-3"
                      onClick={() => {
                        router.push(
                          `/auth/profile/${
                            data?.sender === session.data.id
                              ? data.receiver
                              : data.sender
                          }`
                        );
                      }}
                    >
                      <h1
                        id="message-heading"
                        className="text-lg font-medium text-gray-900 cursor-pointer"
                      >
                        {data?.senderFullname === session.data.fullname
                          ? data.receiverFullname
                          : data.senderFullname}
                      </h1>
                      <p className="truncate text-sm text-gray-500">
                        @
                        {data?.senderUsername === session.data.username
                          ? data.receiverUsername
                          : data.senderUsername}
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:flex-shrink-0 sm:justify-start">
                <span className="inline-flex items-center rounded-full hover:bg-cyan-100 py-0.5 text-sm font-medium ">
                  <PhoneIcon
                    className="cursor-pointer h-6 w-6 mx-2 text-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-600 hover:text-cyan-800"
                    aria-hidden="true"
                  />
                </span>
                <Menu as="div" className="relative ml-3 inline-block text-left">
                  <div>
                    <Menu.Button className="-my-2 flex items-center rounded-full bg-white p-2 ">
                      <VideoCameraIcon
                        className="h-6 w-6 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        aria-hidden="true"
                      />{" "}
                      <span className="mr-1 font-bold text-xl text-green-500">
                        •
                      </span>
                    </Menu.Button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>
          {/* message section*/}
          <ul
            role="list"
            className="space-y-2 py-4 sm:space-y-4 sm:px-6 lg:px-8"
          >
            <form className="rounded-lg my-6" onSubmit={handleSubmit}>
              {/*  MESS */}
              <div className="text-area  rounded-lg text-gray-100 shadow-xl h-96 overflow-y-scroll">
                {data.inbox?.map((mess, idx) => (
                  <div key={idx}>
                    {mess.senderId === session.data.id ? (
                      <>
                        {/* Receiver */}
                        <div className="inbox flex py-1 ml-16 justify-end mt-1">
                          <p className="py-2 px-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl  bg-[#EBF3FF] text-gray-600 max-w-2xl">
                            {mess.content}
                          </p>
                          <img
                            className={`inline-flex h-10 w-10 items-center justify-center rounded-full mx-2 `}
                            src={mess.senderAvatar}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Sender MESS */}
                        <div className="inbox flex py-2">
                          <img
                            className={`inline-flex h-10 w-10 items-center justify-center rounded-full mx-2 `}
                            src={mess.senderAvatar}
                          />
                          <p class="py-2 px-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl bg-[#F7F7F7] text-gray-600 max-w-2xl">
                            {mess.content}
                          </p>
                        </div>
                        {mess.updatedAt}
                      </>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex py-4 mx-6">
                <input
                  className=" ring-2 ring-indigo-400 rounded-lg px-4 py-1.5 placeholder:text-sm placeholder:text-gray-400 shadow-lg shadow-blue-500/50 text-gray-600 w-full"
                  placeholder="Type something..."
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
                <button
                  className="text-[#858996] px-2 py-2 mx-4 rounded-lg  hover:bg-[#1D90F5] cursor-pointer hover:shadow-lg shadow-lg shadow-blue-500/50 bg-gray-200 hover:text-white"
                  type="submit"
                >
                  <PaperAirplaneIcon className="h-6 w-6 inline " />
                </button>
              </div>
              {upLoading && (
                <p className="pl-6 text-gray-600 font-medium">Uploading...</p>
              )}
            </form>
          </ul>
        </div>
      )}
    </>
  );
}
