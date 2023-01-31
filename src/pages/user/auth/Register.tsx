import Box from "@mui/material/Box";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { centerContent, centerForm } from "@utils/center.div";
import { Link } from "react-router-dom";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { IRegister } from "@interfaces/register.interface";
import { useMutation } from "@tanstack/react-query";
export default function UserRegister() {
  const [show, setShow] = useState<boolean>(false);
  const showPassword = () => setShow(!show);

  const handleSubmit = async (data: IRegister) => {
    // const response = await axios
  };
  const { mutate } = useMutation({ mutationKey: ["register"] });

  return (
    <Box sx={centerContent}>
      <Box sx={centerForm}>
        <Typography>Signup</Typography>
        <TextField
          label="userName"
          type="text"
          placeholder="userName"
          size="small"
          sx={{ my: 1 }}
          fullWidth
        />
        <TextField
          label="email"
          type="email"
          placeholder="email"
          size="small"
          sx={{ my: 1 }}
          fullWidth
        />
        <TextField
          label="password"
          type="password"
          placeholder="password"
          size="small"
          fullWidth
          sx={{ my: 1 }}
        />
        <TextField
          label="confirmPassword"
          type={show ? "text" : "password"}
          placeholder="password"
          size="small"
          fullWidth
          sx={{ my: 1 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={showPassword}>
                  {show ? <VisibilityIcon /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button sx={{ my: "2rem" }} fullWidth size="small" variant="contained">
          Regsiter
        </Button>
        <Box sx={{ width: "100%" }}>
          <Typography>
            Already have an Account{" "}
            <Link className="none text-blue-600 font-bold" to="/login">
              {"Login ?"}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
