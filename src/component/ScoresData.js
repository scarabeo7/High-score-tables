import React from "react";

const ScoresData = (props) => {
  let scores;

  if (props.sortOrder === "ascending") {
    scores = props.country.scores.sort((a, b) => {
      if (a.s < b.s) {
        return 1;
      } else if (b.s < a.s) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    scores = props.country.scores.sort((a, b) => {
      if (a.s < b.s) {
        return -1;
      } else if (b.s < a.s) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  return (
    <table className="table text-capitalize">
      <tbody>
        {scores.map((score, index) => (
          <tr key={index}>
            <th>{score.n}</th>
            <td>{score.s}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScoresData;
