// export const getUrlQuery = (url = '', data = {}) => {
//   const hasQuery = data instanceof Object && Object.keys(data).length
//   return {
//     url: hasQuery ? `${url}?${obj2urlquery(data)}` : url
//   }
// }

// export const obj2urlquery = (params = {}) => {
//   if (Object.keys(params).length) {
//     return Object.keys(params)
//       .map(v => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
//       .join('&')
//   }
//   return ''
// }
export const monthDistance = (value1: string, value2?: string) => {
  if (!value1) {
    return 0
  }
  if (!value2) {
    let beginMonth = Number(value1.slice(0, 4)) * 12 + Number(value1.slice(4))
    let nowTime = new Date()
    let nowMonth = nowTime.getFullYear() * 12 + nowTime.getMonth()
    return nowMonth - beginMonth < 0 ? 0 : nowMonth - beginMonth
  } else {
    let beginMonth = Number(value1.slice(0, 4)) * 12 + Number(value1.slice(4))
    let endMonth = Number(value2.slice(0, 4)) * 12 + Number(value2.slice(4))
    return endMonth - beginMonth < 0 ? 0 : endMonth - beginMonth
  }
}
// 时间格式化
export const formatDate = (
  timestamp = new Date().valueOf(),
  fmt = 'yyyy-MM-dd hh:mm:ss'
) => {
  if (typeof timestamp === 'string') {
    timestamp = parseInt(timestamp, 10)
  }
  const date = new Date(timestamp)
  if (date.toString() === 'Invalid Date') {
    return 'Invalid Date'
  }
  const o: any = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }

  const week: any = {
    '0': '/u65e5',
    '1': '/u4e00',
    '2': '/u4e8c',
    '3': '/u4e09',
    '4': '/u56db',
    '5': '/u4e94',
    '6': '/u516d'
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1
        ? RegExp.$1.length > 2
          ? '/u661f/u671f'
          : '/u5468'
        : '') + week[date.getDay() + '']
    )
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt
}

// /**
//  * 深拷贝
//  */
// export const deepClone = obj => {
//   if (typeof obj !== 'object' || obj === null) {
//     return obj
//   }

//   if (Array.isArray(obj)) {
//     return obj.map(v => {
//       if (typeof v === 'object' && v !== null) {
//         return deepClone(v)
//       } else {
//         return v
//       }
//     })
//   } else {
//     const newObj = {}

//     Object.keys(obj).forEach(v => {
//       if (typeof obj[v] === 'object' && obj[v] !== null) {
//         newObj[v] = deepClone(obj[v])
//       } else {
//         newObj[v] = obj[v]
//       }
//     })

//     return newObj
//   }
// }

// /**
//  * 格式化字符串
//  * @param result 格式化字符串 eg：`user: {name}`
//  * @param args 格式化数据 eg： { name："123" }
//  */
// export const strFormat = (result = '', args = {}) => {
//   for (const key in args) {
//     const reg = new RegExp('({' + key + '})', 'g')
//     result = result.replace(reg, args[key])
//   }
//   return result
// }

// // 表单校验
// export const validForm = async (form, valider) => {
//   for (const k in valider) {
//     for (const i in valider[k]) {
//       const { toast: title, ...rule } = valider[k][i]
//       if (rule.validFun) {
//         if (!(await rule.validFun.call(form, form[k]))) {
//           if (title) {
//             getApp().wxApi.showToast({
//               title
//             })
//             return Promise.reject(false)
//           }
//         }
//       } else {
//         if (
//           typeof form[k] !== rule.type ||
//           (!!!form[k] && typeof form[k] === rule.type)
//         ) {
//           if (title) {
//             getApp().wxApi.showToast({
//               title
//             })
//             return Promise.reject(false)
//           }
//         }
//       }
//     }
//   }
//   return true
// }

// // 防抖
// export const debounce = (func, wait) => {
//   let timer
//   // need function
//   return function(args) {
//     if (timer) {
//       clearTimeout(timer)
//     }

//     timer = setTimeout(() => {
//       timer = null
//       func.call(this, args)
//     }, wait)
//   }
// }

// // 数据脱敏
// export const dataMask = (str, type) => {
//   let result
//   switch (type) {
//     case 'mobile':
//       result = str.substr(0, 3) + '****' + str.substr(7)
//       break
//     default:
//       break
//   }

//   return result
// }
