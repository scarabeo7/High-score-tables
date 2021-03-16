import React from 'react'

const ScoresData = (props) => {
    return (
      <table className="table table-success text-capitalize">
        <tbody>
          <tr>
            <td>{props.n}</td>
            <td>{props.s}</td>
          </tr>
        </tbody>
      </table>
    );
}

export default ScoresData
