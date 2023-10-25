import React from "react";

const Footer = () => {
    //getting current year
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-300 p-6">
      <div className="flex items-center justify-center"></div>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold ml-14 text-black uppercase">
          Shopsy
        </div>
        <div>
          <p className="text-black text-sm no-underline normal-case">
            Copyright {year} Page By <span className="font-bold text-xl">@m@nCode</span>
            ;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
