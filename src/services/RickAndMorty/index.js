import axios from "axios";

const getAll = async () => {
  const result = await axios.get("https://rickandmortyapi.com/api/character/");
  return result.data;
};
const loadMore = async (page) => {
  const result = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  return result.data;
};

export const rmService = {
  getAll,
  loadMore,
};
