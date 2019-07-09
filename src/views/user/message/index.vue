<template>
  <div>
    <nav-bar title="我的消息" has-left></nav-bar>
    <van-contact-card type="edit" :name="currentContact.name" :tel="currentContact.tel" @click="showList = true" />
    <van-contact-card type="edit" :name="currentContact.name" :tel="currentContact.tel" @click="showList = true" />
    <van-contact-card type="edit" :name="currentContact.name" :tel="currentContact.tel" @click="showList = true" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar/index.vue';
import { ContactCard } from 'vant';

@Component({
  components: {
    NavBar,
    [ContactCard.name]: ContactCard
  }
})
export default class Message extends Vue {
  private currentContact = [
    {
      name: '张三',
      tel: '13000000000',
      id: 0
    }
  ];
}
</script>

