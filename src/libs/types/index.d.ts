interface IStoreApi {
  findCompanyReportInfo(): any
  listCustomerCompany(): any
  listCompanyOrder(): any
  detailOrder(config: { workOrderId: string }): any
  login(): any
  showCompanyProgressInfo(): any
  serviceList: Function
  accountReport(): any
  userDetail(): any
  fileList(config: {
    page?: string | number
    pageSize?: string
    file_status?: string
    un_file_status?: string
    company_id?: string
  }): { total: string; rows: any[] }
  fileDetail(config?: any, loading?: boolean): any
  billList(config: { companyId: string }, loadng?: boolean): any
  invoiceList(
    config: { companyId: string; type?: string },
    loading?: boolean
  ): any
  legworkList(
    config: {
      company_id: string
      page?: string
      pageSize?: string
    },
    loadng?: boolean
  ): any
  companyServiceInfo(config: { companyId: string }): any
  sendMsg(config: { mobile: string }, loading?: boolean): any
  msgDetail(config: { id: string }, loading?: boolean): any
  msgList(config: { page: number; pageSize: number }, loading?: boolean): any
  requestDispose(
    config: { connectRequestId: string; status: string },
    loading?: boolean
  ): any
  requestDetail(config: { connectRequestId: string }, loading?: boolean): any
  customerFileList(config?: any, loading?: boolean): any
  bmjDetail(config: { companyId: string }, loading?: boolean): any
  bmjList(config: string, loading?: boolean): any
  askHelp(config: { companyId: string }, loading?: boolean): any
  createComplaint(
    config: { workOrderId: string; record: string },
    loading?: boolean
  ): any
  workOrderList(
    config: { type: string; page: number; pageSize: number },
    loading?: boolean
  ): any
  createEvaluate(
    config: {
      customerMemo: string
      serviceRanks: string
      attitudeRanks: string
      abilityRanks: string
      type: string
      workId: string
    },
    loading?: boolean
  ): any
}
