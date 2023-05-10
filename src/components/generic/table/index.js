import React from "react";
const _ = require("lodash");

const GenericTable = (props) => {
  const { tableHeadings, tableData, actions } = props;
  return (
    <table className="styled-table">
      <thead>
        <tr>
          {tableHeadings.map((item) => (
            <th>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, i) => (
          <tr>
            {tableHeadings.map((el) =>
              el === "Actions" ? (
                <td>
                  {Object.keys(actions).map((key) => (
                    <button
                      className="buttonClass"
                      onClick={() => actions[key](item, i)}
                    >
                      {_.startCase(_.toLower(key))}
                    </button>
                  ))}
                </td>
              ) : (
                <td>{_.toString(item[_.camelCase(el)])}</td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GenericTable;
