import { Box, Stack, Typography, styled } from "@mui/material";

const SceneEnvironmentContainer = styled(Box)({
  position: "absolute",
  right: 0,
  marginRight: "15px",
  marginTop: "18px",
  height: "180px",
  width: "240px",
  backgroundColor: "#ACBABF",
  padding: "8px",
  borderRadius: "8px",
});

const EnvironmentTypography = styled(Typography)({
  marginTop: "5px",
});

const EnvironmentStack = styled(Stack)({
  marginRight: 2,
  marginLeft: 2,
});

export { SceneEnvironmentContainer, EnvironmentTypography, EnvironmentStack };
