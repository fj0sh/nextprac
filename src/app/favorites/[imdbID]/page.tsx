"use client";

import { Card } from "@/components";
import useMovies from "@/hooks/useMovies";
import { MovieProps } from "@/interfaces";
import { useFaveContext } from "@/providers/favoritesProvider";
import { useRouter } from "next/navigation";
import React from "react";

const favoriteId = ({ params }: { params: { imdbID: string } }) => {
  const { fave } = useFaveContext();
  const router = useRouter();

  const temp: MovieProps = fave?.find(
    (data: MovieProps) => params.imdbID === data.imdbID
  );

  if (fave.length === 0) {
    router.push("/");
  }

  if (temp) {
    return (
      <>
        <Card className="flex flex-col items-center gap-4">
          <div className="w-[80%] flex justify-center">
            <img src={temp.Poster} alt="" className="w-[200px] h-[250px]" />
            <div className="p-2">
              <p className="font-bold">{temp.Title}</p>
              <p className="text-xs">{temp.Genre}</p>
              <p>{temp.Released}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[80%] mx-[25px]">
            <div className=" flex flex-col items-start">
              <p>{temp.Director}</p>
              <p>{temp.Actors}</p>
              <p>{temp.Runtime}</p>
            </div>
            <p>{temp.Plot}</p>
            <p></p>
          </div>
        </Card>
      </>
    );
  }
};

export default favoriteId;
