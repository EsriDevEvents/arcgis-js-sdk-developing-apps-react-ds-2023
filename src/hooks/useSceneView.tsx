import { useRef, useEffect, useState } from "react";
import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";

function loadSceneView(
  sceneProperties: __esri.WebSceneProperties,
  sceneViewProperties: __esri.SceneViewProperties = {}
) {
  const scene = new WebScene({ ...sceneProperties });

  return new SceneView({
    ...sceneViewProperties,
    map: scene,
  });
}

function destroySceneView(view: SceneView) {
  if (!view) {
    return;
  }

  view.container = null as unknown as HTMLDivElement;
}

export function useSceneView(
  sceneProperties: __esri.WebSceneProperties,
  sceneViewProperties?: __esri.SceneViewProperties
) {
  const ref = useRef(null);

  const [sceneView, setSceneView] = useState<SceneView>();

  const initialArguments = useRef({ sceneProperties, sceneViewProperties });

  useEffect(() => {
    let cancelled = false;
    let sceneView: SceneView;

    async function load() {
      const { sceneProperties, sceneViewProperties } = initialArguments.current;
      sceneView = loadSceneView(sceneProperties, sceneViewProperties);
      if (cancelled) {
        return;
      }

      sceneView.container = ref.current as unknown as HTMLDivElement;

      setSceneView(sceneView);
    }

    load();

    return function cleanUp() {
      cancelled = true;

      destroySceneView(sceneView);
    };
  }, []);

  return { ref, sceneView };
}
