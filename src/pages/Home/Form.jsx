import { Button, Grid, TextField, Box, Typography } from "@mui/material";

const Form = ({ loanDetails, handleChange, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        width: "100%",
      }}
    >
      <Typography variant="h4">Loan Calculator Dashboard</Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Loan Amount"
            name="cost"
            fullWidth
            type="number"
            value={loanDetails.cost}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Interest Rate (%)"
            name="interest"
            type="number"
            fullWidth
            value={loanDetails.interest}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Term (Years)"
            name="duration"
            type="number"
            fullWidth
            value={loanDetails.duration}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Box>
        <Button type="submit" variant="contained" color="primary">
          Calculate
        </Button>
      </Box>
    </form>
  );
};

export default Form;
