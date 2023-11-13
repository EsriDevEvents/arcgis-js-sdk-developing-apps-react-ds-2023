import { Box, Divider, IconButton, styled } from "@mui/material";

const ZoomButton = styled(IconButton)({
  width: "36px",
  height: "36px",
});

const ZoomDivider = styled(Divider)({
  backgroundColor: "rgba(79,88,85,0.6)",
  width: "85%",
});

const ZoomContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  right: 0,
  marginTop: "15px",
  marginRight: "15px",
  backgroundColor: "#ACBABF",
  borderRadius: "8px",
});

export { ZoomButton, ZoomDivider, ZoomContainer };
