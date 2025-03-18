#!/usr/bin/env node

import { program } from "commander";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { replaceInFile } from "replace-in-file";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program
  .command("create <project-name>")
  .requiredOption("-p, --port <number>", "Porta do localhost > 4000")
  .action(async (projectName, options) => {
    await projectCreate(projectName, options.port);
  });

program.parse(process.argv);

async function projectCreate(projectName, port) {
  const projectPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(__dirname, "templates", "react");

  try {
    await fs.copy(templatePath, projectPath);

    await replaceInFile({
      files: [`${projectPath}/**/*`],
      from: /PROJECT_NAME/g,
      to: projectName,
    });

    await replaceInFile({
      files: `${projectPath}/**/*`,
      from: /PROJECT_PORT_NUMBER/g,
      to: port,
    });

    console.log(
      `Projeto ${projectName} criado em ${projectPath} na porta ${port}`
    );
  } catch (error) {
    console.error("Erro ao criar o projeto:", error);
  }
}
