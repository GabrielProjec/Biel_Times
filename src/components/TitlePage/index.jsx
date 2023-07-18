import React from "react";
import { Typography } from "@mui/material";

function TitlePage(props) {
  return (
    <div>
      <Typography
        style={{
          fontSize: 40,
          textAlign: "center",
          marginTop: "15px",
          fontWeight: "bold",
          color: "rgb(32,45,105)",
        }}
      >
        {props.title}
      </Typography>
    </div>
  );
}

export default TitlePage;
