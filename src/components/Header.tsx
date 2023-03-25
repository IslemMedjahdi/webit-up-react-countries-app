import React, { useEffect, useState } from "react";

type Props = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

type TypeSize = {
  innerWidth: number;
  innerHeight: number;
};

const Header: React.FC<Props> = ({ isDarkMode, toggleDarkMode }) => {
  const [windowSize, setWindowSize] = useState<TypeSize>({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      });
    });
    return () =>
      window.removeEventListener("resize", () => {
        setWindowSize({
          innerHeight: window.innerHeight,
          innerWidth: window.innerWidth,
        });
      });
  }, []);

  return (
    <div className="px-6 py-8 flex justify-between bg-white shadow-lg dark:bg-gray-700">
      <h1 className="text-lg font-bold text-gray-800 dark:text-white">
        WebitUp Countries
      </h1>
      <p>Width : {windowSize.innerWidth}</p>
      <p>Height: {windowSize.innerHeight}</p>
      <div>
        <p
          onClick={toggleDarkMode}
          className="font-medium  text-gray-800 cursor-pointer dark:text-white"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </div>
  );
};

export default Header;
