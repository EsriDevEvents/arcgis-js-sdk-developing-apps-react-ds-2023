import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";

export const drawerWidth = 200;
export const appbarHeight = 64;

export type DrawerItem = {
  text: string;
  icon: JSX.Element;
  path: string;
};

export const drawerList: DrawerItem[] = [
  { text: "Home", icon: <HomeIcon />, path: "/" },
  {
    text: "Berlin Map",
    icon: <MapIcon />,
    path: "/map",
  },
  {
    text: "Berlin Scene",
    icon: <ThreeDRotationIcon />,
    path: "/scene",
  },
];
