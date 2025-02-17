import React from "react";
import {MenuList} from "../data/data"
import Layout from "../components/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "300px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "300px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent sx={{ textAlign: "center" }} >
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Button color="secondary" sx={{bgcolor: "darkblue", m:2, textAlign:"center", }} >Add To Card</Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;