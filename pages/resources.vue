<template>
  <div :class="$style.container">
    <div :class="$style.menu">
      <div
        v-for="(section, index) in sections"
        :key="index"
        :class="[$style.section, { [$style.active]: active === section }]"
        @click="setActive(index)"
      >
        <a v-bind:href="'#' + section"> {{ section }}</a>
      </div>
    </div>

    <Resourses :id="sections[0]" :class="$style.content" class="content" />
    <Nonperiodic :id="sections[1]" :class="$style.content" class="content" />
    <Periodic :id="sections[2]" :class="$style.content" class="content" />
    <Exposition :id="sections[3]" :class="$style.content" class="content" />
  </div>
</template>

<script setup>
import Resourses from "~/components/blocks/resources/Resourses.vue";
import Nonperiodic from "~/components/blocks/resources/Periodic.vue";
import Periodic from "~/components/blocks/resources/Nonperiodic.vue";
import Exposition from "~/components/blocks/resources/Exposition.vue";

const setActive = (index) => {
  active.value = index;
};

const sections = [
  "Ресурсы",
  "Периодические издания",
  "Непериодические издания",
  "Виртуальные выставки",
];

const active = ref(sections[0]);

onMounted(() => {
  window.addEventListener("scroll", function (e) {
    const markingCards = e.srcElement.getElementsByClassName("content");

    for (let i = 0; i < markingCards.length; i++) {
      if (markingCards[i].getBoundingClientRect().bottom > 0) {
        console.log(markingCards[i]);
        console.log("m" + markingCards[i].id);
        active.value = markingCards[i].id;

        break;
      }
    }
  });
});
</script>

<style lang="scss" module>
.container {
  margin-bottom: 3rem;
  .menu {
    margin-left: 3.75rem;
    margin-top: 1rem;
    display: flex;
    border-bottom: 2px solid $gray-opacity;
    position: sticky;
    background: $white;
    top: 0;
    z-index: 10;
    .section {
      @include LargText;
      margin-right: 1rem;
      cursor: pointer;
      position: relative;
      padding: 1rem 0 0.25rem 0;
      top: 0.1rem;
    }
    .active {
      @include LargTextBold;
      border-bottom: 2px solid $orange;

      font-weight: 600;
    }
    @include tablet {
      display: block;
      margin-left: 1rem;
    }
  }
}
</style>
