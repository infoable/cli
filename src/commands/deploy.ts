import { Command } from "@oclif/command";
import chalk from "chalk";
import { existsSync, readFileSync, mkdirSync, createWriteStream } from "fs";
import * as archiver from "archiver";
import client from "../client";

export default class Deploy extends Command {
  static description = "Deploy a project to Able API Server.";
  static examples = [" $ infoable deploy"];
  async run() {
    if (!existsSync("./able.json")) {
      this.log(chalk.red("Able API is not created"));
      this.log(
        "Create Able API project to run " + chalk.blue("infoable init [site]")
      );
      return;
    }
    const { site } = JSON.parse(readFileSync("./able.json").toString());
    if (!site) {
      this.log(chalk.red("Able API is not created"));
      this.log(
        "Create Able API project to run " + chalk.blue("infoable init [site]")
      );
      return;
    }

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
        "Deploying"
      )} Able API project for ${chalk.bgGreen(chalk.gray(`🌐   ${site}`))}`
    );
    this.log();
    this.log(
      `${chalk.cyan(
        "================================================================================="
      )}`
    );
    this.log("Compress a Able API Project...");

    if (!existsSync(".able")) {
      mkdirSync(".able");
    }
    const archive = archiver("zip");
    archive.directory("./", "");
    const stream = createWriteStream(".able/file.zip");

    archive.pipe(stream);
    await archive.finalize();

    this.log(chalk.bgGreen(chalk.black("Done!")));

    const zipBuffer = readFileSync(".able/file.zip").toString("base64");
    try {
      await client.post("/v1/api", {
        data: zipBuffer,
        site
      });
      this.log(chalk.green("Sending successfully."));
      return;
    } catch (e) {
      if (e.response) {
        this.log(
          chalk.red(`Error! ${e.response.status} ${e.response.data.message}`)
        );
      } else {
        this.log(chalk.red("An unknown error has occurred. Please try again."));
        this.log(e.stack);
      }
    }
  }
}
