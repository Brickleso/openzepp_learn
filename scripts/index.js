const { ethers } = require("hardhat");

// scripts/index.js
async function main () {
    // Our code will go here

    // Retrieve accounts from the local node
    const accounts = await ethers.provider.listAccounts();
    console.log(accounts);

    // Set up an ethers contract, representing our deployed Box instance
    const address = '0x70997970c51812dc3a010c7d01b50e0d17dc79c8';
    const Box = await ethers.getContractFactory('Box');
    const box = await Box.attach(address);

    // Call the retrieve() function of the deployed Box contract
    const value = await box.retrieve();
    console.log('Box value is', value.toString());
}

main()
    .then(() => process.exit(0))   
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
    
    
    