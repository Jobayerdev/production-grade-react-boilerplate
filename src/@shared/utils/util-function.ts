// import { IBaseFilter } from "@shared/interfaces"

//base filter query utils
export const concatFilterQuery = (options: any): string => {
	let result: string[] = []
	if (options.searchTerm) {
		result.push(`searchTerm=${options.searchTerm}`)
	}
	if (options.name) {
		result.push(`name=${options.name}`)
	}
	if (options.page) {
		result.push(`page=${options.page}`)
	}
	if (options.take) {
		result.push(`take=${options.take}`)
	}
	if (options.between) {
		result.push(`between=${options.between}`)
	}
	if (options.before) {
		result.push(`before=${options.before}`)
	}
	if (options.between) {
		result.push(`between=${options.between}`)
	}
	if (options.after) {
		result.push(`after=${options.after}`)
	}
	if (options.fetchAll) {
		result.push(`fetchAll=${options.fetchAll}`)
	}
	if (options.single) {
		result.push(`single=${options.single}`)
	}
	if (options.relations) {
		result.push(`relations=${JSON.stringify(options.relations)}`)
	}
	if (options.selects) {
		result.push(`selects=${options.selects}`)
	}
	if (options.user) {
		result.push(`user=${options.user}`)
	}
	if (options.code) {
		result.push(`code=${options.code}`)
	}
	return result.join("&")
}

const storagePrefix = "jd_react_"

export const storage = {
	getToken: (): string | false => {
		if (!window.localStorage || !window.JSON) {
			return false
		}
		var item = localStorage.getItem(`${storagePrefix}token`)

		if (!item) {
			return false
		}

		return JSON.parse(item) as string
	},

	setToken: (token: string) => {
		window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token))
	},

	clear: () => {
		localStorage.clear()
	},

	setData(data: any, key: string) {
		if (!window.localStorage || !window.JSON || !key) {
			return
		}
		localStorage.setItem(key, JSON.stringify(data))
	},

	getDate(key: string) {
		if (!window.localStorage || !window.JSON || !key) {
			return
		}
		var item = localStorage.getItem(key)

		if (!item) {
			return
		}

		return JSON.parse(item)
	},

	removeData(key: string) {
		if (!window.localStorage || !window.JSON || !key) {
			return
		}
		localStorage.removeItem(key)
	},
}
export const methodSuccessMessage = (
	method: "POST" | "PUT" | "DELETE" | string
): string => {
	switch (method.toUpperCase()) {
		case "POST":
			return "Created Success"
		case "PUT":
			return "Update Success"
		case "DELETE":
			return "Delete Success"
		default:
			return ""
	}
}
