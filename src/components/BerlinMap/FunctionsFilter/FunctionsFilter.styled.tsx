import {
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  styled,
} from "@mui/material";

const FilterToggleButton = styled(ToggleButton)({
  backgroundColor: "#ACBABF",
  color: "rgba(79,88,85)",
  "&:hover": {
    backgroundColor: "rgba(172,186,191,0.9)",
  },
  textTransform: "none",
  borderStyle: "none",
  "&.Mui-selected": {
    backgroundColor: "#9AA6AB",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "rgba(154,166,171,0.9)",
  },
});

const FilterToggleGroup = styled(ToggleButtonGroup)({
  height: "40px",
});

const ClearButton = styled(Button)({
  backgroundColor: "rgba(79,88,85)",
  color: "white",
  "&:hover": {
    backgroundColor: "rgba(79,88,85,0.9)",
  },
  textTransform: "none",
  borderStyle: "none",
});

const FilterStack = styled(Stack)({
  position: "absolute",
  top: 95,
  right: 80,
  borderRadius: "8px",
});

export { FilterToggleButton, FilterToggleGroup, FilterStack, ClearButton };
