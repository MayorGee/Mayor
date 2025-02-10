//SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Mayor is ERC20 {
    uint constant _initial_supply = 1000 * (10**18); // decimals = 18

    constructor() ERC20("Mayor", "MAYOR") {
        _mint(msg.sender, _initial_supply);
    }

}