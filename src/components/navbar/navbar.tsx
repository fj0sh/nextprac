"use client";

import React, { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import Button from "../Button/button";
import { useMovieContext } from "@/providers/SearchProvider";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);
  const { movieInput, setMovieInput } = useMovieContext();
  const router = useRouter();

  const clickhandler = useCallback(() => {
    router.push("/");
    setMovieInput(search);
    setClicked(false);
  }, [search]);

  return (
    <div className="flex justify-between my-[10px] mx-[20px] border-y-[1px] p-3">
      <div className="flex gap-2">
        <input
          type="text"
          className="border border-black-1000"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={() => clickhandler()} name="Search"></Button>
      </div>

      <div className="flex justify-end gap-6">
        <Link href="/">
          <ul>Home</ul>
        </Link>
        <Link href="/favorites">
          <ul>Favorites</ul>
        </Link>
        {/* <Link href="/wabalo">
          <ul>Wabalo</ul>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
