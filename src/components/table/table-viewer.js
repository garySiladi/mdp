// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const formatDate = timestamp => {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-GB', { month: 'short', day: '2-digit', year: 'numeric' });
};

const TableViewer = ({ data, handleSelectPatient }) => (
  <div className="table-viewer">
    <ReactTable
      data={data}
      columns={[
        {
          Header: 'Patient',
          accessor: 'name',
        },
        {
          Header: 'Patient ID',
          accessor: 'id',
        },
        {
          Header: 'Studies',
          accessor: 'studyCount',
          className: 'study-count',
          headerClassName: 'study-count',
        },
        {
          Header: 'Last Study',
          accessor: 'lastStudyDate',
          Cell: row => (
            <div>
              {formatDate(row.original.lastStudyDate)}
            </div>
          ),
        },
        {
          Header: '',
          Cell: row => (
            <div>
              <Link
                to={`/patient/${ row.original.id }`}
                className="link-button"
                onClick={() => handleSelectPatient(row.original)}
              >
                Detail
              </Link>
            </div>
          ),
        },
      ]}
      defaultPageSize={20}
      style={{
        height: '400px',
      }}
      showPagination={false}
      className="-highlight"
      noDataText="No Patients Found!"
    />
  </div>
);

TableViewer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
      studyCount: PropTypes.number,
      lastStudyDate: PropTypes.string,
    }),
  ),
  handleSelectPatient: PropTypes.func,
};

TableViewer.defaultProps = {
  data: [],
  handleSelectPatient: () => {},
};

export default TableViewer;
