var data = {
  frist_name: 'Super',
  last_name: 'Man',
  age: 19,
  username: 'duian',
};

validator.config = {
  frist_name: 'isNonEmpty',
  age: 'isNumber',
  username: 'isAlphaNum',
};

validator.validate(data);
if (validator.hasErrors()) {
  console.log(validator.message.join('\n'));
}

validator.types = {
  isNonEmpty = {
    validate(value) {
      return value !== "";
    },
    instructions: 'this value cannot be empty',
  },

  isNumber = {
    validate(value) {
      return !isNaN(value);
    },
    instructions: 'the value can only be a valid number',
  },
}

const validator = {
  // 所有可用的检查
  types = {},
  message: [],
  config: {},
  validate(data) {
    let i, msg, type, checker, result_ok;
    this.messages = [];
    for (i in data) {
      if (data.hasOwnProperty(i)) {
        type = config[i];
        checker = this.types[type];

        if (!type) {
          continue;
        }
        if (!checker) {
          throw {
            name: 'ValidatorError',
            message: 'No handler to validate type' + type,
          };
        }
        result_ok = check.validate(data[i]);
        if (!result_ok) {
          msg = `Invalid value for * ${i} *, ${checker.instructions}`;
          this.messages.push(msg);
        }
      }
      return this.hasErrors();
    }
  },
  hasErrors() {
    return this.messages.length !== 0;
  }
}
