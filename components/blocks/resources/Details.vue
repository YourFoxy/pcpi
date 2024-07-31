<template>
  <div :class="$style.container" v-for="item in books" :key="item">
    <div v-if="item.id === route.params.slug" :class="$style.info">
      <div :class="$style.img">
        <img :src="item.img" alt="" />
      </div>

      <div :class="$style.block">
        <div :class="$style.title">{{ item.name }}</div>
        <div :class="$style.text" v-html="item.text"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
defineProps({
  books: {
    type: Array,
    default: [""],
  },
});
</script>

<style lang="scss" module>
.container {
  .info {
    @include container;
    display: flex;
    margin-top: 3rem;
    .img {
      margin-right: 2rem;
      img {
        width: 26rem;
        height: 38rem;
        object-fit: cover;
      }
    }
    .block {
      text-align: justify;
      .title {
        @include H3;

        margin-bottom: 1rem;
      }
      .text {
        @include LargText;

        margin-bottom: 1rem;
        p {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
}
</style>
