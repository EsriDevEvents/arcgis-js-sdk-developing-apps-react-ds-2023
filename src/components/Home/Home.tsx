import { Typography } from "@mui/material";
import { HomeContainer, TypographyParagraph } from "./Home.styled";

export const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Typography variant="h5">Welcome!</Typography>
      <TypographyParagraph>
        This is a demo application built with React & ArcGIS Maps SDK for
        JavaScript.
      </TypographyParagraph>
    </HomeContainer>
  );
};
