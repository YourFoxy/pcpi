<template>
  <div :class="$style.titleBlock">
    <div :class="$style.divider" />
    <div :class="$style.title">{{ title }}</div>
    <div :class="$style.divider" />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" module>
// height: 100vh;

.titleBlock {
  @include container;
  display: flex;
  padding-left: 0;
  padding-right: 0;
  @include xl-tablet {
    padding-left: 0;
    padding-right: 0;
  }
  .divider {
    margin-top: 2.25rem;
    flex: 1;
    border-bottom: 3px solid $orange;
    position: relative;
    top: -0.6rem;
  }
  .title {
    @include H2;
    text-align: center;
    margin-top: 2.5rem;
    padding: 0 1rem;
  }
}
</style>
