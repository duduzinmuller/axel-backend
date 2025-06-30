import prisma from "../../../prisma/prisma";
import { AccessCode } from "../../types/access-code";

export class GetAccessCodeRepository {
  async execute(accessCodeParams: Partial<AccessCode>) {
    const accessCodes = await prisma.accessCode.findMany({
      where: accessCodeParams,
    });
    return accessCodes;
  }
}
