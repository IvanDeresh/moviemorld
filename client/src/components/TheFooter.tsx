import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

const TheFooter = () => {
  return (
    <footer className="flex mb-[100px] font-montserrat text-gray-500 bg-gray-50 flex-col justify-around items-center w-full mt-[20px]">
      <div className="flex justify-around w-[80%] my-[20px]">
        <div className="leading-7">
          <h2 className="font-bold text-[15px] max-md:text-[12px]">PROFILE</h2>
          <div className="text-[12px] max-md:text-[10px] cursor-pointer">
            FAQs
          </div>
          <div className="text-[12px] max-md:text-[10px] cursor-pointer">
            Procong plans
          </div>
          <div className="text-[12px] max-md:text-[10px] cursor-pointer">
            Order Tracking
          </div>
          <div className="text-[12px] max-md:text-[10px] cursor-pointer">
            Returns
          </div>
        </div>
        <div className="leading-7">
          <h2 className="font-bold text-[15px] max-md:text-[12px]">
            RECENT POSTS
          </h2>
          <div className="text-[12px] max-md:text-[10px] cursor-pointer">
            Touch of uniquness
          </div>
          <div className="text-[12px] max-md:text-[10px] cursor-pointer">
            Offices you wont forget
          </div>
          <div className="text-[12px] cursor-pointer">Cicilan</div>
        </div>
        <div className="leading-7 ">
          <h2 className="font-bold max-md:text-[12px] text-[15px]">CUSTOMER</h2>
          <div className="text-[12px] max-md:text-[10px] cursor-pointer">
            Help & contact us
          </div>
          <div className="text-[12px] max-md:text-[10px] cursor-pointer">
            Return{" "}
          </div>
          <div className="text-[12px] max-md:text-[10px] cursor-pointer">
            Online stores
          </div>
          <div className="text-[12px] max-md:text-[10px] cursor-pointer">
            Terms & cordition
          </div>
        </div>
        <div className="leading-10">
          <h2 className="font-bold text-[15px] max-md:text-[12px]">CONTACT</h2>
          <div className="flex w-[150%] justify-between">
            <div className="cursor-pointer">
              <InstagramIcon />
            </div>
            <div className="cursor-pointer">
              <XIcon />
            </div>
            <div className="cursor-pointer">
              <FacebookIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] my-[10px] w-[70%] bg-gray-300"></div>
      <p className="flex justify-start w-[70%] my-[20px] text-gray-300 text-[12px]">
        © 2014 Nizami cinema. All Right Reserved
      </p>
    </footer>
  );
};

export default TheFooter;
