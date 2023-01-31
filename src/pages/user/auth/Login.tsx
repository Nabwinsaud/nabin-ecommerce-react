import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import { centerContent, centerForm } from "@utils/center.div";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    /*
     * For now hard coded

     */
    navigate("/homepage");
  };
  return (
    <Box sx={centerContent}>
      <Box sx={centerForm}>
        <Typography>Login</Typography>
        <TextField
          label="email"
          type="email"
          placeholder="email"
          size="small"
          sx={{ my: 2 }}
          fullWidth
        />
        <TextField
          label="password"
          type="password"
          placeholder="password"
          size="small"
          fullWidth
        />

        <Button
          onClick={handleLogin}
          sx={{ my: "2rem" }}
          fullWidth
          size="small"
          variant="contained"
        >
          Login
        </Button>
        <Box sx={{ width: "100%" }}>
          <Typography>
            Don't have an Account{" "}
            <Link className="none text-blue-600 font-bold" to="/signup">
              {"Regsiter ?"}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
