<template>
  <div :class="$style.container">
    <NuxtLink :to="'/details/' + id">
      <div :class="$style.date">{{ date }}</div>
      <div :class="$style.card">
        <img :src="gallery[0]" :class="$style.img" />
        <div :class="$style.textBlock">
          <div :class="$style.name">{{ name }}</div>

          <div :class="$style.text" v-html="text"></div>
        </div></div
    ></NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  gallery: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" module>
.container {
  .date {
    @include Text;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
  }
  .card {
    height: 28rem;
    width: 24rem;
    box-shadow: 5px 4px 12px rgba(20, 20, 20, 0.2);
    border-radius: 2rem;
    @include tablet {
      height: 24rem;
      width: 18rem;
    }
    .img {
      width: 100%;
      height: 13rem;
      border-radius: 2rem 2rem 0 0;
      object-fit: cover;
      @include tablet {
        height: 10rem;
      }
    }
    .textBlock {
      padding: 1rem 1.5rem 1rem 1.5rem;
      height: 13.5rem;
      overflow: hidden;
      text-align: justify;
      @include tablet {
        height: 12.3rem;
      }
      //   word-break: break-all;

      .name {
        @include LargTextBold;
      }
      .text {
        @include LargText;
        margin-top: 0.5rem;
      }
    }
  }
}
</style>
