"use client";

import { Card } from "@/components";
import useMovies from "@/hooks/useMovies";
import { MovieProps } from "@/interfaces";
import { useMovieContext } from "@/providers/SearchProvider";
import { useFaveContext } from "@/providers/favoritesProvider";
import React, { use } from "react";

const Favorites = () => {
  const { fave } = useFaveContext();
  console.log(fave);

  if (fave.length !== 0) {
    return (
      <>
        <div className="flex flex-col gap-4 mx-[20%]">
          {fave.map((data: MovieProps) => {
            return (
              <Card className="border border-black-500 flex" key={data.imdbID}>
                <div className="w-[20%] p-2">
                  <img
                    src={data.Poster}
                    alt=""
                    className="w-[100px] h-[150px]"
                  />
                </div>
                <div className="w-[80%] flex flex-col gap-[15px]">
                  <h1 className="font-semibold">{data.Title}</h1>
                  <p className="text-xs">{data.Genre}</p>
                  <p>{data.Plot}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <div className="flex justify-center">
        <p>No Favorites Added Yet</p>
      </div>
    );
  }
};

export default Favorites;
