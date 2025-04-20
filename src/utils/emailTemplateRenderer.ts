import ejs from "ejs";
import fs from "fs";
import path from "path";

export async function renderEmailTemplate(
  templateName: string,
  data: Record<string, any>,
): Promise<string> {
  const templatePath = path.join(
    __dirname,
    "../email-templates",
    `${templateName}.html`,
  );
  const template = fs.readFileSync(templatePath, "utf-8");
  return ejs.render(template, data);
}
