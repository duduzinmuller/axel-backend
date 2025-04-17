import prisma from "../../../prisma/prisma";

export class CodeAsUsedRepository {
  async execute(code: string) {
    const codeasUsed = await prisma.accessCode.update({
      where: { code },
      data: { used: true },
    });

    return codeasUsed;
  }
}
