<template>
  <div :class="$style.container">
    <div :class="$style.marker"></div>
    <div>
      <div v-html="text" :class="$style.text"></div>
      <a :href="url" target="_blank">перейти>></a>
    </div>
  </div>
</template>

<script setup>
const title = "Государственные информационно-правовые ресурсы";

defineProps({
  text: {
    type: String,
    default: "",
  },
  url: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" module>
.container {
  @include LargText;
  padding: 1rem;
  text-align: justify;
  display: flex;

  max-width: 48%;
  width: 100%;
  @include tablet {
    display: block;
    max-width: 100%;
  }
  .text {
    margin-bottom: 0.5rem;
  }
  .marker {
    height: 1rem;
    min-width: 1rem;
    background-color: $orange;
    margin-top: 0.375rem;
    margin-right: 1rem;
    position: relative;
    top: -0.2rem;
    @include tablet {
      height: 0.2rem;
    }
  }
  a {
    @include LargTextBold;
    color: $orange;
  }
  b {
    @include LargTextBold;
  }
}
</style>
