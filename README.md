# Eth_Example
 Ether ağına deoploy edile projeler içerir


# Projeyi çalıştırmak için yapılması gerekenler
> 1. `.env` adında bir dosya olusturun
>
> 2. `.env` nın içine girin ve kendinize özgü configlerinizi oluşturun
>  Örnek:
>     ``` js
>     ETH_RPC="infura gibi sitelerden alınan link"
>
>     ETH_PK1="private keyiniz"
>     ETH_K1="public keyiniz"
>     ETH_PK2="private keyiniz"
>     ETH_K1="public keyiniz"
>     ETH_PK3="private keyiniz"
>     ETH_K1="public keyiniz"
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
