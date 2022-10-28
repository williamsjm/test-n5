import axios from "axios";

const getAll = async () => {
  const result = await axios.get("https://hp-api.herokuapp.com/api/characters");
  return result.data;
};

export const hpService = {
  getAll,
};
