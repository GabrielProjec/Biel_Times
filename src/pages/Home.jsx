import React, { useEffect, useState } from "react";
import apinews from "../services/apinews";

// MATERIAL UI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//COMPONENTS
import TitlePage from "../components/TitlePage";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadNews() {
      await apinews
        .get("top-headlines?country=us&category=general")
        .then((response) => {
          setData(response.data.articles.slice(11));
        });
    }

    loadNews();
  }, []);

  return (
    <div>
      <TitlePage title="GENERAL" />
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {data.map((value) => {
            return (
              <div>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: 700,
                    margin: "30px 30px",
                    border: "2px solid #CCC",
                    borderRadius: "15px",
                  }}
                >
                  <CardMedia
                    sx={{ height: 250, objectFit: "cover" }}
                    image={value.urlToImage}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body3"
                      color="text.secondary"
                      style={{
                        marginBottom: "20px",
                        maxHeight: "100px",
                      }}
                    >
                      {value.description}
                    </Typography>
                    <Button
                      href={value.url}
                      target="blank"
                      style={{
                        backgroundColor: "rgb(32,45,105)",
                        color: "#FFF",
                        width: "100%",
                        marginTop: "10px",
                      }}
                    >
                      Saiba Mais
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
