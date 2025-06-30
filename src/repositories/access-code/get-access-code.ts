import prisma from "../../../prisma/prisma";

export class GetAccessCodeRepository {
  async execute() {
    const accessCodes = await prisma.accessCode.findMany();
    return accessCodes;
  }
}
