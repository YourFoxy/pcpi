<template>
  <div :class="$style.container">
    <DividerCenterTitle :title="title" />
    <div :class="$style.description">
      Непериодические печатные издания НЦПИ (Конституция и кодексы Республики
      Беларусь, сборники нормативных правовых актов и комментированные издания,
      издания серии «Правовая библиотека НЦПИ»), иные издания правовой тематики.
    </div>
    <div :class="$style.books">
      <NuxtLink
        v-for="item in periodic"
        :key="item"
        :to="'/periodic/' + item.id"
      >
        <Book :text="item.text" :name="item.name" :id="item.id" :img="item.img"
      /></NuxtLink>
    </div>
  </div>
</template>

<script setup>
import DividerCenterTitle from "~/components/blocks/DividerCenterTitle.vue";
import Book from "~/components/blocks/resources/Book.vue";
import { periodicInfo } from "~/assets/info/periodic.js";
const title = "Непериодические печатные издания";
const periodic = periodicInfo();
</script>

<style lang="scss" module>
.container {
  height: 100%;
  .description {
    @include container;
    @include LargText;
    margin-top: 2rem;
  }
  .books {
    @include container;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
  }
}
</style>
