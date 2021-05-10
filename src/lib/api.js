import axios from "axios";

export const getMovies = async (page) => {
  try {
    const { data: images } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
        params: {
          api_key: "dbfc56cf620be872eccb06fc5c5b8e53",
          language: "ko",
          region: "KR",
          page,
        },
      }
    );

    return images.results.map((image) => ({
      original_title: image.original_title,
      title: image.title,
      src: "https://image.tmdb.org/t/p/w500" + image.backdrop_path,
    }));
  } catch (err) {
    alert(err);
  }
};
