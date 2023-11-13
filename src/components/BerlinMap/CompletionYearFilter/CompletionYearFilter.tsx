import {
  CompletionYearFilterContainer,
  CompletionYearSlider,
} from "./CompletionYearFilter.styled";
import { marks } from "./config";

type CompletionYearFilterProps = {
  onCompletionYearChange: (completionYear: number) => void;
};

export const CompletionYearFilter: React.FC<CompletionYearFilterProps> = (
  props: CompletionYearFilterProps
) => {
  const { onCompletionYearChange } = props;

  const valueText = (value: number) => {
    return `${value}`;
  };

  const handleSliderChange = (_event: Event, value: number | number[]) => {
    if (typeof value !== "number") throw Error("Value is not of type number.");
    onCompletionYearChange(value);
  };

  return (
    <CompletionYearFilterContainer boxShadow={2}>
      <CompletionYearSlider
        getAriaValueText={valueText}
        defaultValue={2023}
        min={1150}
        max={new Date().getFullYear()}
        marks={marks}
        valueLabelDisplay="on"
        onChange={handleSliderChange}
      />
    </CompletionYearFilterContainer>
  );
};
