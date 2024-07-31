<template>
  <div>
    <ViewerNews :items="news" />
  </div>
</template>
<script setup>
import ViewerNews from "~/components/blocks/ViewerNews.vue";
import { newsInfo } from "~/assets/info/news.js";

const news = newsInfo();
</script>

<style lang="scss" module></style>
