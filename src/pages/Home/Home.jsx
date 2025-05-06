import { Box, Container } from "@mui/material";
import Form from "./Form";
import List from "./List";
import { useState } from "react";
import { useCurrency } from "../../context/CurrencyContext";

const Home = () => {
  const [loanDetails, setLoanDetails] = useState({
    cost: "10000",
    interest: "8.6",
    duration: "5",
  });
  const [schedule, setSchedule] = useState([]);
  const { amount, calculateEMI } = useCurrency();
  const [selected, setSelected] = useState("USD");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanDetails({ ...loanDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSchedule = calculateEMI(
      loanDetails.cost,
      loanDetails.interest,
      loanDetails.duration
    );
    if (newSchedule) {
      setSchedule(newSchedule);
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1200px",
        mt: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Form
          loanDetails={loanDetails}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {schedule.length > 0 && (
          <List
            amount={amount}
            schedule={schedule}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      </Box>
    </Container>
  );
};

export default Home;
