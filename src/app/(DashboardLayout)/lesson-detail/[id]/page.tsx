'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { useAppSelector } from '@/store/hooks';


const LessonDetail = () => {
  const dataDetail = useAppSelector(state => state.lesson.detailLessonById)
  console.log("dataDetail", dataDetail)


  return (
    <PageContainer title={dataDetail.title} description="this is Sample page">
      <DashboardCard title={dataDetail.title}>
        <Typography>This is a sample page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default LessonDetail;
