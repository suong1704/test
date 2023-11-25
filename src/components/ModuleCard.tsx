
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
const ModuleCard = () => {
    const router = useRouter();
    const id = 'uniqueId'
  return (
    <Grid item xs={12} md={4} lg={3} >
        <Box onClick={() => {router.push(`module-detail/${id}`)}}>
          <BlankCard >
            {/* <Typography component={Link} href="/"> */}
              <Image
                src={img1}
                alt="img"
                style={{ width: "100%", height: "180px" }}
              />
            {/* </Typography> */}
            <Tooltip title="Add To Cart">
              <Fab
                size="small"
                color="primary"
                sx={{ bottom: "75px", right: "15px", position: "absolute" }}
              >
                <IconArrowBadgeRightFilled size="16" />
                <Avatar sx={{  }}>V</Avatar>
              </Fab>
            </Tooltip>
            <CardContent sx={{ p: 3, pt: 2 }}>
              <Typography variant="h6">Module Name</Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mt={1}
              >
                <Stack direction="row" alignItems="center">
                  <Typography >Description</Typography>
                  {/* <Typography
                    color="textSecondary"
                    ml={1}
                    sx={{ textDecoration: "line-through" }}
                  >
                  ádsdas
                  </Typography> */}
                </Stack>
                    {/* <Rating
                    name="read-only"
                    size="small"
                    value={3}
                    readOnly
                    /> */}
              </Stack>
            </CardContent>
          </BlankCard>
        </Box>
        </Grid>
  );
};

export default ModuleCard;
