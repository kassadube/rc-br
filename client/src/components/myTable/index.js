// npm packages
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../css/table.css';


export default class MyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  createLabel = key => key.replace(/_/g, ' ');

  renderColumn = (item) => {
    let label = item.label;
    if (!label) { label = this.createLabel(item.key); }

    return <th key={item.key} data-key={item.key} ><a>{label}</a></th>;
  };

  renderRow = (item, index) => {
    const rowKey = `ff${index}`;// item[this.props.rowIdKey];
    const cells = this.props.schema.map((info) => {
      const value = item[info.key];
      const key = `td_${index}_${info.key}`;
      return <td key={key}>{value}</td>;
    });

    return (
      <tr key={`row-${rowKey}`} className={`row-${index % 2}`} onClick={(e) => { alert(e); }} >
        {cells}
      </tr>
    );
  };
  render() {
    const columns = this.props.schema.map(this.renderColumn);
    const dataRows = this.props.rows.map((item, index) => this.renderRow(item, index));
    const colStyle = {width: '220px'};
    return (
      <table className="my-table" >
        <colgroup>
          <col style={{width: '290px'}} />
          <col style={colStyle} />
          <col style={colStyle} />
        </colgroup>
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
}


MyTable.propTypes = {
  schema: PropTypes.array,
  rows: PropTypes.array,
};
MyTable.defaultProps = {
  schema: [],
  rows: [],
};
