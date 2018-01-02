
interface ValidatorInterface {
  messages: string[];
  types: any;
  config: {[key: string]: string};
  validate: (data: { [key:string]: any }) => boolean;
  hasErrors: () => boolean;
}

class Validator implements ValidatorInterface {
  config: {};
  types: {};
  messages: string[];

  constructor() {
    this.messages = [];
    this.types = {};
    this.config = {};

  }
  validate(data) {
    this.messages = [];
    for (let i in data) {
      if (data.hasOwnProperty) {

      }
      const type = this.config[i];
      const checker = this.types[type];
      if (type) {
        if (!checker) {
          throw {
            name: 'ValidatorError',
            message: `No handler to validate type ${type}`,
          };
        }
        let result_ok = checker.validate(data[i]);
        if (!result_ok) {
          const msg = `Invalid value for * ${i} * ${checker.instructor} `;
          this.messages.push(msg);
        }
      }
    }
    return this.hasErrors();
  }

  hasErrors(): boolean {
    return this.messages.length !== 0;
  }
}
