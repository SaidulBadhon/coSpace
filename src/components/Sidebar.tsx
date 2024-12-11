import React from "react";
import { IoMdHome, IoMdSettings, IoMdVideocam } from "react-icons/io";

export default function Sidebar() {
  return (
    <div className="w-[450px] p-8 h-screen">
      <div className="bg-slate-200 justify-between rounded-[50px] flex flex-col p-4 justify-center items-center h-full">
        <div>
          <h1 className="text-2xl font-bold py-4">CoSpace</h1>
        </div>

        <div className="w-full flex-col flex gap-4">
          <SidebarItem
            title="Home"
            active
            icon={<IoMdHome className="size-6" />}
          />

          <SidebarItem
            title="Calls"
            icon={<IoMdVideocam className="size-6" />}
          />

          <SidebarItem
            title="AI Notes"
            icon={<IoMdVideocam className="size-6" />}
          />

          <SidebarItem
            title="Schedule"
            icon={<IoMdVideocam className="size-6" />}
          />

          <SidebarItem
            title="Settings"
            icon={<IoMdSettings className="size-6" />}
          />
        </div>

        <div>Saidul Badhon</div>
      </div>
    </div>
  );
}

const SidebarItem = ({
  icon,
  title,
  active,
}: {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
}) => {
  return (
    <button
      className={`flex w-full gap-4 items-center justify-start px-4 py-2 rounded-lg transition hover:bg-black/10 ${
        active ? "bg-black/10" : ""
      }`}
    >
      <div
        className={`flex items-center justify-center  ${
          active ? "text-blue-600" : ""
        }`}
      >
        {icon}
      </div>
      <div
        className={
          active
            ? "h-10 rounded-full text-blue-600  border-r-blue-600 border-r-4"
            : "h-10"
        }
      />
      {title}
    </button>
  );
};
