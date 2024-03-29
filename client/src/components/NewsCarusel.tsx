import React from "react";
import { useNewsData } from "@/func/index";

const NewsCarusel = ({ id }: { id: number }) => {
  const news = useNewsData();

  return (
    <div>
      {news.map((item) => (
        <div key={item.id}>
          {item.id === id && (
            <div
              style={{
                backgroundImage: `url(${item.image})`,

                backgroundSize: "cover",
              }}
              className="rounded-2xl w-[500px] h-[500px] max-sm:w-[90vw] max-sm:ml-[10px] text-white flex flex-col justify-end p-[40px] gap-[10px]"
            >
              <div className="flex items-top gap-[40px]">
                <div className="text-[14px]">{item.title}</div>
                <div className="text-[12px]"> {item.date}</div>
              </div>
              <div className="text-[13px]">{item.author}</div>
              <div className="text-[12px]">{item.description}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NewsCarusel;
