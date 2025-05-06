import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${
        import.meta.env.VITE_CURRENCY_CONVERSION_API_KEY
      }/latest/USD`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
