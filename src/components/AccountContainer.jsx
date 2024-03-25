import React, { useState, useEffect } from "react";
import './AccountContainer.css'

function AccountContainer() {
const [transactions, setTransactions] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [sortOrder, setSortOrder] = useState("asc");

useEffect(() => {
fetchTransactions();
}, []);

const fetchTransactions = async () => {
try {
const response = await fetch(`http://localhost:3000/transactions`);
if (!response.ok) {
throw new Error("Failed to fetch transactions");
}
const data = await response.json();
setTransactions(data);
} catch (error) {
console.error("Error fetching transactions:", error);
}
};

const handleSearch = (searchTerm) => {
setSearchTerm(searchTerm);
};

const handleSort = (key) => {
const sortedTransactions = [...transactions].sort((a, b) => {
if (sortOrder === "asc") {
return a[key].localeCompare(b[key]);
} else {
return b[key].localeCompare(a[key]);
}
});
setTransactions(sortedTransactions);
setSortOrder(sortOrder === "asc" ? "desc" : "asc");
};

const filteredTransactions = transactions.filter((transaction) =>
transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
<div>
<div className="search-container">
<input
type="text"
placeholder="Search"
value={searchTerm}
onChange={(e) => handleSearch(e.target.value)}
/>
</div>
<div className="transaction-table">
<table>
<thead>
<tr>
<th>Date</th>
<th onClick={() => handleSort("description")}>
Description
{sortOrder === "asc" ? " ▲" : " ▼"}
</th>
<th onClick={() => handleSort("category")}>
Category
{sortOrder === "asc" ? " ▲" : " ▼"}
</th>
<th>Amount</th>
</tr>
</thead>
<tbody>
{filteredTransactions.map((transaction, index) => (
<tr key={index}>
<td>{transaction.date}</td>
<td>{transaction.description}</td>
<td>{transaction.category}</td>
<td>{transaction.amount}</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
);
}

export default AccountContainer;