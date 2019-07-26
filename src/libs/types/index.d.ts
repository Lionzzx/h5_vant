interface IStoreApi {
  findCompanyReportInfo(): any
  listCustomerCompany(): any
  listCompanyOrder(): any
  detailOrder(): any
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
  legworkList(config: {
    company_id: string
    page?: string
    pageSize?: string
  }): any
  companyServiceInfo(config: { companyId: string }): any
  sendMsg: Function
  msgDetail: Function
  msgList: Function
}
