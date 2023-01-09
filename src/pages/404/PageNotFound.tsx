import { Box, Typography } from "@mui/material";
export default function PageNotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        alingItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Typography variant="h1">404</Typography>
    </Box>
  );
}
