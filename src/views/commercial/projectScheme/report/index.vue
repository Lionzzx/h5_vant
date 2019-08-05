<template>
  <div class="main">
    <div v-html="text" style="padding:15px"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import userStore from '@/store/modules/user';
@Component({})
export default class MyProcess extends Vue {
  private loading: boolean = true;
  private detail: any = {};
  private rongyuHtml: string = '';
  private shenbaoHtml: string = '';
  private text: string = '';

  async getReport() {
    const { companyname, name, tel } = this.$route.params;
    try {
      this.detail = await this.$storeApi.chenkBmjCompanyMsg(
        { companyname, name, tel, userid: localStorage.getItem('customerId') || '' },
        true
      );
      if (this.detail.companyMsg) {
        this.detail.companyMsg.push({
          companyname: '无',
          capitalctbdb: '无',
          companycreateDate: '无',
          registerOffice: '无'
        });
      }
      this.rongyu_text2html();
      this.shenbao_text2html();
      this.generate_report();
    } catch (error) {}
  }
  generate_report() {
    let temp = `<!DOCTYPE html>
            <html>
                <head>
                </head>
                <body>
                    <h3 style="text-align: center;"><strong>${this.$route.params.companyname}项目规划</strong></h3>
                    <h3><strong>一、企业情况</strong></h3>
                    <p style="text-align: center;">公司主营业务：</p>
                    <table style="margin-left: auto; margin-right: auto;border-spacing:0px;font-size:14px;text-align: center;">
                        <tbody>
                            <tr>
                                <td width="137" style="border-width: 1px; border-style: solid;">
                                    <p style="text-align: center;">企业名称</p>
                                </td>
                                <td style="text-align: center;border-width: 1px; border-style: solid;" width="138">
                                    <p>注册资本</p>
                                </td>
                                <td style="text-align: center;border-width: 1px; border-style: solid;" width="162">
                                    <p>注册时间</p>
                                </td>
                                <td width="138" style="border-width: 1px; border-style: solid;">
                                    <p style="text-align: center;">地址所属区</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="137" style="border-width: 1px; border-style: solid;">
                                    <p>${this.detail.companyMsg[0].companyname}</p>
                                </td>
                                <td width="138" style="border-width: 1px; border-style: solid;">
                                    <p>${this.detail.companyMsg[0].capitalctbdb}</p>
                                </td>
                                <td width="162" style="border-width: 1px; border-style: solid;">
                                    <p>${this.detail.companyMsg[0].companycreateDate}</p>
                                </td>
                                <td width="138" style="border-width: 1px; border-style: solid;">
                                    <p>${this.detail.companyMsg[0].registerOffice}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>&nbsp;</p>
                    <h3><strong>二、</strong><strong>企业</strong><strong>知产状况与规划</strong></h3>
                    <table style="margin-left: auto; margin-right: auto;border-spacing:0px;font-size:14px;text-align: center;">
                        <tbody>
                            <tr>
                                <td colspan="2" width="574" style="border-width: 1px; border-style: solid;">
                                    <p style="text-align: center;">现有知识产权及软著</p>
                                </td>
                            </tr>
                            <tr style="text-align: center;">
                                <td width="260" style="border-width: 1px; border-style: solid;">
                                    <p>类型</p>
                                </td>
                                <td width="314" style="border-width: 1px; border-style: solid;">
                                    <p>数量</p>
                                </td>
                            </tr>
                            <tr style="text-align: center;">
                                <td width="260" style="border-width: 1px; border-style: solid;">
                                    <p>外观新型</p>
                                </td>
                                <td width="314" style="border-width: 1px; border-style: solid;">
                                    <p>${this.detail.ruanZhu[0].wgnum}</p>
                                </td>
                            </tr>
                            <tr style="text-align: center;">
                                <td width="260" style="border-width: 1px; border-style: solid;">
                                    <p>实用专利</p>
                                </td>
                                <td width="314" style="border-width: 1px; border-style: solid;">
                                    <p>${this.detail.ruanZhu[0].synum}</p>
                                </td>
                            </tr>
                            <tr style="text-align: center;">
                                <td width="260" style="border-width: 1px; border-style: solid;">
                                    <p>发明专利</p>
                                </td>
                                <td width="314" style="border-width: 1px; border-style: solid;">
                                    <p>${this.detail.ruanZhu[0].fmnum}</p>
                                </td>
                            </tr>
                            <tr style="text-align: center;">
                                <td width="260" style="border-width: 1px; border-style: solid;">
                                    <p>软著</p>
                                </td>
                                <td width="314" style="border-width: 1px; border-style: solid;">
                                    <p>${this.detail.ruanZhu[0].rznum}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p style="text-align: center;"><strong>&nbsp;</strong></p>
                    <table style="margin-left: auto; margin-right: auto;border-spacing:0px;font-size:14px;text-align: center;">
                        <tbody>
                            <tr>
                                <td colspan="2" width="574" style="border-width: 1px; border-style: solid;">
                                    <p style="text-align: center;">荣誉</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: center;border-width: 1px; border-style: solid;" width="260">
                                    <p>申报内容</p>
                                </td>
                                <td style="text-align: center;border-width: 1px; border-style: solid;" width="314">
                                    <p>申报时间</p>
                                </td>
                            </tr>
                            ${this.rongyuHtml}
                        </tbody>
                    </table>
                    <h3><strong>三、</strong><strong>科技项目规划</strong></h3>
                    <table style="margin-left: auto; margin-right: auto;border-spacing:0px;font-size:14px;text-align: center;">
                        <tbody>
                            <tr>
                                <td style="text-align: center;border-width: 1px; border-style: solid;" width="58">
                                    <p>序号</p>
                                </td>
                                <td style="text-align: center;border-width: 1px; border-style: solid;" width="143">
                                    <p>项目名称</p>
                                </td>
                                <td style="text-align: center;border-width: 1px; border-style: solid;" width="239">
                                    <p>优惠补贴</p>
                                </td>
                                <td style="text-align: center;border-width: 1px; border-style: solid;" width="136">
                                    <p style="text-align: center;">预计申报时间</p>
                                </td>
                            </tr>
                            ${this.shenbaoHtml}
                        </tbody>
                    </table>
                    <p style="text-align: center;"><strong>&nbsp;</strong></p>
                    <h3 style="text-align: left;"><strong>四、亿账柜优势</strong></h3>
                    <p style="text-align: left;text-indent: 32px;line-height:2em;font-size:14px;">1、税政解读（平台提供实时最新科技政策，并提供解读）；</p>
                    <p style="text-align: left;text-indent: 32px;line-height:2em;font-size:14px;">2、一对一匹配（根据企业情况与项目申报时间相结合，匹配适合的项目为企业主申报）；</p>
                    <p style="text-align: left;text-indent: 32px;line-height:2em;font-size:14px;">3、专业团队支持（亿账柜将提供由2位项目技术工程师、1位财务专家和项目经理组成的项目团队，实时跟进项目规划与申报）；</p>
                    <p style="text-align: left;text-indent: 32px;line-height:2em;font-size:14px;">4、流程清晰明了（申报时，企业只需准备基础资料与报告，亿账柜将结合企业发展情况，制定申报材料）；</p>
                    <p style="text-align: left;text-indent: 32px;line-height:2em;font-size:14px;">5、一站式服务（形成企业主的贴心项目管家，无论是资质认定、政府补贴，还是区域配套资金，都将为企业设计一整套服务方案与流程，节省时间成本和精力，亿账柜全部帮您搞定！</p>
                    <p style="text-align: left;text-indent: 32px;">&nbsp;</p>
                    <div style="width:100%">
                        <p style="text-align: left;font-size:14px;padding-left:40%">销售名称:${this.detail.userMsg.length &&
                          this.detail.userMsg[0].realname}</p>
                        <p style="text-align: left;font-size:14px;padding-left:40%">联系方式:${this.detail.userMsg.length &&
                          this.detail.userMsg[0].mobilephone}</p>
                        <p style="text-align: left;font-size:14px;padding-left:40%">广州亿账柜信息科技有限公司</p>
                    </div>
                </body>
            </html>`;

    this.text = temp;
  }
  rongyu_text2html() {
    let template_array = [];
    for (let i = 0; i < this.detail.rongYu.length; i++) {
      let temp = `<tr>
                                <td width="260" style="border-width: 1px; border-style: solid;text-align: center;">
                                    <p>${this.detail.rongYu[i].XMMC}</p>
                                </td>
                                <td width="314" style="border-width: 1px; border-style: solid;text-align: center;">
                                    <p>${this.detail.rongYu[i].CreateDate}</p>
                                </td>
                            </tr>`;
      template_array.push(temp);
    }
    this.rongyuHtml = template_array.join('');
  }
  shenbao_text2html() {
    let template_array = [];
    for (let i = 0; i < this.detail.shenBao.length; i++) {
      let temp = `<tr>
                                <td style="text-align: center;border-width: 1px; border-style: solid;" width="58">
                                    <p>${i + 1}</p>
                                </td>
                                <td style="text-align: center;border-width: 1px; border-style: solid;" width="143">
                                    <p>${this.detail.shenBao[i].productname}</p>
                                </td>
                                <td style="text-align: center;border-width: 1px; border-style: solid;" width="239">
                                    <p>${this.detail.shenBao[i].concessions}</p>
                                </td>
                                <td style="text-align: center;border-width: 1px; border-style: solid;" width="136">
                                    <p>${this.detail.shenBao[i].declaredate}</p>
                                </td>
                            </tr>`;
      template_array.push(temp);
    }
    this.shenbaoHtml = template_array.join('');
  }

  created() {
    this.getReport();
  }
}
</script>

<style lang="scss" scoped>
.main {
  font-size: 16px;
  width: 100%;
}
</style>

