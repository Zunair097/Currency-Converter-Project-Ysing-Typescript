#! usr/bin/env node
import inquirer from "inquirer";
console.log("\n \t \t Welcome To The Pakistan International Currency Exchange-Currency Converter \t \n");
// Defining The List Of Currencies And Thier Exchange Rates
let exchange_rate = {
    "USD": 1,
    "EUR": 0.93,
    "JPY": 158.10,
    "CAD": 1.37,
    "AUD": 1.53,
    "PKR": 279.09, // Pakistani Rupees
};
// Promt The User To Select Currencies To Convert From And To:
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select The Currency To Convert From :",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select The Currency You Want To Convert Into: ",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: "Enter The Amount To Convert: ",
    }
]);
// Performing Currency Conversion By Using Formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula Of Conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display The Correct Amount
console.log(`Converted Amount = ${converted_amount}`);
