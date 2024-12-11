import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div 
      style={{
        backgroundImage: `url('./f-bg.jpg')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
      }}
      className="flex flex-col h-fit items-center space-y-8 py-12 px-4 md:px-40 bg-black/20 text-white justify-between"
    >
      {/* About Us */}
      <h1 className="text-4xl text-center md:text-start w-full md:text-6xl text-white mb-10 self-start">CONTACT US</h1>

      <div className="flex flex-col text-center md:text-start md:flex-row md:space-x-4 w-full space-y-8 md:space-y-0">
        {/* Company Info */}
        <div className="flex flex-col w-full md:w-1/3">
          <h1 className="text-[#CAC517] text-lg my-4">DURALITE PTY LTD</h1>
          <p className="text-sm leading-loose">
            Duralite’s focus is to provide exceptionally engineered
            road safety crash barrier systems and solutions to reduce repair
            costs and assist in reducing road fatalities.
          </p>
        </div>

        {/* Head Office */}
        <div className="flex flex-col w-full md:w-1/3">
          <h1 className="text-[#CAC517] text-lg my-4">HEAD OFFICE</h1>
          <p className="text-sm leading-loose">
            Duralite Pty Ltd 61 Foskew Way, Geraldton, Western
            Australia 6530
          </p>
          <div className="flex flex-col text-sm space-y-2 my-4">
            <p className="whitespace-nowrap">
              <span className="text-[#CAC517]">Tel:</span> +91 9529575726
            </p>
            <p className="whitespace-nowrap">
              <span className="text-[#CAC517]">Fax:</span> +91 9529575726
            </p>
            <p className="whitespace-nowrap">
              <span className="text-[#CAC517]">Email:</span> amanshaikh8624@gmail.com
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col w-full md:w-1/3">
          <h1 className="text-[#CAC517] text-lg my-4 whitespace-nowrap">FOLLOW US</h1>
          <div className="flex flex-row text-2xl w-full justify-between max-w-xs mx-auto md:mx-0">
            <FaFacebookF className="hover:text-gray-400" />
            <FaInstagram className="hover:text-gray-400" />
            <FaLinkedin className="hover:text-gray-400" />
            <FaTwitter className="hover:text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
