const apiKey = "3VRPtuzTPBydcxV9vypiSQ5g7mf0YUYd";
const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;
fetch(url)
  .then((res) => res.json()) // destructuring to get data only, on line 10
  .then(({ data }) => {
    const { url } = data[45].images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  });
