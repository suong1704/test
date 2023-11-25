
import Link from "next/link";
import {
  CardContent,
  Typography,
  Grid,
  Rating,
  Tooltip,
  Fab,
  Avatar,
  Box,
} from "@mui/material";
import img1 from "public/images/products/s4.jpg";
import img2 from "public/images/products/s5.jpg";
import img3 from "public/images/products/s7.jpg";
import img4 from "public/images/products/s11.jpg";
import { Stack } from "@mui/system";
import { IconArrowBadgeRightFilled } from "@tabler/icons-react";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Module {

  name: string,
  desc: string,
  author: string
}

import { uniqueId } from "lodash";
const LessonCard = () => {
  const router = useRouter();
  const id = 'uniqueId'
  return (
    <Grid item xs={12} md={6} lg={6}>
      <Box component={Link}  href={`/lesson-detail/${id}`} passHref>
        <BlankCard >
          <Tooltip title="Add To Cart">
            <Fab
              size="small"
              color="primary"
              sx={{ bottom: "75px", right: "15px", position: "absolute" }}
            >
              <IconArrowBadgeRightFilled size="16" />
              <Avatar sx={{}}>V</Avatar>
            </Fab>
          </Tooltip>
          <CardContent sx={{ p: 3, pt: 2 }}>
            <Typography variant="h6">Lesson Name</Typography>
          </CardContent>
        </BlankCard>
      </Box>
    </Grid>
  );
};

export default LessonCard;
