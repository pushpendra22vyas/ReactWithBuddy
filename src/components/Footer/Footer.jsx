import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiOutlineLink, AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-black border-t border-gray-200 shadow md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <div className="md:flex md:items-center md:justify-between">
        <span className="text-sm text-cyan-400 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Pushpendra
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center text-2xl mt-2">
        <ul className="flex justify-center">
            <li className="bg-white rounded cursor-pointer text-[#0077b5] mx-2">
                <AiFillLinkedin/>
            </li>
            <li className="text-gray-900 cursor-pointer rounded bg-white mx-2">
                <AiFillGithub />
            </li>
            <li className="bg-white rounded cursor-pointer text-[#1877F2] mx-2">
                <AiFillFacebook  />
            </li>
            <li className="bg-white rounded cursor-pointer text-[#1877F2] mx-2">
                <AiOutlineLink   />
            </li>
            <li className="bg-white rounded cursor-pointer text-[#C13584] mx-2">
                <AiFillInstagram    />
            </li>
            
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
