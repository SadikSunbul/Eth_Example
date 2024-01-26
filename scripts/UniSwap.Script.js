const { ethers } = require('hardhat');

async function main() {
    const [deployer] = await ethers.getSigners();

    const Lock = await ethers.getContractFactory("Exchange");
    const lock = await Lock.deploy("0x0C61f51CA026a95aA7e7c0aC4C14d3E816FB7A01");

    
    await lock.deployed();

    console.log("OySistemi Contract address:", lock.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
