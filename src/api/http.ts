import axios from 'axios'
import { AppModule } from '@/store/modules/app'
import delegate from './interceptors'
const rqHttp = axios.create({
  timeout: 30000
})

export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

interface AxiosRequestConfig {
  url?: string
  method?: Method
  baseURL?: string
  headers?: any
  params?: any
  data?: any
  timeout?: number
}

export class BaseService {
  host: string = ''
  uriPrefix: string = ''

  constructor(host: string, uriPrefix: string) {
    this.host = host
    this.uriPrefix = uriPrefix
  }

  getUri(uri: string = '') {
    if (uri && uri.match(/^http/)) {
      return uri
    } else {
      if (this.uriPrefix) {
        return uri.indexOf('/') === 0
          ? this.host + this.uriPrefix + uri
          : this.host + this.uriPrefix + '/' + uri
      } else {
        return uri.indexOf('/') === 0 ? this.host + uri : this.host + '/' + uri
      }
    }
  }

  request(req: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      rqHttp(req)
        .then((res: any) => {
          const { statusCode } = res as any
          if (statusCode >= 200 && statusCode <= 300) {
            return resolve(res)
          } else {
            return reject(res)
          }
        })
        .catch((err: any) => {
          return reject(err)
        })
    })
  }
}

export class HttpService extends BaseService {
  constructor(uriPrefix: string) {
    super('', uriPrefix)
  }

  post(data = {}, config: any) {
    const req = {
      url: this.getUri(config.url),
      method: 'POST',
      data
    }
    return this.requestProxy({
      req,
      config
    })
  }

  get(params = {}, config: any) {
    const req = {
      url: this.getUri(config.url),
      method: 'GET',
      params
    }

    return this.requestProxy({
      req,
      config
    })
  }

  async requestProxy({ req = {}, config = { loading: false } }) {
    let res
    // 请求头处理
    // TODO 这里可以对config做处理
    req = delegate.requestHeaderHander({
      req,
      config
    })
    console.log()
    try {
      if (config.loading) {
        AppModule.OPENLOADING()
      }

      res = await this.request(req)
    } catch (e) {
      res = e
    } finally {
      if (config.loading) {
        AppModule.CLOSELOADING()
      }
    }
    res = await delegate.responseHander(res)
    return res
  }
}
