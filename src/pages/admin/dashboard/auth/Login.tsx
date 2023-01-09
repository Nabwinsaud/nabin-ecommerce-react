import {
  Box,
  Grid,
  Button,
  Stack,
  TextField,
  Typography,
  FormHelperText,
} from "@mui/material";
import { Formik, Form } from "formik";
import { AUTH_LOGIN_SCHEMA } from "../../../../schema/auth.schema";
interface ILogin {
  email: string;
  password: string;
}
export default function Login() {
  const handleSubmit = async (data: ILogin) => {
    console.log(data);
    // const response = await axios.post("/login",{data})
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={AUTH_LOGIN_SCHEMA}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Box
              sx={{
                width: "450px",
                display: "flex",
                flexDirection: "column",
                gap: ".8rem",
                margin: "0 auto",
              }}
            >
              {/* <Typography textAlign="center">hello</Typography> */}

              <TextField
                fullWidth
                label="email"
                placeholder="email"
                value={values.email}
                name="email"
                size="small"
                onChange={handleChange}
              />
              <FormHelperText error>
                {errors?.email}
                {errors?.email && touched?.email}
              </FormHelperText>

              <TextField
                fullWidth
                label="password"
                placeholder="email"
                name="password"
                value={values.password}
                size="small"
                onChange={handleChange}
              />
              <FormHelperText error>
                {errors?.password}
                {errors?.password && touched?.password}
              </FormHelperText>

              <Button type="submit" variant="contained">
                Login
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
