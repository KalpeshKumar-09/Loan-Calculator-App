import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

function About() {
  return (
    <Container>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          About This App
        </Typography>
        <Typography variant="body1">
          This Loan Calculator App is a modern, single-page web application
          built using <strong>React JS</strong> and <strong>Material UI</strong>
          . It allows users to calculate loan EMIs (Equated Monthly
          Installments), view a detailed amortization schedule, and see
          real-time currency conversions of their EMI using live exchange rates.
        </Typography>

        <Typography variant="h6" mt={3} gutterBottom>
          Instructions for Candidates
        </Typography>
        <Typography variant="body2">
          Please follow these instructions to complete and submit your project:
        </Typography>
        <List sx={{ pl: 4, listStyleType: "disc" }}>
          <ListItem
            dense
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
          >
            <ListItemText primary="Push the entire project to a public GitHub repository." />
          </ListItem>
          <ListItem
            sx={{ alignItems: "center", gap: 0, pl: 0, display: "list-item" }}
            dense
          >
            <ListItemText primary="Make sure to commit regularly with clear messages after completing each feature." />
          </ListItem>
          <ListItem
            sx={{ alignItems: "center", gap: 0, pl: 0, display: "list-item" }}
            dense
          >
            <ListItemText primary="Use the provided EMI formula to perform calculations." />
          </ListItem>
          <ListItem
            sx={{ alignItems: "center", gap: 0, pl: 0, display: "list-item" }}
            dense
          >
            <ListItemText primary="Use Context API for global state management (e.g., theme, currency)." />
          </ListItem>
          <ListItem
            sx={{ alignItems: "center", gap: 0, pl: 0, display: "list-item" }}
            dense
          >
            <ListItemText primary="Create custom React hooks for reusable logic (e.g., EMI calculation, fetching exchange rates)." />
          </ListItem>
          <ListItem
            sx={{ alignItems: "center", gap: 0, pl: 0, display: "list-item" }}
            dense
          >
            <ListItemText primary="Integrate the ExchangeRate API for live currency conversion." />
          </ListItem>
          <ListItem
            sx={{ alignItems: "center", gap: 0, pl: 0, display: "list-item" }}
            dense
          >
            <ListItemText primary="Ensure the app is fully responsive on all screen sizes." />
          </ListItem>
          <ListItem
            sx={{ alignItems: "center", gap: 0, pl: 0, display: "list-item" }}
            dense
          >
            <ListItemText primary="Implement both light and dark modes using Material UI's theming system." />
          </ListItem>
          <ListItem
            sx={{ alignItems: "center", gap: 0, pl: 0, display: "list-item" }}
            dense
          >
            <ListItemText primary="Add a 404 Not Found page for unmatched routes." />
          </ListItem>
          <ListItem
            sx={{ alignItems: "center", gap: 0, pl: 0, display: "list-item" }}
            dense
          >
            <ListItemText primary="Handle runtime errors gracefully by showing an Error Page." />
          </ListItem>
          <ListItem
            sx={{ alignItems: "center", gap: 0, pl: 0, display: "list-item" }}
            dense
          >
            <ListItemText primary="Once deployed, add the live deployment link in the About section of your GitHub repo." />
          </ListItem>
          <ListItem
            sx={{ alignItems: "center", gap: 0, pl: 0, display: "list-item" }}
            dense
          >
            <ListItemText primary="Deploy the project on any platform (e.g., Vercel, Netlify, GitHub Pages)." />
          </ListItem>
        </List>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Your final GitHub repository should include a live demo link, and your
          code should be readable, modular, and well-structured.
        </Typography>

        <Typography variant="h6" mt={3} gutterBottom>
          Features
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="Loan EMI calculation using standard financial formulas." />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="Display of a detailed amortization schedule with monthly breakdowns." />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="Real-time currency conversion of the EMI amount." />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="User-friendly and responsive design using Material UI components." />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="Light and dark theme options." />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="Clear and concise user interface." />
          </ListItem>
        </List>

        {/* You can add the "Technologies Used" section similarly */}
        <Typography variant="h6" mt={3} gutterBottom>
          Technologies Used
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }} disablePadding>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="React JS" />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="Material UI" />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="Context API (for state management)" />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="React Router (for navigation, if applicable)" />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="ExchangeRate API (for currency conversion)" />
          </ListItem>
        </List>

        <Typography variant="h6" mt={3} gutterBottom>
          EMI Formula Used
        </Typography>
        <Typography variant="body2">
          The EMI (Equated Monthly Installment) is calculated using the standard
          formula:
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          EMI = [P x r x (1+r)^n] / [(1+r)^n - 1]
        </Typography>
        <Typography variant="body2">Where:</Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }} disablePadding>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="P = Principal loan amount" />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="R = Monthly interest rate (annual rate / 12 / 100)" />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="N = Number of monthly installments (loan term in months)" />
          </ListItem>
        </List>

        <Typography variant="h6" mt={3} gutterBottom>
          Currency Conversion API
        </Typography>
        <Typography variant="body2">
          This app integrates with the free tier of the{" "}
          <a
            href="https://www.exchangerate-api.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ExchangeRate-API
          </a>{" "}
          to fetch live exchange rates.
        </Typography>
        <Typography variant="body2">
          <strong>API Endpoint Example:</strong>
          <br />
          <code>
            https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD
          </code>
        </Typography>
        <Typography variant="body2">
          You must register and obtain a free API key to use this endpoint.
          Then, replace
          <code>YOUR_API_KEY</code> in the code with your actual key.
        </Typography>

        <Typography variant="h6" mt={3} gutterBottom>
          Purpose of This App
        </Typography>
        <Typography variant="body2">
          This project is designed to assess a candidate's React development
          skills, including:
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }} disablePadding>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="React fundamentals (state, props, hooks)" />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="Component structure and code reusability" />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="Third-party API integration and live data rendering" />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="Working with tables, lists, and pagination" />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="Theme customization (dark/light mode toggle)" />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="Form handling and input validation" />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="Responsive design and UI flexibility" />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="Error handling and user feedback" />
          </ListItem>
          <ListItem
            sx={{ display: "list-item", alignItems: "center", gap: 0, pl: 0 }}
            dense
          >
            <ListItemText primary="Deployment on a platform like Vercel or Netlify" />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}

export default About;
