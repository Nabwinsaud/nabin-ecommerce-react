import { Outlet } from "react-router-dom";
import { Box, Grid, Button, Typography } from "@mui/material";
import Sidebar from "../../components/admin/sidebar/Sidebar";
import AdminLogin from "../admin/dashboard/auth/Login";
export default function AdminLayout() {
  return (
    <Grid spacing={2} container width="100%">
      <Grid item xs={4}>
        <Sidebar />
      </Grid>
      <Grid item xs={8}>
        <main>
          <Outlet />
        </main>
      </Grid>
    </Grid>
  );
}
