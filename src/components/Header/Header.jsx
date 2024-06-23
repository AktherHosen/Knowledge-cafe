import React from "react";
import Profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex items-center justify-between py-2 mb-5  border-b-2">
      <h1 className="text-3xl font-bold">Knowledge cafe</h1>
      <img src={Profile} alt="" />
    </div>
  );
};

export default Header;
