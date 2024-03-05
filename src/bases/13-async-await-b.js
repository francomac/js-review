import giphyApi from "./bases/11-axios";

const getImage = async () => {
  try {
    const { data } = (await giphyApi.get("random")).data;
    const { url } = data.images.original;

    console.log(respuesta);
  } catch (error) {
    console.log("error en la peticion");
  }
};

getImage();
