// npm packages
import React from 'react';
import PropTypes from 'prop-types';
import '../../css/table.css';


export default function myTable({schema, rows}) {
  const tr = rows.map(itemData =>
    <td>{itemData.change}</td>,
  );
  const th = schema.map(itemData =>
    <th>{itemData.label}</th>,
  );
  const createLabel = key => key.replace(/_/g, ' ');

  const renderColumn = (item) => {
    let label = item.label;
    if (!label) { label = createLabel(item.key); }

    return <th key={item.key} data-key={item.key} >{label}</th>;
  };

  const renderRow = (item, index) => {
    const rowKey = `ff${index}`;// item[this.props.rowIdKey];
    const cells = schema.map((info) => {
      const value = item[info.key];
      const key = `td_${index}_${info.key}`;
      return <td key={key}>{value}</td>;
    });

    return (
      <tr key={`row-${rowKey}`}>
        {cells}
      </tr>
    );
  };
  const columns = schema.map(renderColumn);
  const dataRows = rows.map((item, index) => renderRow(item, index));
  return (
    <table className="my-table">
      <thead>
        <tr>
          {columns}
        </tr>
      </thead>
      <tbody>
        {dataRows}
      </tbody>
    </table>
  );
}


myTable.propTypes = {
  schema: PropTypes.array,
  rows: PropTypes.array,
};
myTable.defaultProps = {
  schema: [],
  rows: [],
};
