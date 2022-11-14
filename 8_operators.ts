interface Person {
	name: string
	age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

type User = {
	name: string
	isWorking: boolean
	age: number
	_id: string
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'name'> // 'age' | 'isWorking' // Exclude - удаляет ключи
type UserKeysNoMeta2 = Pick<User, 'name' | 'age'> // 'age' | 'name' // Pick - принимает ключи