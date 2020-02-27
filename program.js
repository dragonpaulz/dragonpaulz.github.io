document.writeln('Hello, world!');

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
    };

var test = 4;

document.writeln(typeof(test))