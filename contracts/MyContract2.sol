// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MyContract2 is Initializable {
    uint256 public constant myConstant = 50;
    uint256 private _myVariable;

    function initialize(uint256 initialValue) public initializer {
        _myVariable = initialValue;
    }

    function getMyVariable() public view returns (uint256) {
        return _myVariable;
    }

    function setMyVariable(uint256 newValue) public {
        _myVariable = newValue * 2; // 更改此函数的逻辑
    }
}