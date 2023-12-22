import axios from "axios";
import TokenManagement from "../../services/TokenManagement";
import React, { useState, useEffect, useRef } from "react";

function BalanceAccount() {
    const currentUser = TokenManagement();
    console.log("Current user:", currentUser);
    const dataBalanceRef = useRef();
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Start by setting loading to true
        setLoading(true);
        
        // First, get the current user's account ID
        axios.get(`http://127.0.0.1:8000/management/account/${currentUser}`)
            .then(response => {
                // Assuming response.data is an array and you're interested in the first element's ID
                const accountData = response.data;
                if (accountData.length > 0) {
                    const idAccount = accountData[0].id; // Get the ID of the first account
                    // Fetch the balance details with the obtained ID
                    return axios.get(`http://127.0.0.1:8000/BankAccount/${idAccount}`);
                } else {
                    throw new Error("No accounts found for the user.");
                }
            })
            .then(response => {
                // Assuming response.data contains the balance details
                setData(response.data); // Set the balances data
                setLoading(false);
                console.log("patate  :",response.data);
                dataBalanceRef.current = response.data;

            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setError(error);
                setLoading(false);
            });
    }, [currentUser, data]); // Rerun when currentUser changes

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data!</p>;

    return (
        <div>
            {dataBalanceRef.map((item, index) => ( // Use 'balances' to map over balance data
                <p key={index}> Balance: {item.bnk_balance} </p> // Added 'key' and assuming 'item.balance' is the balance
            ))}
        </div>
    );
}

export default BalanceAccount;
