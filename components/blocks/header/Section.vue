<template>
  <div :class="[$style.section, { [$style.active]: isActive }]">
    <NuxtLink v-bind:to="toPage"> {{ name }}</NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: "",
  },
  toPage: {
    type: String,
    default: "/",
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" module>
.section {
  @include LargText;
  color: $white;
  @include xxl-tablet {
    @include Text;
    color: $white;
  }
}
.active {
  @include LargTextBold;
  border-bottom: 2px solid $orange;
  color: $white;
  font-weight: 600;
  @include xxl-tablet {
    @include TextBold;
    color: $white;
    border-bottom: 1.5px solid $orange;
  }
}
</style>
