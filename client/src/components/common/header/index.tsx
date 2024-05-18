import { RiSearch2Line } from "react-icons/ri";
import Sidebar from "../sidebar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Header: React.FC = () => {
  return (
    <>
      <header style={{backgroundColor: "#121212"}} className="p-4 flex items-center justify-between fixed top-0 w-full z-10">
        {/* Logo */}
        <div className="text-white text-lg font-bold">MyApp</div>
        <div className="flex items-center border-2 border-gray-600 bg-none w-5/12 rounded-xl px-2 py-1">
          <input
            type="text"
            placeholder="Search..."
            className="border-none outline-none flex-grow bg-transparent text-white"
          />
          <RiSearch2Line className="text-gray-600" />
        </div>
        {/* Notification and Profile Icons */}
        <div className="text-white flex gap-3">
        <IoMdNotificationsOutline className=" text-2xl"/>
        <CgProfile className=" text-2xl"/>
        </div>
      </header>
      <Sidebar />
    </>
  );
};

export default Header;
