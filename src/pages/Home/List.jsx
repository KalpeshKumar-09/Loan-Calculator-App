import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const List = ({ amount, schedule, selected, setSelected }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography variant="h6">Monthly EMI: ${amount}</Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "stretch", sm: "center" },
          gap: 2,
        }}
      >
        <FormControl sx={{ width: 100 }}>
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="USD"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <MenuItem value="USE">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="INR">INR</MenuItem>
            <MenuItem value="GBP">GBP</MenuItem>
            <MenuItem value="JPY">JPY</MenuItem>
            <MenuItem value="AUD">AUD</MenuItem>
            <MenuItem value="CAD">CAD</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          sx={{ color: "#CD92D7", borderColor: "#CD92D7" }}
          onClick={() => window.location.reload()}
        >
          Reset Table
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "background.paper",
          p: 1,
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant="h6">Amortization Schedule ({selected})</Typography>

        <TableContainer
          component={Paper}
          sx={{
            maxHeight: 400,
            overflowY: "auto",
            borderRadius: 1,
          }}
        >
          <Table stickyHeader aria-label="amortization table">
            <TableHead>
              <TableRow>
                <TableCell>Month</TableCell>
                <TableCell align="right">Principal</TableCell>
                <TableCell align="right">Interest</TableCell>
                <TableCell align="right">Remaining Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schedule.map((row) => (
                <TableRow key={row.month}>
                  <TableCell>{row.month}</TableCell>
                  <TableCell align="right">
                    {row.principal} {selected}
                  </TableCell>
                  <TableCell align="right">
                    {row.interest} {selected}
                  </TableCell>
                  <TableCell align="right">
                    {row.balance} {selected}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default List;
