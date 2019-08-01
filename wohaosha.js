Function.prototype.bind = function () {
    let _this = this
    let context = [...arguments].shift()
    console.log('context', context)
    let args = [...arguments].slice(0,1)
    return function () {
        _this.apply(context, args.concat([...arguments]))
    }
}


function Animal (name, age) {
    this.name = name
    this.age = age
}

Animal.prototype.sayName = function () {
	console.log('my name is',this.name, 'my age is', this.age)
}

var cat = Animal.bind(null, 'white')

