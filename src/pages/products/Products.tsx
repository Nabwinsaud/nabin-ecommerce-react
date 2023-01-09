// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Box,
//   Image,
//   Button,
//   Stack,
//   Grid,
// } from "@chakra-ui/react";
import {
  Card,
  Box,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Stack,
  Grid,
} from "@mui/material";

export default function Products() {
  return (
    <Box>
      <Grid>
        <Card>
          <CardHeader>Item index</CardHeader>
          <CardContent>
            <Stack display="flex" alignItems="center" gap="2rem">
              <img
                height="200"
                src="https://api.lorem.space/image/shoes?w=640&h=480&r=2399"
              />
            </Stack>
            <Button>Add to cart</Button>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
}
