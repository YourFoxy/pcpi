<template>
  <div :class="$style.container">
    <div v-if="isActive">
      <NuxtLink :to="'/viewer-smi/' + articleId"
        ><div :class="$style.active" id="y">
          <div :class="$style.text" v-html="text"></div></div
      ></NuxtLink>
    </div>
    <div v-if="!isActive">
      <div :class="$style.text" v-html="text"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "",
  },

  isActive: {
    type: Boolean,
    default: false,
  },
  articleId: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" module>
.container {
  max-width: 48%;
  @include xl-tablet {
    overflow: hidden;
  }
  @include tablet {
    max-width: 100%;
  }
  .text {
    padding: 1rem;
    text-align: justify;
    a {
      color: $orange;
    }
  }
}
.active {
  border-left: 2px solid $orange;
  cursor: pointer;
  &:hover {
    background-color: $gray-opacity;
  }
}
</style>
