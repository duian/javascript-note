var Validator = /** @class */ (function () {
    function Validator() {
        this.messages = [];
        this.types = {};
        this.config = {};
    }
    Validator.prototype.validate = function (data) {
        this.messages = [];
        for (var i in data) {
            if (data.hasOwnProperty) {
            }
            var type = this.config[i];
            var checker = this.types[type];
            if (type) {
                if (!checker) {
                    throw {
                        name: 'ValidatorError',
                        message: "No handler to validate type " + type,
                    };
                }
                var result_ok = checker.validate(data[i]);
                if (!result_ok) {
                    var msg = "Invalid value for * " + i + " * " + checker.instructor + " ";
                    this.messages.push(msg);
                }
            }
        }
        return this.hasErrors();
    };
    Validator.prototype.hasErrors = function () {
        return this.messages.length !== 0;
    };
    return Validator;
}());
