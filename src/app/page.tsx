"use client";

import React from "react";
import { Card } from "@/components";
import useMovies from "@/hooks/useMovies";
import Button from "@/components/Button/button";

const Home = () => {
  const { movieData } = useMovies();

  return (
    <>
      {movieData ? (
        <div className="flex flex-col items-center mx-10">
          <Card className="flex flex-col w-[90%] gap-2">
            <div className="border border-black-500 flex flex-col items-center p-2">
              <img src={movieData.Poster} alt="" className="" />
              <p>{movieData.Title}</p>
              <p>{movieData.Genre}</p>
              <p>{movieData.Language}</p>
              <p>hehehehe</p>
            </div>

            <div className="border border-black-500 p-10 flex flex-col items-center">
              <p></p>
              <Button
                name="Add to favorites"
                className="border border-black-500 p-2 rounded"
              ></Button>
            </div>
          </Card>
        </div>
      ) : (
        <div className="flex justify-center">
          <p>Empty</p>
        </div>
      )}
    </>
  );
};

export default Home;
