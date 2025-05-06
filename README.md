# Loan Calculator App

A fully responsive and theme-switchable loan calculator web application built using **React**, **Material UI**, **React Router**, and **Context API**. It allows users to calculate monthly EMI and view a detailed amortization schedule. Also includes live currency exchange rates powered by an external API.

---

## Features

- **EMI Calculator** – Calculate monthly installments based on loan amount, interest rate, and term.
- **Amortization Schedule** – Breakdown of each month's principal, interest, and remaining balance.
- **Live Exchange Rates** – Fetches latest currency rates using ExchangeRate API.
- **Dark / Light Mode** – Toggle between dark and light themes using global state.
- **Responsive Design** – Optimized for mobile and desktop views.
- **Clean Component Architecture** – Modular code using React best practices.

---

## Tech Stack

- **React 18**
- **Material UI (MUI v5)**
- **React Router**
- **ExchangeRate API**
- **Context API** (Theme + Currency Context)
- **Vite** for build and development

---

## Installation

1. **Clone the repo**

```bash
git clone https://github.com/KalpeshKumar-09/Loan-Calculator-App.git
cd Loan-Calculator-App
```

2. **Install dependencies**

```bash
npm install
```

3. **Add API key**
   _Create a .env file in the root and add:_

```bash
VITE_CURRENCY_CONVERSION_API_KEY=your_api_key_here
```

4. **Start the development server**

```bash
npm run dev
```

# Folder Structure

├── src
│ ├── api/ # Axios API calls
│ ├── components/ # Navbar and UI components
│ ├── context/ # Theme and Currency Context
│ ├── pages/ # Main pages (Home, About
