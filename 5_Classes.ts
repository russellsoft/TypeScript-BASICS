class TypeScript {
	version: string

	constructor(version: string) {
		this.version = version
	}

	info(name: string) {
		return `[${name}]: TypeScript version is ${this.version}`
	}
}

class Car {
	readonly wheels: number = 4

	constructor(readonly model: string) {}
}

// ================================ //
// ========= МОДИФИКАТОРЫ ========= //
// ================================ //

class Animal {
	public color: string = 'black' // Usable anywhere
	protected name: string // Usable only in mother or daughter classes [ Animal & Cat ]
	private go() { console.log('Go') } // Usable only in mother class [ Animal ]
}

// const a = new Animal()
// a.go()

class Cat extends Animal {
	public setColor(color: string) {
		this.color = color
	}
}

const cat = new Cat()
cat.setColor('white')
// console.log(cat.color)

// ====================================== //
// ========= АБСТРАКТНЫЕ КЛАССЫ ========= //
// ====================================== //

abstract class Any {
	abstract render() : void
	abstract info() : string
}

// Abstract работает всего лишь для наследования

class Example extends Any {
	render(): void {}
	info(): string {
		return 'String'
	}
}