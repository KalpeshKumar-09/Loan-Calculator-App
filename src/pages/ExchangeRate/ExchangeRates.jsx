import { useEffect, useState } from "react";
import { fetchData } from "../../api/fetchData";
import { Typography } from "@mui/material";

const ExchangeRates = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const getResult = async () => {
      try {
        const response = await fetchData();
        setResult(response);
        console.log(response);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };
    getResult();
  }, []);

  return (
    <div>
      {result.map((item) => (
        <Typography key={item.id} variant="h6">
          {item.result}
        </Typography>
      ))}
    </div>
  );
};

export default ExchangeRates;
