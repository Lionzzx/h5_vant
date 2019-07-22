/* eslint-disable */
import apiRoute from './config'
import { HttpService } from './http'

export class GatewayService extends HttpService {
  constructor(module: string) {
    super('/api')

    // @ts-ignore
    if (!apiRoute[module]) {
      console.warn(`${module} is not found in apiRoute`)
    } else {
      // @ts-ignore
      for (let key in apiRoute[module]) {
        // @ts-ignore
        if (!apiRoute[module][key]) {
          // @ts-ignore
          return console.warn(`${key} is not a string `)
        }
        // @ts-ignore
        this[key] = function(req: any, loading? = false) {
          // @ts-ignore
          let config = { ...apiRoute[module][key], loading }
          // @ts-ignore
          return apiRoute[module][key].type == 'get'
            ? this.get(req, config)
            : this.post(req, config)
        }
      }
    }
  }
}

export const storeApi: any = new GatewayService('store')
