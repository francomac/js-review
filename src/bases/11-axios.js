import axios from "axios";

const apiKey = "3VRPtuzTPBydcxV9vypiSQ5g7mf0YUYd";
// const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;

const giphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey,
  },
});

giphyApi.get("/random").then((res) => {
  const { data } = res.data;
  const { url } = data.images.original;

  const img = document.createElement("img");
  img.src = url;
  document.body.append(img);
});
