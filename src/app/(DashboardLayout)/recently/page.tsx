'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import ModuleCard from '@/components/ModuleCard';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getListRecently } from '@/store/module/action';
import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';


const RecentlyPage = () => {
  const listAllModule = useAppSelector(state => state.module.dataAllModules);
  const dispatch = useAppDispatch();
  console.log("listAllModule", listAllModule)
  const [open, setOpen] = useState(false);
  // const [myModules, setMyModules] = useState<Array<any>>([]);

  useEffect(() => {
    if (listAllModule.length == 0) {
      dispatch(getListRecently('userId'))
    }
  }, [listAllModule.length])

  return (
    // eslint-disable-next-line react/no-children-prop
    <PageContainer title="Recently learned" description="this is Sample page" >
      <DashboardCard title="Recently learned"
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

export default RecentlyPage;

