import { Box, CssBaseline, Toolbar, Typography, styled } from "@mui/material";
import { NavBar } from "./components/AppBar/AppBar.styled";
import {
  AppDrawer,
  appbarHeight,
  drawerWidth,
} from "./components/AppDrawer/AppDrawer";
import { AppDrawerHeader } from "./components/AppDrawer/AppDrawer.styled";
import { Route, Routes } from "react-router-dom";
import { BerlinMap } from "./components/BerlinMap/BerlinMap";
import { BerlinScene } from "./components/BerlinScene/BerlinScene";
import { Home } from "./components/Home/Home";

const AppContent = styled(Box)<{ appbarheight: number; drawerwidth: number }>(
  ({ appbarheight, drawerwidth }) => ({
    position: "absolute",
    height: `calc(100% - ${appbarheight}px)`,
    width: `calc(100% - ${drawerwidth}px)`,
    marginLeft: `${drawerwidth}px`,
  })
);

const AppContainer = styled(Box)({
  display: "flex",
});

const App: React.FC = () => {
  return (
    <AppContainer>
      <CssBaseline />
      <NavBar appbarheight={appbarHeight} drawerwidth={drawerWidth}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Footprints of the Past: Berlin Center
          </Typography>
        </Toolbar>
      </NavBar>
      <AppDrawer />
      <AppContent appbarheight={appbarHeight} drawerwidth={drawerWidth}>
        <AppDrawerHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<BerlinMap />} />
          <Route path="/scene" element={<BerlinScene />} />
        </Routes>
      </AppContent>
    </AppContainer>
  );
};

export default App;
