import { Box } from "@mui/material";
interface ILayout {
  children: React.ReactNode;
}
export default function PageLayout({ children }: ILayout) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <main>{children}</main>
    </Box>
  );
}
