import React from "react";
import AccountContainer from "./components/AccountContainer";
import AddTransactionForm from "./components/AddTransactionForm";
import TransactionsList from "./components/TransactionList";
import Transaction from "./components/Transaction";
import Search from "./components/Search";
import "./components/styles.css"; // Import the CSS file with correct syntax

function App() {
  return (
    <div className="App">
      <div>
        <h1>Bank Of Flatiron</h1>
      </div>
      <AccountContainer />
      {/* You can include other components here if needed */}
    </div>
  );
}

export default App;
