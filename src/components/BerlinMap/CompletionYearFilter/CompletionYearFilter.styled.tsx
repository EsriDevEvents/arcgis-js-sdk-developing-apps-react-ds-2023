import { Box, Slider, styled } from "@mui/material";

const CompletionYearFilterContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 610,
  height: 70,
  position: "absolute",
  left: 15,
  bottom: -30,
  background: "#ACBABF",
  borderRadius: "8px",
});

const CompletionYearSlider = styled(Slider)({
  width: 500,
  marginTop: "10px",
  marginBottom: "10px",
  "& .MuiSlider-thumb": {
    color: "#ACBABF",
    border: 1,
    borderColor: "rgba(79,88,85)",
  },
  "& .MuiSlider-valueLabel": {
    backgroundColor: "rgb(79,88,85)",
    top: -7,
  },
  "& .MuiSlider-track": {
    height: 8,
    border: "none",
    backgroundColor: "rgba(79,88,85)",
  },
  "& .MuiSlider-rail": {
    height: 8,
    backgroundColor: "rgba(79,88,85,0.8)",
  },
});

export { CompletionYearFilterContainer, CompletionYearSlider };
