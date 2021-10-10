const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const { response } = require("express");
const express = require("express");

const app = express();

const url = "https://www.detik.com/";

axios(url).then((response) => {
  const html = response.data;
  console.log(html);
  const $ = cheerio.load(html);
  const articles = [];

  $(".media__title", html)
    .each(function () {
      const title = $(this).find("a").attr("dtr-ttl");
      const url = $(this).find("a").attr("href");
      articles.push({
        title,
        url,
      });
      console.log(articles);
    })
    .catch((err) => console.log(err));
});
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
