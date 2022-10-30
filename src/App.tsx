import TopBar from "./components/TopBar";
import { createTheme, ThemeProvider } from "@mui/material";
import NavigationDrawer from "./components/NavigationDrawer";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
  palette: {
    primary: {
      main: "#8b0304",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <NavigationDrawer />
    </ThemeProvider>
  );
}

export default App;
