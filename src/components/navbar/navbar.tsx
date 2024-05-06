"use client";

import React, { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import Button from "../Button/button";
import { useMovieContext } from "@/providers/SearchProvider";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { MdFavorite } from "react-icons/md";

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
    <div className="flex justify-between my-[10px] mx-[20px] border-y-[1px] p-3 items-center">
      <div className="flex gap-2 items-center">
        <input
          type="text"
          className="border border-black-1000 p-1"
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button
          onClick={() => clickhandler()}
          name=""
          className="flex border border-black-500 rounded-lg p-1 gap-1 items-center"
        >
          <FaSearch /> Search
        </Button>
      </div>

      <div className="flex justify-end gap-6">
        <Link href="/">
          <ul className="flex gap-1 items-center">
            <IoIosHome />
            Home
          </ul>
        </Link>
        <Link href="/favorites">
          <ul className="flex gap-1 items-center">
            <MdFavorite />
            Favorites
          </ul>
        </Link>
        {/* <Link href="/wabalo">
          <ul>Wabalo</ul>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
