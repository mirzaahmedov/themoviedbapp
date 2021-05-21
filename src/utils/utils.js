import axios from "axios";

const getUrl = (param, query) =>
  `https://api.themoviedb.org/3/${param.join(
    "/"
  )}?api_key=c95fea8469525c1b1ebbf16b59165390&${query.join("&")}`;

export const fetchAll = (setState, param = [], query = []) => {
  axios
    .get(getUrl(param, query))
    .then(({ data }) => {
      setState(data.results);
    })
    .catch((err) => console.log(err));
};

export const fetchCasts = (setState, param = [], query = []) => {
  axios
    .get(getUrl(param, query))
    .then(({ data }) => {
      setState(data.cast);
    })
    .catch((err) => console.log(err));
};

export const fetchOne = (setState, param = [], query = []) => {
  axios
    .get(getUrl(param, query))
    .then(({ data }) => {
      setState(data);
    })
    .catch((err) => console.log(err));
};

export const getImage = (path = "placeholder", size = "original") => {
  return "https://image.tmdb.org/t/p/" + size + "/" + path;
};
