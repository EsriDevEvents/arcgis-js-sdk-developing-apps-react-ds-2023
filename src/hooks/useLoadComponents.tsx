import SceneView from "@arcgis/core/views/SceneView";
import MapView from "@arcgis/core/views/MapView";
import { useEffect, useState } from "react";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";

export function useLoadComponents(view: MapView | SceneView | undefined) {
  const [loadComponents, setLoadComponents] = useState(false);
  useEffect(() => {
    if (!view || loadComponents) return;
    reactiveUtils
      .whenOnce(() => view.ready)
      .then(() => {
        setLoadComponents(true);
      });
  }, [loadComponents, view]);

  return loadComponents;
}
