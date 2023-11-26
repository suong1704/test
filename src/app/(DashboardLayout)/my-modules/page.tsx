'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import ModalNewModule from '@/components/ModalNewModule';
import ModuleCard from '@/components/ModuleCard';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getListMyModule } from '@/store/module/action';
import { Box, Button, Grid } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import { useEffect, useState } from 'react';


const MyModulePage = () => {
  const listMyModule = useAppSelector(state => state.module.dataModuleUser);
  const dispatch = useAppDispatch();
  console.log("listMyModule", listMyModule)
  const [open, setOpen] = useState(false);
  // const [myModules, setMyModules] = useState<Array<any>>([]);

  useEffect(() => {
    if (listMyModule.length == 0) {
      dispatch(getListMyModule('userId'))
    }
  }, [listMyModule.length])

  return (
    // eslint-disable-next-line react/no-children-prop
    <PageContainer title="My Modules" description="this is Sample page" >
      <DashboardCard title="My Modules" action={
        <Button variant='contained' onClick={() => setOpen(true)} startIcon={<IconPlus fontSize={'small'} />}>New Module</Button>
      }>
        <Box>
          <Grid container spacing={3}>
            {listMyModule.map((module, index) => { return (<ModuleCard key={index} />) })}
          </Grid>
          <ModalNewModule open={open} handleClose={() => setOpen(false)} />
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default MyModulePage;

