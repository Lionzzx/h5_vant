<template>
  <div>
    <div v-show="show" @click="hide" class="x-mask"></div>
    <div :style="{ background: bgColor }" :class="'x-popup-' + mode" v-show="show" class="x-popup">
      <div class="x-popup-title" v-if="!!title">{{ title }}</div>
      <slot />

      <van-icon class="x-close" @click="closeMask" v-if="icon" name="close"></van-icon>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant';
export default {
  components: { [Icon.name]: Icon },
  props: {
    bgColor: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    },
    buttonMode: {
      type: String,
      default: 'right'
    },
    mode: {
      type: String,
      default: 'middle'
    },
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  methods: {
    hide() {
      this.$emit('hidePopup');
    },
    closeMask() {
      this.$emit('hidePopup');
    },
    moveHandle() {}
  }
};
</script>

<style lang="scss" scoped>
@mixin ellipse-text($line-clamp: 1) {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: $line-clamp;
}
.x {
  &-mask {
    position: fixed;
    z-index: 998;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &-icon {
    width: 100%;
    height: 100%;
  }

  &-popup {
    position: fixed;
    z-index: 999;

    &-title {
      box-sizing: border-box;
      padding-left: 33px;
      width: 341px;
      height: 39px;
      font-size: 14px;
      font-weight: 700;
      line-height: 39px;
      color: rgba(44, 34, 34, 1);
      @include ellipse-text(1);
    }
  }

  &-popup-middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 11px 17px 0px rgba(0, 0, 0, 0.5);
    border-radius: 11px;
  }

  &-close {
    position: absolute;
    text-align: center;
    line-height: 28px;
    font-size: 26px;
    color: #000;
    right: -12px;
    top: -12px;
    font-weight: 700;
    background: #fff;
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
}

.uni-close-bottom,
.uni-close-right {
  position: absolute;
  bottom: -180px;
  text-align: center;
  border-radius: 50%;
  color: #f5f5f5;
  font-size: 60px;
  font-weight: bold;
  opacity: 0.8;
  z-index: 1;
}

.uni-close-bottom {
  margin: auto;
  left: 0;
  right: 0;
}

.uni-close-right {
  right: -32px;
  top: -36px;
}

.uni-close-bottom:after {
  content: '';
  position: absolute;
  width: 0px;
  border: 1px #f5f5f5 solid;
  top: -200px;
  bottom: 56px;
  left: 50%;
  transform: translate(-50%, -0%);
  opacity: 0.8;
}
</style>
