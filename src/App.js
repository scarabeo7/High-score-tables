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
        <div className="table-responsive-sm" key={index}>
          <CountryName name={elem.name} />
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
              <ScoresData n={item.n} s={item.s} key={index} />
            ))}
        </div>
      ))}
    </div>
  );
}

export default App;
