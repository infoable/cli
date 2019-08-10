import { Command, flags } from "@oclif/command";
import chalk from "chalk";

export default class Init extends Command {
  static description = "Init a Able API Project.";
  static examples = [`$ able init https://example.com`];
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
    const { args } = this.parse(Init);
    this.log("");
    this.log(
      `${chalk.cyan(
        "================================================================================="
      )}`
    );
    this.log();
    this.log(
      `        🚀   ${chalk.bgRed(
        "Initializing"
      )} Able API project for ${chalk.bgGreen(chalk.gray(`🌐  ${args.site} `))}`
    );
    this.log();
    this.log(
      `${chalk.cyan(
        "================================================================================="
      )}`
    );
    this.log();
    this.log(`${chalk.bgWhite(chalk.black("💺  Please Wait..."))} `);
  }
}
