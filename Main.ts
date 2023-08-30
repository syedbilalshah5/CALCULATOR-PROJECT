import { add } from "./Addition.js";
import { sub } from "./Subtract.js";
import { multi } from "./Multiplication.js";
import { div } from "./Divide.js";
import inquirer from "inquirer";

const main = async () => {
    let ans = await inquirer.prompt([
        {
            message: "Enter First Number",
            type: "number",
            name: "fnumber"
        },
        {
            message: "Enter Second Number",
            type: "number",
            name: "snumber"
        },
        {
            message: "Select Your Operator",
            type: "list",
            choices: ["Addition", "Subtract", "Multiplication", "Divide"],
            name: "Operator"
        }
    ]);

    console.log("    ", ans.fnumber);
    console.log("    ", ans.snumber);
    console.log(" ", "========");

    if (ans.Operator === "Addition") {
        let result1 = add(ans.fnumber, ans.snumber);
        console.log("    ", result1);
    } else if (ans.Operator === "Subtract") {
        let result2 = sub(ans.fnumber, ans.snumber);
        console.log("    ", result2);
    } else if (ans.Operator === "Multiplication") {
        let result3 = multi(ans.fnumber, ans.snumber);
        console.log("    ", result3);
    } else if (ans.Operator === "Divide") {
        let result4 = div(ans.fnumber, ans.snumber);
        console.log("    ", result4);
    } else {
        console.log("Error");
    }

    console.log(" ", "========");
};

main();
