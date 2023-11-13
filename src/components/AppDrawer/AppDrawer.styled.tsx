import { Drawer, styled } from "@mui/material";

const StyledDrawer = styled(Drawer)<{ width: number }>(({ width }) => ({
  width: width,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: width,
    boxSizing: "border-box",
  },
}));

const AppDrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export { StyledDrawer, AppDrawerHeader };
