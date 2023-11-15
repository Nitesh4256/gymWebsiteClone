import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assests/images/logo.jpg";
function Footer() {
  return (
    <Box mt="10px" bgcolor="#fff">
      <Stack gap="10px" alignItems="center " px="10px" pt="24px">
        <img src={Logo} alt="" width="100px " height="40px" />
        <Typography variant="h5" pb="10px" mt="0px">
          Created By Nitesh Shivhare... Nk
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
