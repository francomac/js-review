const apiKey = "3VRPtuzTPBydcxV9vypiSQ5g7mf0YUYd";
const url = `https://api.giphy.com/v1/gifs/random/trending?api_key=${apiKey}`;
fetch(url)
  .then((res) => res.json()) // destructuring to get data only, on line 10
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  });
