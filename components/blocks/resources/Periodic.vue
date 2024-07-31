<template>
  <div :class="$style.container">
    <DividerCenterTitle :title="title" />
    <div :class="$style.description">
      Периодические издания правовой тематики (научно-практический журнал
      «Право.by», «Бюллетень Министерства труда и социальной защиты Республики
      Беларусь», «Веснік Гродзенскага дзяржаўнага ўніверсітэта імя Я. Купалы»,
      «Веснік Канстытуцыйнага суда Рэспублікі Беларусь», «Зборнік нарматыўных
      дакументаў Міністэрства адукацыі Рэспублікі Беларусь», «Национальный
      реестр правовых актов Респубики Беларусь», «Предварительное
      расследование», «Судебная экспериза»).
    </div>
    <div :class="$style.books">
      <NuxtLink
        v-for="item in nonperiodic"
        :key="item"
        :to="'/nonperiodic/' + item.id"
      >
        <Book :text="item.text" :name="item.name" :id="item.id" :img="item.img"
      /></NuxtLink>
    </div>
  </div>
</template>

<script setup>
import DividerCenterTitle from "~/components/blocks/DividerCenterTitle.vue";
import Book from "~/components/blocks/resources/Book.vue";
import { nonperiodicInfo } from "~/assets/info/nonperiodic.js";
const title = "Периодические печатные издания";
const nonperiodic = nonperiodicInfo();
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

    gap: 1.5rem;
    margin-top: 2rem;
    justify-content: center;
  }
}
</style>
