function cpf_validator(cpf) {
  if (cpf.length === 11) {
    return true;
  }

  return false;
}

module.exports = cpf_validator;
