import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: 2,
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Something went wrong in the application.
      </Typography>
      <Button component={Link} to="/" variant="outlined">
        Go Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
