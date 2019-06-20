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
        this[key] = async function(req: any) {
          try {
            // @ts-ignore
            let config = { url: apiRoute[module][key] }
            let res =
              key.indexOf('get') == 0
                ? await this.get(req, config)
                : await this.post(req, config)
            return [null, res]
          } catch (error) {
            return [error, null]
          }
        }
      }
    }
  }
}
