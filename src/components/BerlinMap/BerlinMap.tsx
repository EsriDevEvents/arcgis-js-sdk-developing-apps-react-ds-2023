import React from "react";
import { useEffect, useRef, useState } from "react";
import { useMapView } from "../../hooks/useMapView";
import Extent from "@arcgis/core/geometry/Extent";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import FeatureFilter from "@arcgis/core/layers/support/FeatureFilter";
import { ArcGISContainer } from "../ArcGISContainer/ArcGISContainer.styled";
import { CompletionYearFilter } from "./CompletionYearFilter/CompletionYearFilter";
import { FunctionsFilter } from "./FunctionsFilter/FunctionsFilter";
import { Zoom } from "./Zoom/Zoom";

type MonumentsFilter = {
  buildingFunctions: string[];
  yearOfCompletion: number;
};

export const BerlinMap: React.FC = () => {
  const monuments = useRef<FeatureLayer>(
    new FeatureLayer({
      url: import.meta.env.VITE_MONUMENTS_FEATURE_LAYER,
    })
  );

  const landmarks = useRef<FeatureLayer>(
    new FeatureLayer({
      url: import.meta.env.VITE_LANDMARKS_FEATURE_LAYER,
    })
  );

  const busStations = useRef<FeatureLayer>(
    new FeatureLayer({
      url: import.meta.env.VITE_BUS_STATIONS_FEATURE_LAYER,
    })
  );

  const [loadComponents, setLoadComponents] = useState(false);

  const [filter, setFilter] = useState<MonumentsFilter>({
    buildingFunctions: [],
    yearOfCompletion: new Date().getFullYear(),
  });

  const { ref, mapView } = useMapView(
    {
      portalItem: {
        id: import.meta.env.VITE_BERLIN_MAP_ITEM_ID,
      },
      layers: [monuments.current, landmarks.current, busStations.current],
    },
    {
      center: [13.404954, 52.520008],
      zoom: 15,
      popupEnabled: false,
      ui: {
        components: ["attribution"],
      },
      constraints: {
        rotationEnabled: false,
        minZoom: 15,
        geometry: new Extent({
          xmax: 1497314.3547,
          xmin: 1483749.7965,
          ymin: 6889147.7864,
          ymax: 6898559.5974,
          spatialReference: SpatialReference.WebMercator,
        }),
      },
    }
  );

  useEffect(() => {
    if (!mapView) return;
    reactiveUtils
      .whenOnce(() => mapView.ready)
      .then(() => {
        setLoadComponents(true);
      });
  }, [mapView]);

  useEffect(() => {
    if (
      !mapView ||
      (!filter.yearOfCompletion && filter.buildingFunctions.length === 0)
    )
      return;

    mapView.whenLayerView(monuments.current).then((monumentsLayerView) => {
      let expression;
      if (filter.buildingFunctions.length > 0) {
        if (filter.buildingFunctions.length === 1) {
          expression = `building_func = '${filter.buildingFunctions[0]}'`;
        } else {
          expression = "(";
          for (let i = 0; i < filter.buildingFunctions.length; i++) {
            expression += `building_func = '${filter.buildingFunctions[i]}'`;
            if (i < filter.buildingFunctions.length - 1) {
              expression += " OR ";
            }
          }
          expression += ")";
        }
        expression += ` AND Dating <= ${filter.yearOfCompletion}`;
      } else expression = `Dating <= ${filter.yearOfCompletion}`;

      monumentsLayerView.filter = new FeatureFilter({
        where: expression,
      });
    });
  }, [mapView, filter]);

  const handleCompletionYearChange = (completionYear: number) => {
    setFilter({
      ...filter,
      yearOfCompletion: completionYear,
    });
  };

  const handleFunctionsFilterChange = (
    _event: React.MouseEvent<HTMLElement>,
    newBuildingFunctions: string[]
  ) => {
    setFilter({ ...filter, buildingFunctions: newBuildingFunctions });
  };

  const handleFunctionsClearFilter = () => {
    setFilter({ ...filter, buildingFunctions: [] });
  };

  return (
    <ArcGISContainer ref={ref}>
      {mapView && loadComponents && (
        <>
          <Zoom mapView={mapView} />
          <CompletionYearFilter
            onCompletionYearChange={handleCompletionYearChange}
          />
          <FunctionsFilter
            selectedFunctions={filter.buildingFunctions}
            onFunctionsFilterChange={handleFunctionsFilterChange}
            onFunctionsClearFilter={handleFunctionsClearFilter}
          />
        </>
      )}
    </ArcGISContainer>
  );
};
