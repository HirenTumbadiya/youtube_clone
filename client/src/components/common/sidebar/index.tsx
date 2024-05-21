import Link from "next/link";
import React from "react";
import { BiHome } from "react-icons/bi";
import { MdOutlineSubscriptions } from "react-icons/md";

const Sidebar: React.FC = () => {
  return (
    <div
      style={{ backgroundColor: "#121212" }}
      className="text-white h-screen w-64 fixed top-16 pt-5 left-0"
    >
      <ul className="space-y-2 mx-3">
        <li>
          <Link
            href="#"
            className="p-3 hover:bg-gray-800 flex items-center gap-3 rounded-2xl text-base"
          >
            <BiHome />
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="p-3 hover:bg-gray-800 flex items-center gap-3 rounded-2xl text-base"
          >
            <MdOutlineSubscriptions />
            Subscriptions
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="p-3 hover:bg-gray-800 flex items-center gap-3 rounded-2xl text-base"
          >
            Your Channel
          </Link>
        </li>
        <li>
          <a
            href="#"
            className="p-3 hover:bg-gray-800 flex items-center gap-3 rounded-2xl text-base"
          >
            History
          </a>
        </li>
        <li>
          <Link
            href="#"
            className="p-3 hover:bg-gray-800 flex items-center gap-3 rounded-2xl text-base"
          >
            Playlist
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="p-3 hover:bg-gray-800 flex items-center gap-3 rounded-2xl text-base"
          >
            Liked Videos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
