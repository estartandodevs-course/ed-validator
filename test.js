const cpf_validator = require("./cpf_validator");

const isCpfValid = cpf_validator("0000000000");

console.log("O CPF é válido? ", isCpfValid);
