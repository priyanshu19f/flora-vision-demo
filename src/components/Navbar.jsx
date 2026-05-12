import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
    return (
        <div className="w-full flex justify-center  top-0 z-50">
            <div className="w-full max-w-[99%] px-10 py-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img
                            src="/logo plant.png"
                            alt="logo"
                            className="w-8 h-8 object-contain"
                        />

                        <h1 className="text-white text-[28px] font-semibold tracking-wide">
                            FloraVision.
                        </h1>
                    </div>

                    <ul
                        style={{ fontFamily: "Indie Flower" }}
                        className="hidden md:flex items-center gap-14 text-white text-[16px] font-light"
                    >
                        <li className="cursor-pointer hover:text-green-300 duration-300">
                            Home
                        </li>

                        <li className="flex items-center gap-1 cursor-pointer hover:text-green-300 duration-300">
                            Plants Type
                            <IoMdArrowDropdown className="text-lg mt-0.5 " />
                        </li>

                        <li className="cursor-pointer hover:text-green-300 duration-300">
                            More
                        </li>

                        <li className="cursor-pointer hover:text-green-300 duration-300">
                            Contact
                        </li>
                    </ul>

                    <div className="flex items-center gap-7">
                        <img
                            src="/search icon.png"
                            alt="search"
                            className="w-5 cursor-pointer"
                        />

                        <img
                            src="/cart bag.png"
                            alt="cart"
                            className="w-5 cursor-pointer"
                        />

                        <div className="flex flex-col gap-[5px] cursor-pointer">
                            <div className="w-6 h-0.5 bg-white rounded-full"></div>

                            <div className="w-4 h-0.5 bg-white rounded-full ml-auto"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
