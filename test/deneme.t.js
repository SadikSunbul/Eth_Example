const { ethers } = require("ethers");
//const { expect, use } = require('chai');
const denemejson = require('../artifacts/contracts/deneme.sol/Counter.json');

const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/dccevhLJFPNnx8RTzFX7283utYjh5Q35");

 // borc sıstemının Kontrat adresi
 const contractAddress = "0xD34F978487e1C709f4bd44179c58d148469aD9a7";


 // Ethereum hesabını belirleme (örneğin, özel anahtar kullanarak)
 //user1
 const privateKey = "de509b12d9eeb89d3675ee53aeea13aac9461c19a0a56d2cc64ea12d011179fe"; //hesap 2 nın 
 //user 2
//  const privateKey = "9586640efe726be605065408dee5cc1fbd56cc34df04ee6169ea773a617d5871"; //hesap 3 un 
 const wallet = new ethers.Wallet(privateKey, provider);


const contract = new ethers.Contract(contractAddress, denemejson.abi, wallet);



describe("Blochaınden Testler",function(){

    it("Counter artırırcı:",async function(){
        for(i=0;i<100;i++)
        {
            console.log("Deger:",BigInt(await contract.Oku()));
            await contract.CountArtir();
        }
    });

    it("Degeri oku:",async function(){
        console.log("Deger:",BigInt(await contract.Oku()));
    });
 
});