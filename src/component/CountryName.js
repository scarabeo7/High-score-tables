import React from "react";

const CountryName = (props) => {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">{props.name}</th>
        </tr>
      </thead>
    </table>
  );
};

export default CountryName;
