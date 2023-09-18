import Link from "next/link";
import React from "react";

function Navbar() {
  const linkList = [
    { name: "Home", link: "/" },
    { name: "Blogs", link: "/blogs" },
    { name: "Resources", link: "/resources" },
    { name: "Contact Us", link: "/contactus" },
  ];
  return (
    // <div className="fixed  w-full flex justify-center">
    <div className="flex justify-center pt-3  w-full  self-center fixed z-50 ">
      <div className="flex bg-white py-5  w-5/6   self-center justify-between px-5 rounded-full">
        <div className="flex items-center">
          <Link href={"/"}>
            <h1 className=" font-black text-2xl">SCG</h1>
          </Link>
        </div>
        <div className="flex">
          <div className="flex items-center pr-12">
            {linkList.map((e, i) => {
              return (
                <Link
                  className=" px-2 font-semibold text-lg"
                  key={i}
                  href={e.link}
                >
                  {e.name}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center">
            <button className=" mx-4 h-[51px] w-[143px] rounded-full  border-[1px] border-black font-semibold text-lg">
              Login
            </button>
            <button className=" mx-4 h-[51px] w-[143px] rounded-full bg-black text-white   font-semibold text-lg">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Navbar;
