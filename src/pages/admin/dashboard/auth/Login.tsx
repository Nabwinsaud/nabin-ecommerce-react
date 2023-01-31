import {
  Box,
  Button,
  TextField,
  FormHelperText,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import { AUTH_LOGIN_SCHEMA } from "@schema/auth.schema";
import { centerContent, centerForm } from "@utils/center.div";
import { useMutation } from "@tanstack/react-query";
import { ILogin } from "@interfaces/login.interface";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const handleSubmit = async (data: ILogin) => {
    console.log(data);
    navigate("/admin/dashboard");
  };
  return (
    <Box sx={centerContent}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={AUTH_LOGIN_SCHEMA}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <Form style={{ width: "100%" }} onSubmit={(e) => handleSubmit(e)}>
            <Box sx={centerForm}>
              <Typography>Sign In </Typography>

              <TextField
                fullWidth
                label="email"
                placeholder="email"
                value={values.email}
                name="email"
                size="small"
                onChange={handleChange}
                error={errors.email === undefined ? false : true}
                helperText={errors.email}
                sx={{ my: 1 }}
              />

              <TextField
                fullWidth
                label="password"
                placeholder="email"
                name="password"
                value={values.password}
                size="small"
                onChange={handleChange}
                error={errors.password === undefined ? false : true}
                helperText={errors.password}
                sx={{ my: 1 }}
              />

              <Button
                sx={{ my: 1 }}
                fullWidth
                type="submit"
                variant="contained"
              >
                Login
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
