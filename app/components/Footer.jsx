import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div 
    style={{
        backgroundImage: `url('./f-bg.jpg')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
      }}
    className="flex flex-col h-fit items-center space-x-2 py-12  px-40 bg-black/20 text-white justify-between "
    >
      {/* About Us */}
      <h1 className="text-6xl text-white mb-10 mr-auto">CONTACT US</h1>

      <div className="flex space-x-2">
        <div className="flex flex-col w-full">
          <h1 className="text-[#CAC517] text-lg my-4">DURALITE PTY LTD</h1>
          <p className="text-sm  leading-loose">
            KSI Global Australia’s focus is to provide exceptionally engineered
            road safety crash barrier systems and solutions to reduce repair
            costs and assist in reducing road fatalities.
          </p>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="text-[#CAC517] text-lg my-4">HEAD OFFICE</h1>
          <p className="text-sm leading-loose">
            KSI Global Australia Pty Ltd 61 Foskew Way, Geraldton, Western
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
              <span className="text-[#CAC517]">Email:</span>{" "}
              amanshaikh8624@gmail.com
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="text-[#CAC517] text-lg my-4 whitespace-nowrap">
            FOLLOW US
          </h1>

          <div className="flex flex-row text-2xl w-full justify-between pr-16">
            <FaFacebookF className="hover:text-gray-400"/>
            <FaInstagram className="hover:text-gray-400"/>
            <FaLinkedin className="hover:text-gray-400"/>
            <FaTwitter className="hover:text-gray-400"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
