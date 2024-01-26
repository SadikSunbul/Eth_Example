# Eth_Example
 Ether ağına deoploy edile projeler içerir


# Projeyi çalıştırmak için yapılması gerekenler
> 1. hardhat.config.js adında bir dosya olusturun
>
> 2. hardhat.config.js nın içine girin ve kendinize özgü configlerinizi oluşturun
>  Örnek:
>     ``` js
>     require("@nomiclabs/hardhat-waffle");
>
>      const PRIVATE_KEY = "Kendi private key inizi giriniz";
>      
>      
>      module.exports = {
>          solidity: "0.8.2",
>          networks: {
>            mainnet: {
>              url: `https://api.avax.network/ext/bc/C/rpc`,
>                accounts: [`${PRIVATE_KEY}`]
>            },
>            eth: {
>              url: `ornek infuradan bu linki ala bilirsiniz`,
>                accounts: [`${PRIVATE_KEY}`]
>            }
>          }
>      };
>
> 3. Projedeki leri deoploy etme
> Örnek:
>    ```bash
>    npx hardhat run <deploy-scrpit-path>
>
>    npx hardhat run <deploy-scrpit-path> --network <network-name>
>
>    npx hardhat run scripts/deploy.js --network fuji
>
> 4. Projedekileri test etme
> Örnek:
>    ```bash
>    npx hardhat test
>    npx hardhat test test/deneme.t.js          
