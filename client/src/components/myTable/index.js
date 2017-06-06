// npm packages
import React from 'react';
import PropTypes from 'prop-types';


export default function myTable({colums, dataSource}) {
  const tr = dataSource.map(itemData =>
    <td>{itemData}</td>
  );
  return (
    <table>
      <tr>
        {tr}
      </tr>
    </table>
  );
}


myTable.propTypes = {
  colums: PropTypes.array,
  dataSource: PropTypes.array,
};
myTable.defaultProps = {
  colums: [],
  dataSource: [],
};
