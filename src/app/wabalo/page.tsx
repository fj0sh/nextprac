import Button from "@/components/Button/button";
import useMovies from "@/hooks/useMovies";
import { useMovieContext } from "@/providers";
import React from "react";

const Wabalo = () => {
  const { movieInput } = useMovieContext();
  const clickhandler = () => {
    console.log(movieInput);
  };

  return (
    <div>
      <Button onClick={() => clickhandler} name="log"></Button>
    </div>
  );
};

export default Wabalo;
