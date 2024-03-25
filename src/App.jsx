import React from "react";
import AccountContainer from './components/AccountContainer';
import AddTransactionForm from "./components/AddTransactionForm";
import './App.css'

function App() {
return (
<div className="App">
<div>
<h1 className="header">Bank Of Flatiron</h1>
</div>
<AddTransactionForm />
<AccountContainer />
</div>
);
}

export default App;


