import { IconButton, Typography } from "@mui/material";
import {
  EnvironmentStack,
  EnvironmentTypography,
  SceneEnvironmentContainer,
} from "./SceneEnvironment.styled";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import CloudyWeather from "@arcgis/core/views/3d/environment/CloudyWeather";
import SunnyWeather from "@arcgis/core/views/3d/environment/SunnyWeather";
import RainyWeather from "@arcgis/core/views/3d/environment/RainyWeather";
import SnowyWeather from "@arcgis/core/views/3d/environment/SnowyWeather";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import SunLighting from "@arcgis/core/views/3d/environment/SunLighting";

type SceneEnvironmentProps = {
  onWeatherChange: (
    weather:
      | __esri.SunnyWeather
      | __esri.CloudyWeather
      | __esri.RainyWeather
      | __esri.SnowyWeather
  ) => void;
  onSunLightingChange: (lighting: __esri.SunLighting) => void;
};

export const SceneEnvironment: React.FC<SceneEnvironmentProps> = (
  props: SceneEnvironmentProps
) => {
  const { onWeatherChange, onSunLightingChange } = props;

  const handleOnSunnyWeatherClick = () => {
    onWeatherChange(
      new SunnyWeather({
        cloudCover: 0.5,
      })
    );
  };

  const handleOnCloudyWeatherClick = () => {
    onWeatherChange(
      new CloudyWeather({
        cloudCover: 0.7,
      })
    );
  };

  const handleOnRainyWeatherClick = () => {
    onWeatherChange(
      new RainyWeather({
        cloudCover: 0.7,
        precipitation: 0.7,
      })
    );
  };

  const handleOnSnowyWeatherClick = () => {
    onWeatherChange(
      new SnowyWeather({
        cloudCover: 0.7,
        precipitation: 0.7,
      })
    );
  };

  const handleDateTimePickerChange = (value: Dayjs | null) => {
    if (value) {
      const sunLighting = new SunLighting({
        date: value.toDate(),
        directShadowsEnabled: true,
      });
      onSunLightingChange(sunLighting);
    }
  };

  return (
    <SceneEnvironmentContainer boxShadow={2}>
      <Typography fontWeight={"bold"}>Environment Settings</Typography>
      <EnvironmentTypography>Weather</EnvironmentTypography>
      <EnvironmentStack direction="row" spacing={1}>
        <IconButton onClick={handleOnSunnyWeatherClick}>
          <WbSunnyIcon />
        </IconButton>
        <IconButton onClick={handleOnCloudyWeatherClick}>
          <CloudIcon />
        </IconButton>
        <IconButton onClick={handleOnRainyWeatherClick}>
          <WaterDropIcon />
        </IconButton>
        <IconButton onClick={handleOnSnowyWeatherClick}>
          <AcUnitIcon />
        </IconButton>
      </EnvironmentStack>
      <EnvironmentTypography>Sun Lightning</EnvironmentTypography>
      <DateTimePicker
        ampm={false}
        views={["year", "month", "day", "hours", "minutes"]}
        slotProps={{
          textField: { size: "small", sx: { width: "223px" } },
        }}
        onChange={handleDateTimePickerChange}
      />
    </SceneEnvironmentContainer>
  );
};
