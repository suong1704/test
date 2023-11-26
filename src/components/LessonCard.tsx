
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";
import { useAppDispatch } from "@/store/hooks";
import { getLessonById } from "@/store/lesson/action";
import {
  Box,
  CardContent,
  Grid,
  Typography
} from "@mui/material";
import { IconPlayerPlay } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LessonCard = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const id = 'uniqueId'
  const handleGoLessonDetail = () => {
    dispatch(getLessonById(1)).then(() => {
      router.push(`/lesson-detail/${id}`);
    })
  }

  return (
    <Grid item xs={12} md={6} lg={6}>
      <Box onClick={handleGoLessonDetail}>
        <BlankCard >
          <CardContent sx={{ p: 3, pt: 2, display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" >Lesson Name</Typography>
            <IconPlayerPlay />
          </CardContent>
        </BlankCard>
      </Box>
    </Grid>
  );
};

export default LessonCard;
