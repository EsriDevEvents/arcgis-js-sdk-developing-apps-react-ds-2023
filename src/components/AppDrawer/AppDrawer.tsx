import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledDrawer } from "./AppDrawer.styled";
import { DrawerItem } from "./config";

type AppDrawerProps = {
  drawerWidth: number;
  drawerList: DrawerItem[];
};

export const AppDrawer: React.FC<AppDrawerProps> = (props: AppDrawerProps) => {
  const { drawerWidth, drawerList } = props;

  const navigate = useNavigate();

  return (
    <StyledDrawer variant="permanent" anchor="left" width={drawerWidth}>
      <Toolbar />
      <Divider />
      <List>
        {drawerList.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};
