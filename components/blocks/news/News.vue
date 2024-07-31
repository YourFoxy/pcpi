<template>
  <div :class="$style.container">
    <div :class="$style.title">{{ title }}</div>
    <div :class="$style.cards">
      <div v-for="item in news" :key="item">
        <Card
          :name="item.name"
          :date="item.date"
          :text="item.text"
          :gallery="item.gallery"
          :id="item.id"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import DividerRightTitle from "~/components/blocks/DividerRightTitle.vue";
import Card from "~/components/blocks/news/Card.vue";
import { newsInfo } from "~/assets/info/news.js";

const title = "Новости";
const news = newsInfo();
</script>

<style lang="scss" module>
.container {
  .title {
    @include H2;

    margin-top: 2.5rem;
    padding: 0 1rem 0 3.75rem;
    @include custom(1330) {
      text-align: center;
      padding: 0;
    }
  }
  .cards {
    @include container;
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem 1rem;

    @include custom(1330) {
      justify-content: center;
      gap: 2rem 3rem;
    }
  }
}
</style>
