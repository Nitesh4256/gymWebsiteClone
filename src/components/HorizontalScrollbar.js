import React from "react";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import BodyParts from "./BodyParts";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import RightArrowIcon from "../assests/images/rightArrow.png";
import LeftArrowIcon from "../assests/images/leftArrow.png";
import ExerciseCard from "./ExerciseCard";
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
function HorizontalScrollbar({ data, bodyPart, setBodyPart, isBodyParts }) {
  return (
    <ScrollMenu
    // LeftArrow={LeftArrow} RightArrow={RightArrow}
    >
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyParts ? (
            <BodyParts
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScrollbar;
