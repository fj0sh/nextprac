"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components";
import useMovies from "@/hooks/useMovies";
import { Button, FavoritePopUp } from "@/components";
import { useFaveContext } from "@/providers/favoritesProvider";
import { MovieProps } from "@/interfaces";

const Home = () => {
  const { movieData } = useMovies();
  const { fave, setFave } = useFaveContext();
  const [btnDisable, setBtndisable] = useState(false);
  const { loading } = useMovies();
  const key = process.env.API_KEY;

  const faveSetter = () => {
    setFave((prev: Array<string>) => [...prev, movieData]);
  };

  useEffect(() => {
    const temp = fave.some(
      (data: MovieProps) => movieData?.imdbID == data.imdbID
    );
    if (temp) {
      setBtndisable(temp);
    } else {
      setBtndisable(false);
    }
  }, [fave, movieData]);

  console.log(process.env);
  console.log(key);

  if (!loading) {
    return (
      <>
        {movieData ? (
          <div className="flex flex-col items-center mx-10">
            <Card className="flex flex-col w-[90%] gap-2">
              <div className="border border-black-500 flex flex-col items-center p-2">
                <img
                  src={movieData.Poster}
                  alt=""
                  className="w-[200px] h-[250px]"
                />
                <p>{movieData.Title}</p>
                <p>{movieData.Genre}</p>
                <p>{movieData.Language}</p>
              </div>

              <div className="border border-black-500 p-10 flex flex-col items-center">
                <p></p>
                <Button
                  name={
                    btnDisable
                      ? "Already Addded to favorites"
                      : "Add to favorites"
                  }
                  className={`border border-black-500 p-2 rounded ${
                    btnDisable ? "bg-slate-300" : ""
                  }`}
                  disabled={btnDisable ? true : false}
                  onClick={faveSetter}
                ></Button>
              </div>
            </Card>
          </div>
        ) : (
          <div className="flex justify-center">
            <p>Try Searching</p>
          </div>
        )}
      </>
    );
  } else {
    return <p className="flex justify-center">Loading..........</p>;
  }
};

export default Home;
