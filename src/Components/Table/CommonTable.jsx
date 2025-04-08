import React from "react";

const CommonTable = ({ headers, data }) => {
  return (
    <div className="m-2 p-2">
      <table className="table text-center table-responsive table align-middle p-2 m-2">
        <thead>
          <tr>
            {headers.map((header) => (
              <th >{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header.id}>{header.render(row)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommonTable;
