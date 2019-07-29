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
    workOrderList: {
      url: '/store/customer/work/order/list',
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
    createComplaint: {
      url: '/store/customer/complaint/create',
      type: 'post'
    },
    // 根据工单ID获取工单流程
    orderDetail: {
      url: '/store/customer/company/work/order/detail',
      type: 'get'
    },

    invoiceList: {
      url: '/store/customer/information/invoice/list',
      type: 'get'
    },

    companyServiceInfo: {
      url: '/store/customer/company/companyServiceInfo',
      type: 'get'
    },
    createEvaluate: {
      url: '/store/customer/work/evaluate/create',
      type: 'post'
    },
    askHelp: {
      url: '/store/customer/ask/help',
      type: 'post'
    },

    // 通过企业ID查询比目镜详情
    bmjDetail: {
      url: '/store/customer/company/bmj/detail',
      type: 'get'
    },
    bmjList: {
      url: '/store/customer/company/bmj/list',
      type: 'get'
    },

    // **客户信息查询**
    // 客户文件详情查询
    fileDetail: {
      url: '/store/customer/information/file/detail',
      type: 'get'
    },
    // 客户企业票据详情查询
    billList: {
      url: '/store/customer/information/bill/list',
      type: 'get'
    },
    // 客户外勤查询
    legworkList: {
      url: '/store/customer/information/legwork/list',
      type: 'get'
    },
    // 查询客户微信消息详情
    msgDetail: {
      url: '/store/customer/information/wechat/msg/detail',
      type: 'get'
    },
    // 查询客户消息列表
    msgList: {
      url: '/store/customer/information/wechat/msg/list',
      type: 'get'
    },
    // **客户资料**
    // 客户处理请求
    requestDispose: {
      url: '/store/customer/file/connect/request/dispose',
      type: 'get'
    },
    // 客户处理请求
    requestDetail: {
      url: '/store/customer/file/connect/request/detail',
      type: 'get'
    },
    // 客户查询自己的资料列表
    customerFileList: {
      url: '/store/customer/file/list',
      type: 'get'
    },
    // 客户查看客户资料交接请求(只看出库)
    requestList: {
      url: '/store/customer/file/connect/request/list',
      type: 'get'
    }
  }
}
