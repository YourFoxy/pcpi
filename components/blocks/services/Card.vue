<template>
  <div :class="[$style.card, { [$style.active]: isActive }]">
    {{ text }}
  </div>
</template>
<script setup>
defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" module>
.card {
  @include LargTextBold;
  width: 22rem;
  height: 14rem;
  color: $white;
  text-align: center;
  padding: 1rem 1.5rem;
  align-content: center;
  border-radius: 1.5rem;
  background-color: $gray;
  box-shadow: 10px 0px 12px rgba(20, 20, 20, 0.3);
}
.active {
  background-color: $orange;
}
</style>
