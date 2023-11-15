export const exerciseOptions = {
  method: "GET",

  params: { limit: "10" },
  headers: {
    "X-RapidAPI-Key": "c1267d6f96msh8c32504fa04e816p135a02jsn9eaf323b1584",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c1267d6f96msh8c32504fa04e816p135a02jsn9eaf323b1584",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
