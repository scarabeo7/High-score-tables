import React from "react";

const WorldTable = (props) => {
  return (
    <tbody>
      <tr>
        <th>{props.n}</th>
        <td>{props.s}</td>
      </tr>
    </tbody>
  );
};

export default WorldTable;
