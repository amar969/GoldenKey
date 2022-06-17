import React, { useState } from "react";
import { ethers } from "ethers";
import "./Ether.css";

export const Ehter = () => {
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });

  const btnhandler = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };

  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
    // Requesting balance method
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
          console.log(balance)
          console.log(address)
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
          address: ethers.utils.formatEther(address)
        });
      });
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });

    // Setting a balance
    getbalance(account);
  };

  return (
    <>
      <div className="balance-container">
        <p className="Adress">
          <strong>Address: </strong>
          {data.address}
        </p>
        <div>
          <h4>
            <strong>Balance: </strong>
            {data.Balance}
          </h4>
          <button onClick={btnhandler}>
            {data.Balance ? "Connected" : "Connect to Wallet"}
          </button>

        </div>
      </div>
    </>
  );
};
