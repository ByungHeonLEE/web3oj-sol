const { ethers } = require("hardhat");
const hre = require("hardhat");

async function calculatorSol(){
    const [myAccount] = await ethers.getSigners();

    const MyMinusCalculator = await ethers.getContractFactory("MyMinusCalculator");
    const myMinusCalculator = await MyMinusCalculator.connect(myAccount).deploy();
    await myMinusCalculator.deployed();

    const instance = "0xb7c6b3D5Cf59CD5f17719EeD00E61F02434fC8B3";
    const MinusCalculatorProblem = await ethers.getContractFactory("MinusCalculatorProblem");
    const minusCalculatorProblem = MinusCalculatorProblem.attach(instance);
    minusCalculatorProblem.connect(myAccount).setMinusCalculator(myMinusCalculator.address);
}

async function main() {
    calculatorSol();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});