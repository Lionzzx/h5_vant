<template>
  <div class="page"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { storeApi } from '@/api';
import UserModule from '@/store/modules/user';

@Component({})
export default class route extends Vue {
  async created() {
    const resp = await UserModule.getCompanyList();
    let home = resp[0] && resp[0].service_departs ? resp[0].service_departs.split(',')[0] : 'BUSSINESS';
    UserModule.SETHOME(home);
    if (home == 'ACCOUNT') {
      this.$router.push({ name: 'account' });
    } else {
      this.$router.push({ name: 'commercial' });
    }
  }
}
</script>