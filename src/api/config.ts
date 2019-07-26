export default {
  store: {
    // 根据公司id获取报表（现金流量，利润，资产负载表）
    findCompanyReportInfo: { url: '/store/findCompanyReportInfo', type: 'get' },
    // 获取当前登陆客户所拥有的企业
    listCustomerCompany: { url: '/store/customer/company/list', type: 'get' },
    // 根据企业Id获取服务中的工单
    listCompanyOrder: {
      url: '/store/customer/company/work/order/list',
      type: 'get'
    },
    detailOrder: {
      url: '/store/customer/company/work/order/detail',
      type: 'get'
    },
    login: {
      url: '/store/mobile/user/login',
      type: 'post'
    },
    sendMsg: {
      url: '/store/mobile/user/sendMsg',
      type: 'post'
    },
    // 获取公司项目进度
    showCompanyProgressInfo: {
      url: '/store/customer/company/showCompanyProgressInfo',
      type: 'post'
    },
    // 服务中的工单查询
    serviceList: {
      url: '/store/customer/work/order/service/list',
      type: 'get'
    },
    // 查询月利润资金
    accountReport: {
      url: '/store/customer/company/account/report',
      type: 'get'
    },
    userDetail: {
      url: '/store/customer/user/detail',
      type: 'get'
    },

    fileDetail: {
      url: '/store/customer/information/file/detail',
      type: 'get'
    },

    billList: {
      url: '/store/customer/information/bill/list',
      type: 'get'
    },
    invoiceList: {
      url: '/store/customer/information/invoice/list',
      type: 'get'
    },
    legworkList: {
      url: '/store/customer/information/legwork/list',
      type: 'get'
    },
    companyServiceInfo: {
      url: '/store/customer/company/companyServiceInfo',
      type: 'get'
    },
    msgDetail: {
      url: '/store/customer/information/wechat/msg/detail',
      type: 'get'
    },
    msgList: {
      url: '/store/customer/information/wechat/msg/list',
      type: 'get'
    }
  }
}
