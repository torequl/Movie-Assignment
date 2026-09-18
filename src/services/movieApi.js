const API_URL = "https://api.tvmaze.com";

export const getShows = async () => {
  const response = await fetch(`${API_URL}/shows`);

  const data = await response.json();

  return data;
};


export const searchShows = async (query) => {
  const response = await fetch(
    `${API_URL}/search/shows?q=${query}`
  );

  const data = await response.json();

  return data;
};