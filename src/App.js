import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import themes from "./theme";
import { createTheme, ThemeProvider } from "@mui/material";
import Dashboard from "./pages/Dashboard";
function App() {
  const theme = () =>
    createTheme({
      palette: themes["Light"],
    });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
