'use client';
import { Box, Button, ButtonBase, Fab, Grid, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import ModuleCard from '@/components/ModuleCard';
import { IconAd, IconPlus } from '@tabler/icons-react';
import ModalNewModule from '@/components/ModalNewModule';
import { useState } from 'react';


const MyModulePage = () => {
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    // eslint-disable-next-line react/no-children-prop
    <PageContainer title="My Module ne" description="this is Sample page" >
      <DashboardCard title="My Module ne" action={
         <Button variant='contained' onClick={handleOpen} startIcon={<IconPlus fontSize={'small'} />}>New Module</Button>
      }>
        <Box>
          <Grid container spacing={3}>
            {[1, 1, 1, 1, 1, 1, 1].map((module, index) => { return (<ModuleCard key={index} />) })}
          </Grid>
        <ModalNewModule open={open} handleClose={handleClose}/>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default MyModulePage;

