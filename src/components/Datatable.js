import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@material-ui/core/styles';

const columns = [
  { 
    field: 'id', 
    headerName: 'ID', 
    headerClassName: 'super-app-theme--header',
    width: 70 
  },
  { 
    field: 'firstName', 
    headerName: 'First name', 
    headerClassName: 'super-app-theme--header',
    width: 130 
  },
  { 
    field: 'lastName', 
    headerName: 'Last name', 
    headerClassName: 'super-app-theme--header',
    width: 130 
  },
  {
    field: 'age',
    headerName: 'Age',
    headerClassName: 'super-app-theme--header',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    headerClassName: 'super-app-theme--header',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const useStyles = makeStyles({
  root: {
    '& .super-app-theme--header': {
      backgroundColor: '#0a786c',
    },
  },
});

export default function DataTable() {
  const classes = useStyles();
  return (
    <div style={{ height: 400, width: '100%' }} className={classes.root}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}