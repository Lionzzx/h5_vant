
/* eslint-disable */
import apiRoute from './config'
import {
	HttpService,
} from './http'
export class GatewayService extends HttpService {
	constructor(module: string) {
		super('/api');

		// @ts-ignore
		if (!apiRoute[module]) {
			console.warn(`${module} is not found in apiRoute`)
		} else {
			// @ts-ignore
			for (let key in apiRoute[module]) {
				// @ts-ignore
				if (!apiRoute[module][key]) { return console.warn(`${key} is not a string `) }
				// @ts-ignore
				this[key] = function (req: any) {
					// @ts-ignore
					// TODO可以在这里做各种权限判断
					let config = { url: apiRoute[module][key], }
					// @ts-ignore
					return key.indexOf('get') == 0 ? this.get(req, config) : this.post(req, config)
				}
			}
		}
	}
}
