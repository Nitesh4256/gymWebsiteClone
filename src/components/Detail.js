import React from "react";
import { Typography, Stack, Button } from "@mui/material";

function Detail({ exerciseDetail }) {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: "https://i.pinimg.com/736x/b9/75/5d/b9755dccab4643f999545edc36ccd638.jpg",
      name: bodyPart,
    },
    {
      icon: "https://i.pinimg.com/736x/b9/75/5d/b9755dccab4643f999545edc36ccd638.jpg",
      name: target,
    },
    {
      icon: "https://i.pinimg.com/736x/b9/75/5d/b9755dccab4643f999545edc36ccd638.jpg",
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt="name" loading="lazy" className="detail-image" />

      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h5">
          {" "}
          ExerCises keep you strong,
          {name} {"  "}
          is one of the best exercises to target your {target}. It will help you
          improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt=""
                style={{ width: "50px", height: "50px" }}
              />
            </Button>

            <Typography variant=" h5" textTransform="capitalize">
              {" "}
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Detail;
