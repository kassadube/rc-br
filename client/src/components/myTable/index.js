// npm packages
import React from 'react';
import PropTypes from 'prop-types';


export default function myTable({colums, dataSource}) {
  return (
    <table>
      <tr>
        <td>ssss</td>
        <td>54</td>
        <td>ssss</td>
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
