const isFetching: boolean = true
const isLoading: boolean = false

let int : number = 10 // Even if there is [ let ] => you can't change the value of the var to not number val

const array : number[] = [1, 2, 3, 4, 5] // SAME =>
const array1 : Array<number> = [1, 2, 3, 4, 5] // SAME <=
const arrayStr : string[] = ['Hello', 'TypeScript']

// = = = Tuple = = = //

const person : [string, number] = ['Ruslan', 12345]

// = = = Any = = = //

let anyValue: any = 42 // any => any type of value can be used

anyValue = 'String'
anyValue = []

// = = = = = = = = = = = //

function heisenberg(name: string): void { // function (): void => означает что функция ничего не вернет
	console.log(name)
}
heisenberg('Heisenberg')

// = = = Never = = = //

function throwError(message: string): never { // never => работает если функция покажет ошибку или будет бесконечный цикл
	throw new Error(message)
}

// function loop(): never {
// 	while (true) {
		
// 	}
// }

// = = = Type = = = //

type Login = string
type ID = string | number

const login: Login = '1234'
// const login1: Login = 1234

const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true

type SomeType = string | null | undefined 
