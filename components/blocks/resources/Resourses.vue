<template>
  <div :class="$style.container">
    <DividerCenterTitle :title="title" />

    <div :class="$style.cards">
      <Card
        :text="res.text"
        :url="res.url"
        v-for="res in resources"
        :key="res"
      />
    </div>
  </div>
</template>

<script setup>
import DividerCenterTitle from "~/components/blocks/DividerCenterTitle.vue";

import Card from "~/components/blocks/resources/Card.vue";
import { resourcesInfo } from "~/assets/info/resources.js";
const resources = resourcesInfo();
const title = "Государственные информационно-правовые ресурсы";
</script>

<style lang="scss" module>
.container {
  .cards {
    @include container;
    display: flex;
    flex-wrap: wrap;
    gap: rem;
    margin-top: 2rem;
  }
}
</style>
