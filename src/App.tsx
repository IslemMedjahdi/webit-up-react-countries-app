import { useState, useEffect } from "react";
import CountryCard from "./components/CountryCard";
import Header from "./components/Header";
import { TypeCountry } from "./typings/types";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [countries, setCountries] = useState<TypeCountry[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const toggleDarkMode = () => {
    localStorage.setItem("theme", !isDarkMode ? "true" : "false");
    setIsDarkMode(!isDarkMode);
  };

  const filterCountries = () => {
    const filteredCountries = countries.filter((country) =>
      country.name.official.toLowerCase().includes(searchValue.toLowerCase())
    );
    return filteredCountries;
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setIsDarkMode(theme === "true" ? true : false);
    }
  }, []);

  return (
    <div className={`h-screen  ${isDarkMode ? "dark" : ""}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="dark:bg-gray-600 p-8">
        <input
          className="px-4 py-2 w-full max-w-screen-sm shadow dark:text-white dark:bg-gray-800"
          placeholder="Search..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <p>{searchValue}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 p-8 dark:bg-gray-600">
        {filterCountries().map((country, index) => {
          return <CountryCard {...country} />;
        })}
      </div>
    </div>
  );
}

export default App;
