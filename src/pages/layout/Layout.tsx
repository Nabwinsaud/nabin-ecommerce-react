import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Layout() {
  return (
    <Grid spacing={4} container width="100%" height="100%">
      <Grid item xs={3}>
        <Sidebar />
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
