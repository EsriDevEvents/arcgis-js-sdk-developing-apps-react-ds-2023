import { styled } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";

const NavBar = styled(MuiAppBar)<{ appbarheight: number; drawerwidth: number }>(
  ({ appbarheight, drawerwidth }) => ({
    height: `${appbarheight}px`,
    marginLeft: `${drawerwidth}px`,
    backgroundColor: "#ACBABF",
    width: `calc(100% - ${drawerwidth}px)`,
    ml: `${drawerwidth}px`,
  })
);

export { NavBar };
