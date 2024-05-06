"use client";

import { Card } from "@/components";
import { MovieProps } from "@/interfaces";
import { useFaveContext } from "@/providers/favoritesProvider";
import { useRouter } from "next/navigation";
import React from "react";

const favoriteId = ({ params }: { params: { imdbID: string } }) => {
  const { fave } = useFaveContext();
  const router = useRouter();

  const faveMovie = fave?.find(
    (data: MovieProps) => params.imdbID === data.imdbID
  );

  if (fave.length === 0) {
    router.push("/");
  }

  if (faveMovie) {
    return (
      <>
        <Card className="flex flex-col items-center gap-4">
          <div className="w-[80%] flex justify-center border border-black-500 p-3">
            <img
              src={faveMovie.Poster}
              alt=""
              className="w-[200px] h-[250px]"
            />
            <div className="p-2">
              <p className="font-bold">{faveMovie.Title}</p>
              <p className="text-xs">{faveMovie.Genre}</p>
              <p>{faveMovie.Released}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[80%] mx-[25px]  border border-black-500 p-3">
            <div className=" flex flex-col items-start">
              <p>{faveMovie.Director}</p>
              <p>{faveMovie.Actors}</p>
              <p>{faveMovie.Runtime}</p>
            </div>
            <p>{faveMovie.Plot}</p>
            <p></p>
          </div>
        </Card>
      </>
    );
  }
};

export default favoriteId;
