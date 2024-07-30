import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <div>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "40px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": { color: "goldenrod", transform: "translateX(5px" },
            transition: "all 400ms",
          }}
        >
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <LinkedInIcon />
          <WhatsAppIcon />
          <GitHubIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Jagannath{" "}
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
