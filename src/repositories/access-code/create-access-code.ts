import prisma from "../../../prisma/prisma";
import { AccessCode } from "../../types/access-code";

export class CreateAccessCodeRepository {
  async execute(accessCodeParams: AccessCode) {
    const accessCode = await prisma.accessCode.create({
      data: {
        code: accessCodeParams.code,
        plan: accessCodeParams.plan,
        used: accessCodeParams.used,
        expiresAt: accessCodeParams.expiresAt,
        createdAt: accessCodeParams.createdAt,
      },
    });

    return accessCode;
  }
}
