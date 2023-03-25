import React from "react";
import { TypeCountry } from "../typings/types";

type Props = TypeCountry;

const CountryCard: React.FC<Props> = ({
  flags: { png, alt },
  name: { official },
  population,
}) => {
  return (
    <div className="flex flex-col gap-2 shadow bg-white dark:bg-gray-800 rounded overflow-hidden hover:scale-105 transition cursor-pointer duration-300">
      <img src={png} alt={alt} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h1 className="text-lg font-bold text-gray-700 dark:text-white">
          {official}
        </h1>
        <div>
          <p className="text-gray-600 dark:text-gray-100 font-medium">
            Population:{" "}
            <span className="text-gray-700 dark:text-white">{population}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
