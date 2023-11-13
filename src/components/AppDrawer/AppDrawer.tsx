import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import HomeIcon from "@mui/icons-material/Home";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import { useNavigate } from "react-router-dom";
import { StyledDrawer } from "./AppDrawer.styled";

export const drawerWidth = 200;
export const appbarHeight = 64;

export const AppDrawer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <StyledDrawer variant="permanent" anchor="left" width={drawerWidth}>
      <Toolbar />
      <Divider />
      <List>
        <ListItem key={"home"} disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"map"} disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/map");
            }}
          >
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary={"Berlin Map"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"scene"} disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/scene");
            }}
          >
            <ListItemIcon>
              <ThreeDRotationIcon />
            </ListItemIcon>
            <ListItemText primary={"Berlin Scene"} />
          </ListItemButton>
        </ListItem>
      </List>
    </StyledDrawer>
  );
};
