import React from "react";
import { IoIosLink, IoMdVideocam } from "react-icons/io";

export default function HomePage() {
  return (
    <div className="h-screen justify-center items-center flex-col flex w-full">
      <h1 className="text-5xl text-center max-w-[750px] leading-normal font-medium ">
        Video calls and meetings for anyone that neeeds AI Coworkers
      </h1>

      <p className="text-2xl text-black/75 text-center max-w-[750px] mt-4">
        Connect, collaborate, and don't feel lonely while triyng to focus
      </p>

      <div className="flex justify-center items-center mt-8 gap-6">
        <button className="flex gap-4 justify-center items-center transition bg-blue-500 hover:bg-blue-600 text-white rounded-2xl px-8 py-4 text-xl font-medium">
          <IoMdVideocam />
          New Meeting
        </button>

        <button className="border border-black/25 flex gap-4 transition hover:bg-black/10 justify-center items-center bg-white text-black/50 rounded-2xl px-8 py-4 text-xl font-medium">
          <IoIosLink />
          Enter a code or link
        </button>
      </div>
    </div>
  );
}
