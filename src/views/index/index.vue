<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserModule from '@/store/modules/user';
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
]);
@Component({})
export default class route extends Vue {
  async beforeRouteEnter(to: any, from: any, next: any) {
    const resp = await UserModule.getCompanyList();
    // 跳转判断
    let home =
      resp[0] && resp[0].serviceDeparts
        ? resp[0].serviceDeparts.split(',').includes('ACCOUNT')
          ? 'ACCOUNT'
          : 'BUSSINESS'
        : 'BUSSINESS';
    if (home == 'ACCOUNT') {
      next({ name: 'account' });
    } else {
      next({ name: 'commercial' });
    }
  }
}
</script>