import React from 'react'

const ScoresData = (props) => {
    return (
      <table className="table table-success text-capitalize">
        <tbody>
          <tr>
            <td key>{props.n}</td>
            <td key>{props.s}</td>
          </tr>
        </tbody>
      </table>
    );
}

export default ScoresData
