import { useSceneView } from "../../hooks/useSceneView";
import SunLighting from "@arcgis/core/views/3d/environment/SunLighting";
import { ArcGISContainer } from "../ArcGISContainer/ArcGISContainer.styled";
import { SceneEnvironment } from "./SceneEnvironment/SceneEnvironment";
import { useLoadComponents } from "../../hooks/useLoadComponents";

export const BerlinScene: React.FC = () => {
  const { ref, sceneView } = useSceneView(
    {
      portalItem: {
        id: import.meta.env.VITE_BERLIN_SCENE_ITEM_ID,
      },
    },
    {
      popupEnabled: false,
      ui: {
        components: ["attribution"],
      },
      environment: {
        lighting: new SunLighting({
          date: new Date(),
          directShadowsEnabled: true,
        }),
      },
    }
  );

  const loadComponents = useLoadComponents(sceneView);

  const handleOnWeatherChange = (
    weather:
      | __esri.SunnyWeather
      | __esri.CloudyWeather
      | __esri.RainyWeather
      | __esri.SnowyWeather
  ) => {
    if (sceneView) sceneView.environment.weather = weather;
  };

  const handleOnLightingChange = (lighting: __esri.SunLighting) => {
    if (sceneView) sceneView.environment.lighting = lighting;
  };

  return (
    <ArcGISContainer ref={ref}>
      {sceneView && loadComponents && (
        <SceneEnvironment
          onWeatherChange={handleOnWeatherChange}
          onSunLightingChange={handleOnLightingChange}
        />
      )}
    </ArcGISContainer>
  );
};
