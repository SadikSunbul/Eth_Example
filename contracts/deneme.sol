// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract Counter {

    uint private Count;

    constructor() {
        Count=0;
    }

    function CountArtir() public 
    {
        Count++;
    }

    function Oku()public view returns(uint)
    {
        return Count;
    }
}