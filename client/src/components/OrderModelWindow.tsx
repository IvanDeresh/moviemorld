import React from "react";
import PaymentIcon from "@mui/icons-material/Payment";
const OrderModelWindow = ({
  modalVisibility,
  setModalVisibility,
  purchaes,
}: {
  modalVisibility: boolean;
  purchaes: number;
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <main
      onClick={() => setModalVisibility(false)}
      className={`w-[100%] h-[100%] flex justify-center items-center text-black bg-black bg-opacity-40 fixed top-0 left-0 ${
        modalVisibility ? "scale-1" : "scale-0"
      }`}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        className="p-[20px]  flex flex-col items-center py-[50px] bg-white w-[694px] h-[749px]"
      >
        <h1 className="text-[30px]">ORDER</h1>
        <div className="gap-[10px] flex flex-col">
          <div className="flex flex-col">
            <label>Name and surname</label>
            <input className="w-[470px] p-[10px] outline-none h-[38.5px] rounded-md border border-[#CFCFCF]" />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input className="w-[470px] p-[10px] outline-none h-[38.5px] rounded-md border border-[#CFCFCF]" />
          </div>
          <div className="flex justify-center gap-[13px] items-center">
            <div className="flex flex-col">
              <label>Promo</label>
              <input className="w-[319px] p-[10px] outline-none h-[38.5px] rounded-md border border-[#CFCFCF]" />
            </div>
            <button className="w-[136px] mt-[24px] h-[38.5px] border border-[#CFCFCF] rounded-md">
              Apply
            </button>
          </div>
          <div className="flex flex-col">
            <label>Cell phone</label>
            <div className="flex gap-[15px]">
              <input
                placeholder="ex. +380"
                className="w-[88px] outline-none pl-[10px] pt-[4px] h-[35px] rounded-md border border-[#CFCFCF]"
              />
              <div className="relative w-[88px] border border-[#CFCFCF] rounded-md">
                <div className="relative">
                  <select className="flex items-center appearance-none w-full  outline-none h-[33px] rounded  px-4  text-gray-700 cursor-pointer  ">
                    <option value="" disabled selected></option>
                    <option value="Visa bank card">10</option>
                    <option value="Binance">9</option>
                    <option value="BLIK">8</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 fill-current text-gray-700"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 12l-6-6 1.414-1.414L10 9.172l4.586-4.586L16 6z" />
                    </svg>
                  </div>
                </div>
              </div>
              <input className="w-[264px] p-[10px] outline-none h-[35px] rounded-md border border-[#CFCFCF]" />
            </div>
          </div>
          <div className="">
            <label>Payment</label>
            <div className="relative w-[470px] h-[38.5px] rounded-md border border-[#CFCFCF]">
              <div className="relative">
                <div className="relative">
                  <select className="flex items-center appearance-none w-full  outline-none h-[33px] rounded  px-4  text-gray-700 cursor-pointer  ">
                    <option value="" disabled selected>
                      Select payment method
                    </option>
                    <option value="Visa bank card">Visa bank card</option>
                    <option value="Binance">Binance</option>
                    <option value="BLIK">BLIK</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 fill-current text-gray-700"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 12l-6-6 1.414-1.414L10 9.172l4.586-4.586L16 6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex relative flex-col">
            <label>Card Number</label>
            <input className="w-[470px] p-[10px] outline-none h-[38.5px] rounded-md border border-[#CFCFCF]" />
            <div className="absolute top-[30px] right-[10px]">
              <PaymentIcon />
            </div>
          </div>
        </div>
        <div className="flex mt-[40px] gap-[30px]">
          <input type="checkbox" className="bg-[#CFCFCF]" />
          <p className="text-[12px]">Remember card information</p>
        </div>
        <button className="w-[200px] mt-[20px] h-[35px] text-white rounded-xl bg-[#8D090D]">
          Purchaes: {purchaes}$
        </button>
      </form>
    </main>
  );
};

export default OrderModelWindow;
