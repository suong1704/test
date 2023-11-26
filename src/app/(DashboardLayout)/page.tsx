'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import ModalNewModule from '@/components/ModalNewModule';
import ModuleCard from '@/components/ModuleCard';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getAllModulesPublished, getListMyModule } from '@/store/module/action';
import { Box, Button, Grid } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import { useEffect, useState } from 'react';


const TodayPage = () => {
  const listAllModule = useAppSelector(state => state.module.dataAllModules);
  const dispatch = useAppDispatch();
  console.log("listAllModule", listAllModule)
  const [open, setOpen] = useState(false);
  // const [myModules, setMyModules] = useState<Array<any>>([]);

  useEffect(() => {
    if (listAllModule.length == 0) {
      dispatch(getAllModulesPublished('userId'))
    }
  }, [listAllModule.length])

  return (
    // eslint-disable-next-line react/no-children-prop
    <PageContainer title="All Modules Public " description="this is Sample page" >
      <DashboardCard title="All Modules Public "
      // action={
      //   <Button variant='contained' onClick={() => setOpen(true)} startIcon={<IconPlus fontSize={'small'} />}>New Module</Button>
      // }
      >
        <Box>
          <Grid container spacing={3}>
            {listAllModule.map((module, index) => { return (<ModuleCard key={index} />) })}
          </Grid>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default TodayPage;

