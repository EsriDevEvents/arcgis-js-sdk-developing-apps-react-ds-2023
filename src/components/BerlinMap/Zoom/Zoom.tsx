import MapView from "@arcgis/core/views/MapView";
import ZoomVM from "@arcgis/core/widgets/Zoom/ZoomViewModel";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useRef } from "react";
import { ZoomButton, ZoomContainer, ZoomDivider } from "./Zoom.styled";

type ZoomProps = {
  mapView: MapView;
};

export const Zoom: React.FC<ZoomProps> = (props: ZoomProps) => {
  const { mapView } = props;
  const zoom = useRef<ZoomVM>(
    new ZoomVM({
      view: mapView,
    })
  );

  const zoomIn = () => {
    zoom.current.zoomIn();
  };

  const zoomOut = () => {
    zoom.current.zoomOut();
  };

  return (
    <ZoomContainer boxShadow={2}>
      <ZoomButton onClick={zoomIn}>
        <AddIcon />
      </ZoomButton>
      <ZoomDivider variant="middle" role="presentation" />
      <ZoomButton onClick={zoomOut}>
        <RemoveIcon />
      </ZoomButton>
    </ZoomContainer>
  );
};
