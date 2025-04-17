import prisma from "../../../prisma/prisma";

export class ValidateAccessCodeRepository {
  async execute(code: string) {
    const accessCode = await prisma.accessCode.findUnique({
      where: { code },
    });

    return accessCode;
  }
}
