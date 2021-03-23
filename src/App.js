import "./App.css";
import Header from "./component/Header";
import CountryName from "./component/CountryName";
import allCountryScores from "./data/allCountryScores";
import ScoresData from "./component/ScoresData";
import React, { useState } from "react";
import WorldTable from "./component/WorldTable";

function App() {
  // sort all countries alphabetically
  const country = allCountryScores.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (b.name < a.name) {
      return 1;
    } else {
      return 0;
    }
  });

  // creates 1 all counties array and sorts the scores in descending order
  let worldScores = [];
  allCountryScores.forEach((el) => {
    worldScores = worldScores.concat(el.scores).sort((a, b) => {
      if (a.s < b.s) {
        return 1;
      } else if (b.s < a.s) {
        return -1;
      } else {
        return 0;
      }
    });
  });

  const [sort, setSort] = useState("ascending");
  // sorts order when button is clicked
  const sortHandler = () => {
    if (sort === "ascending") {
      setSort("descending");
    } else {
      setSort("ascending");
    }
  };

  return (
    <div className="App">
      <Header />
      <h3>All Country Scores (in descending order)</h3>
      <table className=" dataBox table text-capitalize">
        {worldScores.map((score, index) => (
          <WorldTable n={score.n} s={score.s} key={index} />
        ))}
      </table>
      <hr className="border border-dark" />
      <h3>High Scores Per Country</h3>
      <button className="btn btn-primary" onClick={sortHandler}>
        Click to Sort Scores
      </button>
      {country.map((country, index) => (
        <div className="dataBox" key={index}>
          <CountryName name={country.name} />
          <ScoresData country={country} sortOrder={sort} />
        </div>
      ))}
    </div>
  );
}

export default App;
