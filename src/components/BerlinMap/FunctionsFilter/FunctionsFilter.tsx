import {
  ClearButton,
  FilterStack,
  FilterToggleButton,
  FilterToggleGroup,
} from "./FunctionsFilter.styled";

type FunctionsFilterProps = {
  selectedFunctions: string[];
  onFunctionsFilterChange: (
    event: React.MouseEvent<HTMLElement>,
    newBuildingFunctions: string[]
  ) => void;
  onFunctionsClearFilter: () => void;
};

export const FunctionsFilter: React.FC<FunctionsFilterProps> = (
  props: FunctionsFilterProps
) => {
  const { selectedFunctions, onFunctionsFilterChange, onFunctionsClearFilter } =
    props;
  return (
    <FilterStack direction="row" spacing={1}>
      <FilterToggleGroup
        value={selectedFunctions}
        onChange={onFunctionsFilterChange}
      >
        <FilterToggleButton value="Residential">Residential</FilterToggleButton>
        <FilterToggleButton value="commercial">Commercial</FilterToggleButton>
        <FilterToggleButton value="educational">Educational</FilterToggleButton>
        <FilterToggleButton value="Place of worhsip">
          Place of worship
        </FilterToggleButton>
        <FilterToggleButton value="cultural">Cultural</FilterToggleButton>
      </FilterToggleGroup>
      {selectedFunctions.length > 0 && (
        <ClearButton onClick={onFunctionsClearFilter}>Clear</ClearButton>
      )}
    </FilterStack>
  );
};
