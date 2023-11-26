import axios from "axios";

async function getImg(url: string): Promise<File> {
  const response = await axios.get(url, { responseType: "blob" });
  const blob = new Blob([response.data], {
    type: response.headers["content-type"],
  });
  const fileImage = new File([blob], "image.png");
  return fileImage;
}

export default getImg;
