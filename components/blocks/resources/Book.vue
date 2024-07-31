<template>
  <div :class="$style.container">
    <div :class="$style.book">
      <img :src="img" alt="" height="416" />
      <div :class="$style.description">
        <div :class="$style.text" v-html="name"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  img: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" module>
.container {
  .book {
    width: 19rem;
    height: 26rem;
    cursor: pointer;
    overflow: hidden;
    .description {
      position: relative;
      height: 110%;
      top: -26.3rem;
      display: none;
      background-color: $black-opacity;
      .text {
        @include LargText;
        color: $white;
        height: 25rem;
        padding: 1.25rem;
        overflow: hidden;
        border-radius: 0.25rem;
      }
    }

    img {
      width: 100%;
      height: 26rem;
      object-fit: cover;
      border-radius: 0.25rem;
      //   &:hover {
      //     filter: brightness(30%) blur(0.5px);
      //   }
    }
    &:hover {
      .description {
        display: block;
      }
    }
  }
}
</style>
