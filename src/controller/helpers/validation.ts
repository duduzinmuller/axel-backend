import { badRequest } from "./http.js";

import validator from "validator";

export const checkIfIdIsValid = (id: string) => validator.isUUID(id);

export const invalidIdResponse = (message: string) =>
  badRequest("Este ID e invalído.");

export const requiredFieldsIsMissingResponse = (field: any) =>
  badRequest(`O campo ${field} e obrigatório.`);
