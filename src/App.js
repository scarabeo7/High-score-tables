import "./App.css";
import Header from "./component/Header";
import CountryName from "./component/CountryName";
import allCountryScores from "./component/allCountryScores";
import ScoresData from "./component/ScoresData";

function App() {
  allCountryScores.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }else if (b.name < a.name){
    return 1;
    }else{
      return 0;
    }
  });

  return (
    <div className="App">
      <Header />
      {allCountryScores.map((elem, index) => (
        <div className="table-responsive-sm">
          <CountryName key={index} name={elem.name} />
          {elem.scores
            .sort((a, b) => {
              if (a.s < b.s) {
                return 1;
              } else if (b.s < a.s) {
                return -1;
              } else {
                return 0;
              }
            })
            .map((item, index) => (
              <ScoresData key={index} n={item.n} s={item.s} />
            ))}
        </div>
      ))}
    </div>
  );
}

export default App;
