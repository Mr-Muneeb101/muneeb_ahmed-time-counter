#!/usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
let Usertime = await inquirer.prompt([
    {
        name: "time",
        type: "number",
        message: "enter the seconds",
    }
]);
let time = Usertime.time;
function timer(val) {
    let currentTime = new Date().getSeconds();
    let TimeInterval = new Date().setSeconds(currentTime + val + 2);
    let FormatTime = new Date(TimeInterval);
    setInterval(() => {
        let newTime = new Date();
        let timeDifferece = differenceInSeconds(FormatTime, newTime);
        let minute = Math.floor(timeDifferece / 60);
        let seconds = Math.floor(timeDifferece % 60);
        console.clear();
        console.log(` \n\t\t\t${String(minute).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`);
        if (timeDifferece <= 0) {
            console.clear();
            console.log(`\n\t\t\t I love you sajni :)`);
            process.exit();
        }
    }, 1000);
}
timer(time);
