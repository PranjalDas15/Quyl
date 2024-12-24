import assets from "@/utils/assets";
import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
import { logout, signOut } from "@/actions/logout";

const Navbar = () => {
  return (
    <div className="w-full h-[100px] flex justify-center items-center gap-5 lg:gap-10">
      <div className="relative sm:w-[50%] h-full flex justify-center items-center">
        <input
          type="text"
          className="w-full h-16 rounded-lg pl-20 pr-5 text-xl"
          placeholder="Search your course"
        />
        <div className="absolute left-0 px-5">
          <Image
            alt={assets.icons.search}
            src={assets.icons.search}
            width={25}
            height={25}
          />
        </div>
      </div>
      <div className="sm:w-[50%] flex items-center">
        <div className="w-full hidden sm:flex justify-evenly">
          <Button value={assets.icons.help} />
          <Button value={assets.icons.message} />
          <Button value={assets.icons.settings} />
          <Button value={assets.icons.notification} />
        </div>
        <div className="2xl:w-full flex gap-5 2xl:gap-10 items-center justify-center group">
          <div className="relative bg-yellow-500 rounded-lg overflow-hidden w-12 h-12">
            <Image
              alt={assets.info.name}
              src={assets.info.image}
              width={40}
              height={40}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="absolute top-0 right-0 my-20 mx-10 pt-10 w-[250px] hidden group-hover:flex items-end z-50">
            <div className="bg-white w-full rounded-lg overflow-hidden  shadow-2xl">
              <button onClick={signOut} className="py-3 px-2 w-full  bg-slate-50 hover:bg-slate-200 transition1">
                Logout
              </button>
            </div>
          </div>
          <p className="hidden 2xl:flex font-semibold 2xl:text-2xl text-gray-900">
            {assets.info.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
