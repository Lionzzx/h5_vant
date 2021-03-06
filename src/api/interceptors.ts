import { Toast } from 'vant'
import Router from '../router'
export default {
  // 状态码处理
  async errHandler(errcode: string | number, errmsg: string) {
    if (errcode == '40000') {
      return true
    } else if (errcode == '50003') {
      Toast('请重新登录')
      setTimeout(() => {
        Router.replace('/login')
      }, 800)
      return false
    } else if (errcode == '50000') {
      Toast(errmsg)
      return false
    }
  },

  requestHeaderHander({ req }: any) {
    req.header = Object.assign({}, req.header, {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    })
    return req
  },

  async responseHander(res: any) {
    const { data } = res
    if (!data) {
      Toast('网络异常')
      return Promise.reject(res)
    }
    if ('msgCode' in data) {
      const status = await this.errHandler(data.msgCode, data.msg)
      if (status) {
        return Promise.resolve(data.data)
      } else {
        return Promise.reject(data)
      }
    } else {
      const status = await this.errHandler(data.code || 0, data.error)
      if (status) {
        return Promise.resolve(data.data)
      } else {
        return Promise.reject(data)
      }
    }
  }
}
