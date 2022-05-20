const cpf_validator = require("./cpf_validator");
const cnpj_validator = require("./cnpj_validator");

module.exports = {
  cpf: cpf_validator,
  cnpj: cnpj_validator,
};
