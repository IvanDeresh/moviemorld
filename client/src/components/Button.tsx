import React from "react";

const Button = ({
  bgColor,
  label,
  text,
}: {
  bgColor: string;
  label: string;
  text: string;
}) => {
  return (
    <button className={`${bgColor} ${text} w-[150px] h-[50px] rounded-full`}>
      {label}
    </button>
  );
};

export default Button;
