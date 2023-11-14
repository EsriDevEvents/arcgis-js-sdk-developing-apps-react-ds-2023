import { useRef, useEffect, useState } from "react";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";

const loadMapView = (
  mapProperties: __esri.WebMapProperties,
  mapViewProperties: __esri.MapViewProperties = {}
) => {
  const map = new WebMap({ ...mapProperties });

  return new MapView({
    ...mapViewProperties,
    map,
  });
};

const destroyMapView = (view: MapView) => {
  if (!view) {
    return;
  }

  view.container = null as unknown as HTMLDivElement;
};

export function useMapView(
  mapProperties: __esri.WebMapProperties,
  mapViewProperties?: __esri.MapViewProperties
) {
  const ref = useRef(null);

  const [mapView, setMapView] = useState<MapView>();

  const initialArguments = useRef({ mapProperties, mapViewProperties });

  useEffect(() => {
    let cancelled = false;
    let mapView: MapView;

    async function load() {
      const { mapProperties, mapViewProperties } = initialArguments.current;
      mapView = loadMapView(mapProperties, mapViewProperties);
      if (cancelled) {
        return;
      }

      mapView.container = ref.current as unknown as HTMLDivElement;

      setMapView(mapView);
    }

    load();

    return function cleanUp() {
      cancelled = true;

      destroyMapView(mapView);
    };
  }, []);

  return { ref, mapView };
}
