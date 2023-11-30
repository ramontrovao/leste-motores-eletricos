import { HiMagnifyingGlass } from "react-icons/hi2";

export const Searchbar = () => {
  return (
    <div className="bg-slate-50 rounded-lg flex w-full max-w-sm border-2 border-solid focus-within:border-redShadow">
      <div className="p-2 flex justify-center items-center text-xl">
        <HiMagnifyingGlass />
      </div>

      <input
        type="text"
        className="bg-transparent p-2 flex-1 outline-none"
      />
    </div>
  );
};
