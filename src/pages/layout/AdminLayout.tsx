import { Outlet } from "react-router-dom";
import { Box, Grid, Button, Typography } from "@mui/material";
import Sidebar from "@components/admin/sidebar/Sidebar";
export default function AdminLayout() {
  return (
    <Grid spacing={2} container width="100%">
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={7}>
        <main className="w-full flex items-start">
          <Outlet />
        </main>
      </Grid>
    </Grid>
  );
}
