import React from "react";
import { Stack, Typography, TypographyClassKey } from "@mui/material";

function BodyParts({ item, setBodyPart, bodyPart }) {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2526" : " ",

        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        curson: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: "1800", left: "100", behavior: "smooth" });
      }}
    >
      <img
        src="https://t3.ftcdn.net/jpg/03/00/42/82/360_F_300428214_kqAIKM5PxsD0cPCGrhKW3U2gT1GlUEq4.jpg"
        alt=""
        style={{ width: "40px", height: "40px" }}
      />

      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {" "}
        {item}
      </Typography>
    </Stack>
  );
}

export default BodyParts;
