    function baz() {
        console.log('baz');

        bar();
    }

    function bar() {
        console.log('bar');

        foo();
    }

    function foo() {
        console.log('foo');
    }

    // baz();

    // function foo2() {
    //     debugger;
    //     console.log(this.a);
    // }

    // var obj = {
    //     a: 12,
    //     foo: foo2,
    // };
    // obj.foo();

    // var obj2 = {
    //     a: 99,
    //     o: obj,
    // };

    // obj2.o.foo();


    // shortcoming: 会继承this的属性和原谅属性, this的属性不一定需要
    // function Person(name) {
    //     this.name = name || 'duian';
    // }
    // Person.prototype.say = function() {
    //     return 'hello' + this.name;
    // }

    // function Child() {}
    // function inherit(C, P) {
    //     C.prototype = new P();
    // }
    // inherit(Child, Person);

    // 使用apply显式调用
    // function Child() {
    //     var args = [].slice(arguments);
    //     Person.apply(this, args);
    // }
    // var c = new Child('xxx');

    // Person.prototype.cry = function() {
    //     return 'I am crying';
    // }


    // 借用和设置原型

    // console.log(c.name);

    function klass(parent, opts) {
        function inherit(C, P) {
            function F() {}
            F.prototype = P.prototype;
            C.prototype = new F();
            C.prototype.constructor = C;
        }
        if (parent) {
            inherit(A, parent);
        }

        function A() {
            opts.__construct.apply(this, arguments)
        }

        for( var k in opts) {
            if (k !== '__construct') {
                A.prototype[k] = opts[k];
            }
        }
        return A;
    }

