import React from "react";
import { ListItem, Card, ListItemText } from "@mui/material";
import { ArticleObj } from "../HomePage/HomePage";

interface ArticleProps {
  article: ArticleObj;
}

const Article = ({ article }: ArticleProps) => {
  return (
    <ListItem>
      <Card variant="outlined" sx={{ mb: "10px" }}>
        <a
          href={article.url}
          target="__blank"
          style={{ textDecoration: "none" }}
        >
          <img
            src={article.urlToImage}
            alt={article.title}
            style={{ width: "100%" }}
          />
          <ListItemText sx={{ color: "black", mx: "5%" }}>
            {article.title}
          </ListItemText>
        </a>
      </Card>
    </ListItem>
  );
};

export default Article;