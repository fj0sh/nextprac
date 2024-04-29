"use client";

import React from "react";
import Button from "../Button/button";
import { useRouter } from "next/navigation";
import useMovies from "@/hooks/useMovies";
import { log } from "console";

interface favPopUpProps {
  onClick?: () => void;
}

const FavoritePopUp = () => {
  const router = useRouter();
  const { movieData } = useMovies();

  return (
    <div className="flex border border-black-500 p-3 rounded gap-2 z-10 absolute bottom-0 left-[40%] my-[15px]">
      Added to Favorites
      <Button
        onClick={() => {
          router.push("/favorites");
        }}
        name="Go To Favorites"
        className="border border-black-500"
      ></Button>
    </div>
  );
};

export default FavoritePopUp;
