import { GOOGLE_API_KEY } from "./constants";
const fetchVideos = async (pageToken = "") => {
  const data = await fetch(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key=" +
      GOOGLE_API_KEY +
      "&pageToken=" +
      pageToken
  );
  const json = await data.json();
  console.log(json);
  return json;
};
export default fetchVideos;
