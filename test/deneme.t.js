const { ethers } = require("ethers");
//const { expect, use } = require('chai');
const denemejson = require('../artifacts/contracts/deneme.sol/Counter.json');

const provider = new ethers.providers.JsonRpcProvider("Kendi bağlantı adresiniz");

 // borc sıstemının Kontrat adresi
 const contractAddress = "0xD34F978487e1C709f4bd44179c58d148469aD9a7";


 // Ethereum hesabını belirleme (örneğin, özel anahtar kullanarak)
 //user1
 const privateKey = "Kendi private keyiniz"; //hesap 2 nın 

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