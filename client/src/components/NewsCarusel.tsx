import React from "react";
import { fetchNewsData } from "@/func/index";

const NewsCarusel = ({ id }: { id: number }) => {
  const news = fetchNewsData();

  return (
    <div>
      {news.map((item) => (
        <div key={item.id}>
          {item.id === id && (
            <div
              style={{
                backgroundImage: `url(${item.image})`,
                width: "500px",
                height: "500px",
                backgroundSize: "cover",
              }}
              className="rounded-2xl text-white flex flex-col justify-end p-[40px] gap-[10px]"
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
