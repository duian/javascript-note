"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event = /** @class */ (function () {
    function Event() {
        this.events = {};
    }
    Event.prototype.on = function (type, fn) {
        if (this.events[type]) {
            return this.events[type].push(fn);
        }
        this.events[type] = [];
        this.events[type].push(fn);
    };
    Event.prototype.one = function (type, fn) {
        this.on(type, function on() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this.off(type, on);
            fn.apply(this, args);
        });
    };
    Event.prototype.off = function (type, fn) {
        var events = this.events[type];
        if (events) {
            if (fn) {
                var len = events.length;
                for (var i = 0; i < len; i++) {
                    if (events[i] === fn) {
                        events.splice(i, 1);
                    }
                }
            }
            else {
                this.events[type] = [];
            }
        }
    };
    Event.prototype.emit = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var events = this.events[type];
        var len = events.length;
        for (var i = 0; i < len; i++) {
            events[i].apply(this, args);
        }
    };
    return Event;
}());
exports.default = Event;

var e = Object.create(Event.prototype);
e.events = [];
