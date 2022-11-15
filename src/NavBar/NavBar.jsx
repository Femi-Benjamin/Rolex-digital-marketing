import React from "react";

const NavBar = () => {
  return (
    <nav className="h-[100px] md:h-[150px] text-white">
      <div className="md:px-[109px]">
        <div className="h-[150px] flex justify-between items-center">
          <div>
            <img src="/Group 6.png" alt="" />
            <p className="pl-3">Rolex</p>
          </div>

          <div className="not-italics font-rubik font-[400px] text-[20px] leading-[24px]">
            <ul  className="hidden md:flex justify-between items-center gap-[40px] cursor-pointer not-italic md:mr-[271px]">
              <li>Project</li>
              <li>Our Work</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
