import React from 'react';
import Appbar from '../../layouts/Appbar';
import DashboardLayout from '../../layouts/DashboardLayout';
import MUIBox from '../../components/MUIBox';
import Card from '@mui/material/Card';
import DataTable from '../../examples/DataTable';

import data from './data';

const Asset = () => {
  const { columns, rows } = data();

  return (
    <DashboardLayout>
      <Appbar />
      <MUIBox pt={3} pb={2} flex={1}>
        <Card>
          <DataTable table={{ columns, rows }} />
        </Card>
      </MUIBox>
    </DashboardLayout>
  );
};

export default Asset;
