"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { push } = useRouter();

  const onChangeSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const onKeydownSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      push(`/pesquisa?q=${searchQuery}`);
    }
  };

  return (
    <div className="bg-slate-50 rounded-lg flex w-full max-w-sm border-2 border-solid focus-within:border-redShadow">
      <div className="p-2 flex justify-center items-center text-xl text-blue">
        <HiMagnifyingGlass />
      </div>

      <input
        onChange={(e) => onChangeSearchQuery(e)}
        onKeyDown={(e) => onKeydownSearch(e)}
        type="text"
        className="bg-transparent p-2 flex-1 outline-none"
      />
    </div>
  );
};
