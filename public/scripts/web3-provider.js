// web3-provider.js
import Web3 from "web3";

window.ethereum = undefined;
if (typeof window.ethereum !== "undefined") {
  window.web3 = new Web3(window.ethereum);
  try {
    // Request account access if needed
    await window.ethereum.enable();
  } catch (error) {
    console.error("User denied account access");
  }
}
// Legacy dapp browsers...
else if (typeof window.web3 !== "undefined") {
  window.web3 = new Web3(window.web3.currentProvider);
}
// Non-dapp browsers...
else {
  console.log(
    "Non-Ethereum browser detected. You should consider trying MetaMask!",
  );
}

// main.js
// import './web3-provider.js';

// rest of your code here...
