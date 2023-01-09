import Routes from "./routes";

function App() {
  return (
    <>
      <Routes />
    </>
  );
}

export default App;

// // import { Text, Button as ChakraButton } from "@chakra-ui/react";
// import { useCookies } from "react-cookie";
// import Products from "./pages/products/Products";
// import Routes from "./routes";
// import { Box, Button } from "@mui/material";
// import { useEffect, useState } from "react";
// import { useNavigation, redirect } from "react-router-dom";
// function App() {
//   const [cookie, setCookie] = useCookies(["name"]);
//   const [text, setText] = useState<string | {}>("");
//   const handleSetCookie = (key: "name", value: string | object) => {
//     setCookie(key, value);
//   };
//   useEffect(() => {
//     handleSetCookie(cookie.name, text);
//   }, [cookie]);

//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexDirection: "column",
//           height: "100vh",
//           width: "100%",
//         }}
//       >
//         {/* <Text>Hello World</Text> */}
//         {/* <Products /> */}

//         <Box>{cookie?.name && <h1>Hello {cookie?.name}</h1>}</Box>
//         <Button
//           variant="contained"
//           onClick={() => handleSetCookie("name", "codingText")}
//         >
//           Set Cookie
//         </Button>

//         <Button
//           variant="outlined"
//           onClick={() => redirect("https://www.nabinsaud.com.np")}
//         >
//           Go to Login page
//         </Button>
//         <Routes />
//       </Box>
//     </>
//   );
// }

// export default App;
