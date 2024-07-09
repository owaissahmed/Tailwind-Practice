import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menu, setmenu] = useState(false);
  return (
    <div className="bg-[#2699fb] h-[40px] md:h-[0px] p-4">
      <div className="max-w-[1240px] py-[5px] items-center  mx-auto flex justify-between">
        <div className=" text-3xl font-bold">WsCube Tech</div>
        {menu ? (
          <AiOutlineClose
            className="md:hidden block text-white text-2xl"
            onClick={() => setmenu(false)}
          />
        ) : (
          <AiOutlineMenu
            className="md:hidden block text-white text-2xl"
            onClick={() => setmenu(true)}
          />
        )}

        <ul className="hidden md:flex justify-center gap-10 text-white">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* Responsive */}
        <ul
          className={`md:hidden duration-500 fixed w-full h-screen bg-black ${
            menu ? "left-[0]" : "left-[-100%]"
          }  top-[78px] text-white`}
        >
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
