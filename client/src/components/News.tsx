import React, { useState } from "react";
import Image from "next/image";
import { fetchNewsData } from "@/func/index";
import NewsCarusel from "./NewsCarusel";

const NewsComponent = () => {
  const [id, setId] = useState(4);
  const news = fetchNewsData();

  return (
    <div className="text-gray-500 font-montserrat  my-[100px]">
      <h1 className="text-[20px] text-black">Latest News</h1>
      <div className="h-[2px] bg-gray-300 mb-[40px]"></div>
      <div className="gap-[100px] flex max-xl:flex max-xl:flex-col">
        <div className="w-[50%]">
          <NewsCarusel id={id} />
        </div>
        <div className="w-[50%] ml-[100px] flex flex-col justify-between gap-[20px]">
          {news.map((item) => (
            <div key={item.id}>
              {item.id <= 5 && (
                <div
                  onClick={() => setId(item.id)}
                  className="flex gap-[50px] cursor-pointer items-center"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className={`${
                      item.id == id && "h-[80px] w-[70px]"
                    } rounded-xl h-[70px] w-[60px] max-xl:h-[120px] max-xl:w-[100px]`}
                    width={70}
                    height={60}
                  />
                  <div>
                    <div className="text-[12px]">{item.date}</div>
                    <h2 className="text-[14px] font-bold">{item.title}</h2>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
