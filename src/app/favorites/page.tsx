"use client";

import { Button, Card } from "@/components";
import { MovieProps } from "@/interfaces";
import { useFaveContext } from "@/providers/favoritesProvider";
import Link from "next/link";

import { MdPreview } from "react-icons/md";

const Favorites = () => {
  const { fave } = useFaveContext();

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
                    alt={`Poster of ${data.Title}`}
                    className="w-[100px] h-[150px]"
                  />
                </div>
                <div className="w-[80%] flex flex-col gap-[15px]">
                  <h1 className="font-semibold">{data.Title}</h1>
                  <p className="text-xs">{data.Genre}</p>
                  <p>{data.Plot}</p>
                </div>
                <Link
                  href={`favorites/${data.imdbID}`}
                  className="flex justify-center items-center mx-[25px]"
                >
                  <Button
                    name=""
                    className=" border border-black-500 p-2 rounded flex gap-1 items-center"
                  >
                    <MdPreview /> View
                  </Button>
                </Link>
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
