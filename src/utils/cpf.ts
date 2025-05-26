export const removeCpfPunctuation = (cpf: string) => {
  return cpf.replace(/[\.\-]/g, "");
};

export const isValidCpf = (cpf: string): boolean => {
  cpf = cpf.replace(/\D/g, "");

  if (cpf.length != 11) {
    return false;
  }

  if (/^(\d)\1+$/.test(cpf)) {
    return false;
  }

  let sun = 0;
  for (let i = 0; i < 9; i++) {
    sun += parseInt(cpf[i]) * (10 - i);
  }

  let firstVerifier = (sun * 10) % 11;
  firstVerifier = firstVerifier === 10 ? 0 : firstVerifier;

  if (firstVerifier != parseInt(cpf.charAt(9))) {
    return false;
  }

  sun = 0;
  for (let i = 0; i < 10; i++) {
    sun += parseInt(cpf.charAt(i)) * (11 - i);
  }

  let secondVerifier = (sun * 10) % 11;
  secondVerifier = secondVerifier === 10 ? 0 : secondVerifier;

  return secondVerifier === parseInt(cpf.charAt(10));
};
