function strip(x: string | number) {
	if (typeof x === 'number')	{
		return x.toFixed()
	} return x.trim()
}

class myResponse {
	header = 'response header'
	result = 'response result'
}

class myError {
	header = 'error header'
	message = 'error message'
}

function handle(res: myResponse | myError) {
	if (res instanceof myResponse) {
		return {
			info: res.header + res.result
		} 
	} else {
		return {
			info: res.header + res.message
		}
	}
}

// ==================================================== //

type AlertType = 'warning' | 'danger' | 'success'

function successSign(type: AlertType) {}

successSign('warning')
successSign('danger')
// successSign('hello')
