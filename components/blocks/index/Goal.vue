<template>
  <div :class="$style.container">
    <div :class="$style.number">{{ number }}</div>
    <div :class="$style.text">
      {{ text }}
    </div>
    <div v-if="isShowDivider" :class="$style.divider" />
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "",
  },
  number: {
    type: String,
    default: "",
  },
  isShowDivider: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" module>
.container {
  // height: 100vh;
  text-align: center;
  padding-top: 2.5rem;
  .number {
    @include H3;

    color: $orange;
    margin-bottom: 1.5rem;
  }
  .text {
    @include LargText;
    padding-bottom: 1.5rem;
    width: 52rem;
    margin: auto;
    @include xl-tablet {
      width: 35rem;
    }
    @include tablet {
      width: 22rem;
    }
  }
  .divider {
    width: 32rem;

    margin: auto;
    border-bottom: 2px dashed $orange;
    position: relative;
    @include xl-tablet {
      width: 22rem;
    }
    @include tablet {
      width: 12rem;
    }
  }
}
</style>
