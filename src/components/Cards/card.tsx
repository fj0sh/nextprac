import { useMovieContext } from "@/providers";
import React, { useEffect } from "react";
type cardProps = {
  children?: React.ReactNode;
  className?: string;
};

const Card = (props: cardProps) => {
  const { children } = props;

  return (
    <div
      className="border border-black-500 rounded h-20 w-[100%] my-5"
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
