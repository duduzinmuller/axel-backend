import { badRequest } from "./http.js";

import validator from "validator";

export const checkIfIdIsValid = (id: string) => validator.isUUID(id);

export const invalidIdResponse = (message: string) =>
  badRequest("Este ID e invalído.");

export const requiredFieldsIsMissingResponse = (field: string) =>
  badRequest(`O campo ${field} e obrigatório.`);
