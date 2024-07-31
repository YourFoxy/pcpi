<template>
  <div :class="$style.titleBlock">
    <div :class="$style.title">{{ title }}</div>
    <div :class="$style.divider" />
  </div>
</template>
import type { Style } from '#build/components';

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
  display: flex;
  .title {
    @include H2;
    text-align: center;
    margin-top: 2.5rem;
    padding: 0 1rem 0 3.75rem;
    @include xl-tablet {
      padding: 0 1rem 0 1rem;
    }
  }
  .divider {
    margin-top: 2.25rem;
    flex: 1;
    border-bottom: 3px solid $orange;
    position: relative;
    top: -0.6rem;
  }
}
</style>
