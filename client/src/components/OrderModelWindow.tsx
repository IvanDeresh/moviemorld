import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import PaymentIcon from "@mui/icons-material/Payment";
const OrderModelWindow = ({
  modalVisibility,
  title,
  setModalVisibility,
  purchaes,
  time,
  numberSeat,
}: {
  modalVisibility: boolean;
  purchaes: number;
  title: string;
  time: string;
  numberSeat: number[];
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const session = useSession();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState(session.data?.user?.email || "");
  const [promo, setPromo] = useState("");
  const [number, setNumber] = useState("");
  const [cartNumber, setCartNumber] = useState("");
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const payment = cartNumber.trim() ? true : false;
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  useEffect(() => {
    if (!session?.data?.user) {
      router.replace("/pages/sign-in");
    }
  }, [session, router]);
  const handleSubmit = (e: any) => {
    axios.post("http://localhost:3003/ticket/your-tickets", {
      name: fullName,
      email: email,
      title: title,
      payment: payment,
      time: time,
      numberSeat: numberSeat,
    });
  };
  return (
    <main
      onClick={() => setModalVisibility(false)}
      className={`w-[100%] h-[100%] flex justify-center items-center text-black bg-black bg-opacity-40 fixed top-0 left-0 ${
        modalVisibility ? "scale-1" : "scale-0"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="p-[20px]  mt-[50px] flex flex-col items-center py-[50px] bg-white max-md:w-[90%] w-[694px] h-[749px]"
      >
        <h1 className="text-[30px]">ORDER</h1>
        <div className="gap-[10px] flex flex-col">
          <div className="flex flex-col">
            <label>Name and surname</label>
            <input
              name="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              className="w-[470px] max-md:w-[100%] p-[10px] outline-none h-[38.5px] rounded-md border border-[#CFCFCF]"
            />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-[470px] max-md:w-[100%] p-[10px] outline-none h-[38.5px] rounded-md border border-[#CFCFCF]"
            />
          </div>
          <div className="flex justify-center gap-[13px] items-center">
            <div className="flex flex-col">
              <label>Promo</label>
              <input
                name="promo"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                type="text"
                className="w-[319px] max-md:w-[100%] p-[10px] outline-none h-[38.5px] rounded-md border border-[#CFCFCF]"
              />
            </div>
            <button className="w-[136px] mt-[24px] h-[38.5px] border border-[#CFCFCF] rounded-md">
              Apply
            </button>
          </div>
          <div className="flex flex-col">
            <label>Cell phone</label>

            <input
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="tel"
              className="w-[470px] max-md:w-[100%] p-[10px] outline-none h-[38.5px] rounded-md border border-[#CFCFCF]"
            />
          </div>
          <div className="">
            <label>Payment</label>
            <div className="relative w-[470px] max-md:w-[100%] h-[38.5px] rounded-md border border-[#CFCFCF]">
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
            <input
              name="number code"
              value={cartNumber}
              onChange={(e) => setCartNumber(e.target.value)}
              type="text"
              className="w-[470px] max-md:w-[100%] p-[10px] outline-none h-[38.5px] rounded-md border border-[#CFCFCF]"
            />
            <div className="absolute top-[30px] right-[10px]">
              <PaymentIcon />
            </div>
          </div>
        </div>
        <div className="flex mt-[40px] gap-[30px]">
          <input
            checked={checked}
            onChange={handleChecked}
            type="checkbox"
            className="bg-[#CFCFCF]"
          />
          <p className="text-[12px]">Remember card information</p>
        </div>
        <button
          type="submit"
          className="w-[200px] mt-[20px] h-[35px] text-white rounded-xl bg-[#8D090D]"
        >
          Purchaes: {purchaes}$
        </button>
      </form>
    </main>
  );
};

export default OrderModelWindow;
