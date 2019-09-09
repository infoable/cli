import { Command, flags } from "@oclif/command";
import chalk from "chalk";
import { writeTemplate, makeDirectory } from "../template";
import { execSync } from "child_process";
import * as inquirer from "inquirer";
import { setPM, pmCommand } from "../pm";
import { existsSync } from "fs";

export default class Init extends Command {
  static description = "Init an Able API Project.";
  static examples = [`$ infoable init https://example.com`];
  static flags = {
    help: flags.help({ char: "h" })
  };
  static args = [
    {
      name: "site",
      required: true,
      description: "The site to be targeted for running this API."
    }
  ];
  async run() {
    if (existsSync("./able.json")) {
      this.log(chalk.red("The project has already been created."));
      return;
    }
    const {
      args: { site }
    } = this.parse(Init);
    this.log("");
    this.log(
      `${chalk.cyan(
        "================================================================================="
      )}`
    );

    this.log();
    this.log(
      chalk.magenta(
        `
                        #    ######  #       ####### 
                        # #   #     # #       #       
                      #   #  #     # #       #       
                      #     # ######  #       #####   
                      ####### #     # #       #       
                      #     # #     # #       #       
                      #     # ######  ####### #######     
        `
      )
    );
    this.log(
      `        🚀   ${chalk.bgRed(
        "Initializing"
      )} Able API project for ${chalk.bgGreen(chalk.gray(`🌐  ${site} `))}`
    );
    this.log();
    this.log(
      `${chalk.cyan(
        "================================================================================="
      )}`
    );
    const { pm } = await inquirer.prompt([
      {
        name: "pm",
        message: "select a package manager",
        type: "list",
        choices: [{ name: "npm" }, { name: "yarn" }]
      }
    ]);
    setPM(pm);
    execSync(
      pmCommand({
        yarn: "yarn init -y",
        npm: "npm init -y"
      }),
      {
        stdio: "inherit"
      }
    );
    execSync(
      pmCommand({
        yarn: "yarn add @infoable/core",
        npm: "npm install --save @infoable/core"
      }),
      {
        stdio: "inherit"
      }
    );

    writeTemplate("able.json", "./able.json", { site });

    const { useTypescript } = await inquirer.prompt({
      name: "useTypescript",
      message: "Use Typescript?",
      type: "confirm"
    });

    if (useTypescript) {
      makeDirectory("./src");
      writeTemplate("typescript/src/index.ts", "./src/index.ts", {});
      writeTemplate("typescript/tsconfig.json", "./tsconfig.json", {});
    } else {
      writeTemplate("javascript/index.js", "./index.js", {});
    }
    writeTemplate(".gitignore", "./.gitignore", {});
    this.log("Done!");
    this.log(
      `You can deploy an able project to "${chalk.blue("infoable deploy")}".`
    );
  }
}
