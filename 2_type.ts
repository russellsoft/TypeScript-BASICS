interface Rect {
	readonly id: string, // readonly => non changable
	color?: string, // если переменная не обязательна к заполнению ставим после нее [ ? ]
	size: {
		width: number,
		height: number
	}
}

const rect: Rect = {
	id: '1234',
	size: {
		width: 10,
		height: 20
	},
	color: 'red' // Не обязателен
}

const rect1 = {} as Rect // const rect1: Rect = {} => Same
const rect2 = <Rect>{} // const rect1: Rect = {} => Same

// ============================================================================= //

interface RectWithFunction extends Rect{
	getArea: () => number // this is a function that takes only numbers
}

const cube: RectWithFunction = {
	id: '1111',
	size: {
		width: 20,
		height: 20
	},
	getArea()/* : number */ { // You can use only number (not necessary)
		return this.size.width * this.size.height
	}
}

// ============================================================================= //

interface IClock {
	time: Date 
	setTime(date: Date): void
}

class Clock implements IClock {
	time: Date = new Date()
	setTime(date: Date) {
		this.time = date
	}
}

// ============================================================================= //

interface Styles {
	[key: string]: string
}

const css: Styles = {
	border: '1px solid black',
	width: '10px',
	marginTop: '20px'
}