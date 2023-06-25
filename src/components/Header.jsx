import React from "react";
import { useApp } from "../context";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { features } = useApp();
  return (
    <header className="flex  items-center justify-between px-16 py-6 w-full">
      <h1 className="text-[#2DD4BF] font-bold font-sans text-2xl">
        GENDERIZE.IO
      </h1>

      <ul className="flex  items-center justify-center space-x-6 w-[50%]">
        {features.map((item) => (
          <il
            className="text-gary-700 font-normal font-sans text-base"
            key={item.id}
          >
            {item.title}
          </il>
        ))}
      </ul>

      <div className="flex  items-center justify-center space-x-4 w-[10%]">
        <ThemeToggle />

        <p>Wisam</p>
      </div>
    </header>
  );
};

export default Header;
