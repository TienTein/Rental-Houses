import "../../assets/sass/shop/Item.scss";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { storage } from "../../firebase/config.js";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { useEffect, useState } from "react";

export default function Item({ name, area, userId }) {
  const imagesListRef = ref(storage, "images/");
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    listAll(imagesListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) =>
            prev.find((c) => c === url) ? prev : [...prev, url]
          );
        });
      });
    });
  }, []);

  const urlId = imageUrls.filter((url) => {
    return url.includes(userId);
  });

  return (
    <Card
      className="card"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "281px",
        minWidth: 368,
        marginBottom: 3,
      }}
    >
      <CardCover>
        <img className="img" src={urlId} alt="" />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography
          level="h2"
          fontSize="lg"
          textColor="#ff5a3c"
          mb={1}
          fontWeight="bold"
        >
          {area}
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
