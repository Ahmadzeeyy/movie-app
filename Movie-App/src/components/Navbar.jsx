import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between h-auto py-7 px-12 sticky top-0 ">
        <div className="">logo</div>
        <div className="flex gap-7 list-none text-">
          <a href="">popular</a>
          <a href="">new & popular</a>
          <a href="">anime</a>
          <a href="">action</a>
        </div>
        <div className=" space-x-8 ">
          <a href="">login</a>
          <a href="">daftar</a>
        </div>
      </nav>
    </>
  );
}
