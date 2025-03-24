#!/usr/bin/env node

import {Command} from "commander";
import inquirer from "inquirer";
import fs from "fs";

const program = new Command();

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter course title",
  },
  {
    type: "number",
    name: "price",
    message: "Enter course price",
  },
];

const filePath = "./courses.json";

program
  .name("to-courses-manger")
  .description("CLI for managing TO courses")
  .version("1.0.0");

program
  .command("add")
  .alias("a")
  .description("Add a new course")
  .action(() => {
    inquirer
      .prompt(questions)
      .then((answers) => {
        // console.log(answers);

        if (fs.existsSync(filePath)) {
          fs.readFile(filePath, "utf8", (err, fileContent) => {
            if (err) {
              console.error("Error:", err);
              process.exit();
            }

            if (!fileContent) {
              fs.writeFileSync(
                filePath,
                JSON.stringify([answers]),
                "utf8",
                () => {
                  console.log("Course added successfully");
                }
              );
            } else {
              const courses = JSON.parse(fileContent);
              courses.push(answers);                         // Size up the array 
              fs.writeFileSync(
                filePath,
                JSON.stringify(courses),
                "utf8",
                () => {
                  console.log("Course added successfully");
                }
              );
              console.log("File Content -> ", courses);
            }
          });
        } else {
          fs.writeFileSync(filePath, JSON.stringify([answers]), "utf8", () => {
            console.log("Course added successfully");
          });
        }
      })
      .catch((error) => {
        console.error("error", error);
      });
  });

program
  .command("list")
  .alias("l")
  .description("List all courses")
  .action(() => {
    if (fs.existsSync(filePath)) {
      fs.readFile(filePath, "utf8", (err, fileContent) => {
        if (err) {
          console.error("Error:", err);
          process.exit();
        }

        if (!fileContent) {
          console.log("No courses found");
        } else {
          const courses = JSON.parse(fileContent);
          console.table(courses);
        }
      });
    }
  });

program.parse(process.argv);

