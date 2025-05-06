import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Home, About, ErrorPage, ExchangeRate } from "./pages/index";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useTheme } from "./context/ThemeContext";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

// Router config with Layout
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Shared layout
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/exchange_rate", element: <ExchangeRate /> },
      { path: "/error_page", element: <ErrorPage /> },
    ],
  },
]);

const App = () => {
  const { isDarkMode } = useTheme();

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
