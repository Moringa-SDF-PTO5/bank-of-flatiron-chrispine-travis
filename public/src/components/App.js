import React from "react";
import AccountContainer from "./components/AccountContainer.js";
import AddTransactionForm from "./components/AddTransactionForm.js";
import TransactionsList from "./components/TransactionList.js";
import Transaction from "./components/Transaction.js";
import Search from "./components/Search.js";
import { Styles } from "react"; "./components/styles.css"; // Import the CSS file with correct syntax

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
