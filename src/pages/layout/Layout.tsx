import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Grid spacing={4} container width="100%" height="100%">
      <Grid item xs={3}>
        {/* <Sidebar /> */}
        {/* usrer sidebar */}
        user fake sidebar
      </Grid>
      <Grid item xs={9}>
        {/* <Box> */}
        <Box sx={{ flex: "0.5" }}>
          <Outlet />
        </Box>
        {/* </Box> */}
      </Grid>
      {/* <Box>
        <Footer />
      </Box> */}
    </Grid>
  );
}
